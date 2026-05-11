import {
  UtensilsCrossed,
  Megaphone,
  MessageSquareReply,
  Ticket,
  CloudRain,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type CardData = {
  icon: typeof UtensilsCrossed;
  badge: string;
  title: string;
  body: React.ReactNode;
};

const cards: CardData[] = [
  {
    icon: UtensilsCrossed,
    badge: "메뉴",
    title: "오늘 밀 메뉴 · 따뜻한 토마토 수프 세트",
    body: (
      <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
        <p>
          <span className="font-semibold text-neutral-900">근거</span> · 비
          예보 + 남은 토마토 2kg 결합
        </p>
        <p>
          <span className="font-semibold text-neutral-900">제안</span> · 점심
          12시 게시 추천, 사이드 음료 묶음
        </p>
      </div>
    ),
  },
  {
    icon: Megaphone,
    badge: "SNS 문구",
    title: "네이버 · 인스타 한 줄",
    body: (
      <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
        <div>
          <div className="text-xs font-bold text-brand-700 mb-1">네이버</div>
          <p>
            비 내리는 오늘, 따끈한 토마토 수프와 클럽샌드위치 세트 12시
            오픈합니다 ☔
          </p>
        </div>
        <div className="pt-2 border-t border-neutral-100">
          <div className="text-xs font-bold text-brand-700 mb-1">인스타</div>
          <p>
            토마토 수프 + 클럽샌드위치 세트, 비 오는 화요일 점심 ☔ 따끈한 한
            끼{" "}
            <span className="text-brand-600 font-medium">
              #햇살샌드 #수원영통점심 #토마토수프
            </span>
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: MessageSquareReply,
    badge: "리뷰 답변 3건",
    title: "어제 들어온 리뷰에 즉답 초안",
    body: (
      <div className="space-y-3 text-sm leading-relaxed">
        <div>
          <p className="text-neutral-500 italic">&ldquo;점심 대기 길다&rdquo;</p>
          <p className="text-neutral-800 mt-0.5">
            → 12시 직전 미리 포장 예약 가능합니다. 카톡 채널로 주문 부탁드려요.
          </p>
        </div>
        <div>
          <p className="text-neutral-500 italic">
            &ldquo;비 오는 날 배달 필요&rdquo;
          </p>
          <p className="text-neutral-800 mt-0.5">
            → 오늘 비 예보라 배민·쿠팡이츠 동시 오픈했습니다. 배달팁 -1,000원
            진행 중.
          </p>
        </div>
        <div>
          <p className="text-neutral-500 italic">
            &ldquo;토마토 신선했다&rdquo;
          </p>
          <p className="text-neutral-800 mt-0.5">
            → 오늘 들어온 친환경 토마토 2kg로 수프 세트 만들었습니다.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Ticket,
    badge: "쿠폰",
    title: "비 오는 화요일 한정 1,000원 할인",
    body: (
      <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
        <p>
          토마토 수프 세트 주문 시 사이드 음료{" "}
          <span className="font-bold text-brand-700">1,000원 할인</span>.
          17시까지.
        </p>
        <div className="inline-flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-1.5 ring-1 ring-brand-200">
          <span className="text-xs text-brand-700 font-semibold">유효</span>
          <span className="text-sm font-bold text-brand-700 tabular-nums">
            오늘 17:00까지
          </span>
        </div>
      </div>
    ),
  },
  {
    icon: CloudRain,
    badge: "재고·날씨",
    title: "오늘 종일 비 · 재고 우선순위",
    body: (
      <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
        <div>
          <div className="text-xs font-bold text-brand-700 mb-1">날씨</div>
          <p>
            오늘 종일 비 예보 (강수확률 80%). 따뜻한 메뉴 우선 노출 권장.
          </p>
        </div>
        <div className="pt-2 border-t border-neutral-100 space-y-1">
          <div className="text-xs font-bold text-brand-700 mb-1">재고</div>
          <p>토마토 2kg → 오늘 수프 세트로 소진</p>
          <p>햄 1.5kg → 내일 클럽샌드 추가</p>
          <p>치아바타 8개 → 16시까지 SOLD 가능</p>
        </div>
      </div>
    ),
  },
];

export default function SolutionPreview() {
  return (
    <section id="solution" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤드라인 */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-4">
            Today&apos;s Cards
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
            <span className="brand-text-gradient">
              오늘장사카드 한 장이면,
            </span>
            <br />
            <span className="text-neutral-900">아침 8시가 달라집니다</span>
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            샌드위치 가게 &lsquo;햇살샌드&rsquo; A대표(수원 영통 12평)의 비 오는
            화요일 아침. 카드는 이렇게 도착합니다.
          </p>
        </div>

        {/* 5종 카드 그리드: md 2 / lg 3 / 마지막 행 중앙 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map(({ icon: Icon, badge, title, body }, i) => (
            <Card
              key={badge}
              className={`group relative border-l-4 border-l-brand-500 ring-0 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden ${
                i === 3 ? "lg:col-start-1" : ""
              } ${i === 4 ? "lg:col-start-2" : ""}`}
            >
              {/* 상단 brand-100 띠 */}
              <div
                aria-hidden="true"
                className="h-1.5 w-full bg-gradient-to-r from-brand-100 via-brand-200 to-brand-100 -mt-4 mb-1"
              />
              <CardHeader className="px-5 pt-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge
                    variant="outline"
                    className="bg-brand-50 text-brand-700 border-brand-200 font-bold"
                  >
                    <span className="text-[10px] tabular-nums mr-1">
                      0{i + 1}
                    </span>
                    {badge}
                  </Badge>
                  <div className="size-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100 group-hover:bg-brand-100 transition-colors">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <CardTitle className="mt-3 text-base font-extrabold text-neutral-900 leading-snug">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">{body}</CardContent>
            </Card>
          ))}
        </div>

        {/* 하단 캡션 */}
        <p className="mt-10 text-center text-sm text-neutral-500">
          모든 카드는{" "}
          <span className="font-semibold text-brand-700">
            Claude Haiku 4.5
          </span>
          가 점주 입력값과 외부 신호(날씨·요일)를 결합해 생성합니다. 점주가 그대로
          쓰거나 한 번 다듬어 게시.
        </p>
      </div>
    </section>
  );
}
