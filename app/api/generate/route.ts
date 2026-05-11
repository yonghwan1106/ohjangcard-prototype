import { NextResponse } from "next/server";
import { anthropic, MODEL_ID } from "@/lib/anthropic";
import {
  GenerateRequestSchema,
  CardOutputSchema,
  type CardOutput,
} from "@/lib/schema";
import { SYSTEM_PROMPT, buildUserMessage } from "@/lib/prompts";
import { PERSONAS } from "@/lib/personas";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FALLBACK: CardOutput = {
  menu: {
    title: "비 오는 날 추천 메뉴",
    items: [
      {
        name: "클럽샌드위치 포장 세트",
        reason: "비 오는 날 포장 수요 높음. 토마토 재고 오늘 소진 목표.",
      },
      {
        name: "에그마요 샌드위치",
        reason: "햄 재고 절반 소진용. 단가 낮아 점심 빠른 회전 가능.",
      },
    ],
  },
  sns: {
    naver:
      "오늘 비 오는 날, 햇살샌드는 포장 대기 없이 빠르게 드립니다. 전화 선주문 환영. 점심 11시 30분부터 준비 완료. #수원샌드위치 #영통맛집 #포장전문",
    instagram:
      "비 오는 월요일엔 따뜻한 클럽샌드위치 한 입으로 시작 🥪☂️ 오늘은 포장 줄 없이 바로 받아가세요. 전화 선주문 가능합니다. #햇살샌드 #수원영통 #샌드위치맛집 #점심추천 #포장맛집",
  },
  reviews: [
    {
      quote: "점심 대기가 길다",
      reply:
        "점심 피크 때 불편드려 죄송합니다. 11시 30분~12시 사이 방문하시면 대기 없이 바로 드실 수 있어요. 전화 선주문도 받고 있으니 편하게 연락 주세요.",
    },
    {
      quote: "비 오는 날 배달이 있으면 좋겠다",
      reply:
        "배달 도입을 준비 중입니다. 지금은 전화 선주문 후 포장 수령으로 비 안 맞고 빠르게 가져가실 수 있어요. 조금만 기다려 주세요.",
    },
    {
      quote: "토마토가 신선했다",
      reply:
        "매일 아침 직접 손질한 토마토를 쓰고 있어요. 맛있게 드셨다니 기쁩니다. 오늘도 신선한 재료로 준비하겠습니다.",
    },
  ],
  coupon: {
    headline: "비 오는 날 포장 할인",
    body: "오늘 포장 주문 시 클럽샌드위치 + 음료 세트 500원 할인. 전화 선주문 필수.",
    valid_until: "오늘 하루(영업 마감 시)",
  },
  inventory_weather: {
    weather_note:
      "비 예보로 점심 외출 고객 감소 예상. 포장·선주문 안내 전면에 배치. 우산 거치대 입구 준비.",
    inventory_note:
      "토마토 오늘 소진 목표 — 클럽·BLT 위주 판매. 치아바타 한정이므로 품절 시 호밀빵 대체 안내.",
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = GenerateRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "invalid input", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }
    const persona = PERSONAS.find((p) => p.id === parsed.data.persona_id);
    if (!persona)
      return NextResponse.json({ error: "persona not found" }, { status: 400 });

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({
        data: FALLBACK,
        fallback: true,
        reason: "ANTHROPIC_API_KEY missing",
      });
    }

    const userMsg = buildUserMessage(parsed.data, persona);
    const resp = await anthropic.messages.create({
      model: MODEL_ID,
      max_tokens: 2048,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: userMsg }],
    });

    const text = resp.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { type: "text"; text: string }).text)
      .join("");

    const first = text.indexOf("{");
    const last = text.lastIndexOf("}");
    const json =
      first >= 0 && last > first ? text.slice(first, last + 1) : text;

    let parsedOutput: unknown;
    try {
      parsedOutput = JSON.parse(json);
    } catch {
      return NextResponse.json({
        data: FALLBACK,
        fallback: true,
        reason: "json parse failed",
      });
    }

    const validated = CardOutputSchema.safeParse(parsedOutput);
    if (!validated.success) {
      return NextResponse.json({
        data: FALLBACK,
        fallback: true,
        reason: "schema mismatch",
        issues: validated.error.flatten(),
      });
    }

    return NextResponse.json({
      data: validated.data,
      fallback: false,
      usage: resp.usage,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "unknown";
    return NextResponse.json(
      { data: FALLBACK, fallback: true, reason: msg },
      { status: 200 },
    );
  }
}
