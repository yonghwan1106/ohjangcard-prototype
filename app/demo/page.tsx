"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  RotateCcw,
  Info,
  Loader2,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PersonaPicker from "@/components/persona-picker";
import InputForm from "@/components/input-form";
import MenuCard from "@/components/cards/menu-card";
import SnsCard from "@/components/cards/sns-card";
import ReviewCard from "@/components/cards/review-card";
import CouponCard from "@/components/cards/coupon-card";
import WeatherInventoryCard from "@/components/cards/weather-inventory-card";
import { PERSONAS, type Persona } from "@/lib/personas";
import type { CardOutput, GenerateRequest, Weather } from "@/lib/schema";

type Usage = {
  input_tokens?: number;
  output_tokens?: number;
  cache_read_input_tokens?: number;
  cache_creation_input_tokens?: number;
};

const STEP_LABELS = ["1. 가게 선택", "2. 입력 확인", "3. 카드 결과"] as const;

export default function DemoPage() {
  const [persona, setPersona] = React.useState<Persona | null>(null);
  const [weather, setWeather] = React.useState<Weather>("rainy");
  const [output, setOutput] = React.useState<CardOutput | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [fallback, setFallback] = React.useState(false);
  const [fallbackReason, setFallbackReason] = React.useState<string | null>(null);
  const [usage, setUsage] = React.useState<Usage | null>(null);
  const [lastRequest, setLastRequest] = React.useState<GenerateRequest | null>(
    null,
  );
  const [elapsed, setElapsed] = React.useState(0);

  const step: 1 | 2 | 3 = output ? 3 : persona ? 2 : 1;

  // Step 2 입력 폼 영역으로 스크롤
  const formRef = React.useRef<HTMLDivElement | null>(null);
  const resultRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (persona && !output) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [persona, output]);
  React.useEffect(() => {
    if (output) {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [output]);

  // 로딩 카운트다운
  React.useEffect(() => {
    if (!isLoading) {
      setElapsed(0);
      return;
    }
    const start = Date.now();
    const id = window.setInterval(() => {
      setElapsed((Date.now() - start) / 1000);
    }, 100);
    return () => window.clearInterval(id);
  }, [isLoading]);

  async function handleGenerate(req: GenerateRequest) {
    setIsLoading(true);
    setOutput(null);
    setFallback(false);
    setFallbackReason(null);
    setUsage(null);
    setLastRequest(req);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      });
      const json = (await res.json()) as {
        data: CardOutput;
        fallback?: boolean;
        reason?: string;
        usage?: Usage;
      };
      setOutput(json.data);
      setFallback(!!json.fallback);
      setFallbackReason(json.reason ?? null);
      setUsage(json.usage ?? null);
    } catch (e) {
      window.alert("생성 실패: " + (e as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleRegenerate(newWeather?: Weather) {
    if (!lastRequest) return;
    const next = newWeather ?? weather;
    if (newWeather) setWeather(newWeather);
    handleGenerate({ ...lastRequest, weather: next });
  }

  function handleReset() {
    setPersona(null);
    setOutput(null);
    setFallback(false);
    setUsage(null);
    setLastRequest(null);
    setWeather("rainy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="flex-1 brand-gradient min-h-screen pb-24">
      {/* Top bar */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-brand-100">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Button
            render={
              <Link href="/" aria-label="홈으로 돌아가기">
                <ArrowLeft className="size-4" />
                홈으로
              </Link>
            }
            variant="ghost"
            size="sm"
            className="text-brand-700 hover:bg-brand-50"
          />
          <div className="flex items-center gap-1.5 text-xs font-bold">
            <span className="text-brand-600 hidden sm:inline">
              🌅 오늘장사카드
            </span>
            <span className="text-neutral-400 hidden sm:inline">/</span>
            <span className="text-brand-700">라이브 데모</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 lg:pt-14">
        {/* 페이지 헤드라인 */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-brand-600 uppercase mb-3">
            Live Demo · Claude Haiku 4.5
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
            <span className="brand-text-gradient">직접 만져보면</span>
            <span className="text-neutral-900">, 진짜 압니다</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            가게를 고르고 한 번만 누르면, 오늘 하루 SNS·메뉴·리뷰·쿠폰·재고
            카드 5장이 5초 안에 도착합니다.
          </p>
        </div>

        {/* Step indicator */}
        <ol className="flex items-center justify-center gap-3 sm:gap-6 mb-10 lg:mb-14">
          {STEP_LABELS.map((label, i) => {
            const idx = (i + 1) as 1 | 2 | 3;
            const done = idx < step;
            const active = idx === step;
            return (
              <li key={label} className="flex items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div
                    className={[
                      "size-8 rounded-full grid place-items-center text-xs font-bold transition-all",
                      done
                        ? "bg-brand-600 text-white"
                        : active
                          ? "bg-brand-600 text-white ring-4 ring-brand-200"
                          : "bg-white text-neutral-400 ring-1 ring-neutral-200",
                    ].join(" ")}
                  >
                    {done ? (
                      <CheckCircle2 className="size-4" aria-hidden="true" />
                    ) : (
                      idx
                    )}
                  </div>
                  <span
                    className={[
                      "text-xs sm:text-sm font-bold transition-colors hidden sm:inline",
                      active || done ? "text-brand-700" : "text-neutral-400",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div
                    className={[
                      "h-px w-8 sm:w-12 transition-colors",
                      done ? "bg-brand-500" : "bg-neutral-300",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>

        {/* STEP 1 — 페르소나 선택 */}
        <section
          aria-labelledby="step-1-heading"
          className="rounded-2xl bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm ring-1 ring-brand-100 mb-8"
        >
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-1.5">
                STEP 1
              </p>
              <h2
                id="step-1-heading"
                className="text-xl md:text-2xl font-extrabold text-neutral-900"
              >
                가게 페르소나 선택
              </h2>
              <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                실제 수원·용인 소상공인 가게를 모티프로 한 3개 시나리오. 클릭
                즉시 입력이 자동 채워집니다.
              </p>
            </div>
            {persona && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-brand-700 hover:bg-brand-50 shrink-0"
              >
                <RotateCcw className="size-3" aria-hidden="true" />
                다시 선택
              </Button>
            )}
          </div>
          <PersonaPicker
            selected={persona?.id ?? null}
            onSelect={(id) => {
              const p = PERSONAS.find((x) => x.id === id) ?? null;
              setPersona(p);
              setOutput(null);
              setUsage(null);
            }}
          />
        </section>

        {/* STEP 2 — 입력 폼 */}
        {persona && (
          <section
            ref={formRef}
            aria-labelledby="step-2-heading"
            className="rounded-2xl bg-white/95 backdrop-blur p-6 md:p-8 shadow-md ring-1 ring-brand-100 mb-8 scroll-mt-24"
          >
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-1.5">
                STEP 2
              </p>
              <h2
                id="step-2-heading"
                className="text-xl md:text-2xl font-extrabold text-neutral-900"
              >
                <span aria-hidden="true">{persona.emoji} </span>
                {persona.store_name} · 오늘 입력
              </h2>
              <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                기본값을 그대로 두거나 자유롭게 수정하세요. 날씨를 바꾸면 같은
                가게라도 카드가 다르게 나옵니다.
              </p>
            </div>
            <InputForm
              persona={persona}
              weather={weather}
              onWeatherChange={setWeather}
              onSubmit={handleGenerate}
              isLoading={isLoading}
            />
          </section>
        )}

        {/* 로딩 패널 */}
        {isLoading && (
          <section
            aria-live="polite"
            aria-busy="true"
            className="rounded-2xl bg-white/95 backdrop-blur p-8 md:p-10 shadow-md ring-1 ring-brand-100 mb-8 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4">
              <div className="size-16 rounded-2xl bg-brand-100 grid place-items-center">
                <Loader2
                  className="size-9 text-brand-700 animate-spin"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-neutral-900">
                  Claude Haiku 4.5가 분석 중…
                </h3>
                <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed max-w-md">
                  어제 매출 · 리뷰 · 재고 · 오늘 날씨를 결합해 5종 카드를
                  엮고 있습니다.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 ring-1 ring-brand-200">
                <span className="text-xs font-bold text-brand-700 tabular-nums">
                  {elapsed.toFixed(1)}초
                </span>
                <span className="text-xs text-brand-700">/ 평균 5~8초</span>
              </div>
            </div>
          </section>
        )}

        {/* STEP 3 — 카드 결과 */}
        {output && !isLoading && (
          <section
            ref={resultRef}
            aria-labelledby="step-3-heading"
            className="rounded-2xl bg-white/95 backdrop-blur p-6 md:p-8 shadow-md ring-1 ring-brand-100 scroll-mt-24"
          >
            <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-1.5">
                  STEP 3
                </p>
                <h2
                  id="step-3-heading"
                  className="text-xl md:text-2xl font-extrabold text-neutral-900"
                >
                  오늘의 5종 카드
                </h2>
                <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                  각 카드는 복사 버튼으로 그대로 SNS에 붙여 넣을 수 있습니다.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {(["sunny", "rainy", "cloudy"] as const).map((w) => {
                  const label =
                    w === "sunny" ? "맑음 ☀️" : w === "rainy" ? "비 ☔" : "흐림 ☁️";
                  const active = weather === w;
                  return (
                    <Button
                      key={w}
                      type="button"
                      variant={active ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleRegenerate(w)}
                      disabled={isLoading}
                      className={[
                        active
                          ? "bg-brand-600 text-white hover:bg-brand-700"
                          : "border-brand-200 text-brand-700 hover:bg-brand-50",
                        "font-bold",
                      ].join(" ")}
                    >
                      {label}
                    </Button>
                  );
                })}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleRegenerate()}
                  disabled={isLoading}
                  className="border-brand-300 text-brand-700 hover:bg-brand-50 font-bold"
                >
                  <RotateCcw className="size-3" aria-hidden="true" />
                  재생성
                </Button>
              </div>
            </div>

            {/* fallback 배너 */}
            {fallback && (
              <div className="mb-6 rounded-xl bg-neutral-100 ring-1 ring-neutral-200 px-4 py-3 flex items-start gap-2.5">
                <AlertTriangle
                  className="size-4 text-neutral-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-xs text-neutral-700 leading-relaxed">
                  <span className="font-bold text-neutral-900">
                    데모 fallback 카드 표시 중
                  </span>{" "}
                  · API 키 없음 또는 응답 검증 실패
                  {fallbackReason ? (
                    <span className="text-neutral-500">
                      {" "}
                      ({fallbackReason})
                    </span>
                  ) : null}
                  . 본 서비스에서는 실제 Claude Haiku 4.5 응답이 표시됩니다.
                </div>
              </div>
            )}

            {/* 5종 카드 그리드 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              <MenuCard data={output.menu} showCopy />
              <SnsCard data={output.sns} showCopy />
              <ReviewCard data={output.reviews} showCopy />
              <div className="lg:col-start-1">
                <CouponCard data={output.coupon} showCopy />
              </div>
              <div className="lg:col-start-2">
                <WeatherInventoryCard
                  data={output.inventory_weather}
                  showCopy
                />
              </div>
            </div>

            {/* 메타 정보 */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <Sparkles
                  className="size-3 text-brand-600"
                  aria-hidden="true"
                />
                <span>
                  모델 <span className="font-mono text-neutral-700">claude-haiku-4-5</span> · 5종 카드 · 날씨{" "}
                  <span className="font-bold text-brand-700">
                    {weather === "sunny" ? "맑음" : weather === "rainy" ? "비" : "흐림"}
                  </span>
                </span>
              </div>
              {usage && (
                <div className="flex items-center gap-3 flex-wrap">
                  {typeof usage.input_tokens === "number" && (
                    <span>
                      입력{" "}
                      <span className="font-bold text-neutral-700 tabular-nums">
                        {usage.input_tokens}
                      </span>{" "}
                      tok
                    </span>
                  )}
                  {typeof usage.output_tokens === "number" && (
                    <span>
                      출력{" "}
                      <span className="font-bold text-neutral-700 tabular-nums">
                        {usage.output_tokens}
                      </span>{" "}
                      tok
                    </span>
                  )}
                  {typeof usage.cache_read_input_tokens === "number" &&
                    usage.cache_read_input_tokens > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 ring-1 ring-brand-200 text-brand-700">
                        <Info className="size-3" aria-hidden="true" />
                        캐시 히트{" "}
                        <span className="font-bold tabular-nums">
                          {usage.cache_read_input_tokens}
                        </span>{" "}
                        tok
                      </span>
                    )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 빈 상태 안내 (Step 1만 있을 때) */}
        {!persona && (
          <p className="mt-2 text-center text-xs text-neutral-500">
            카드 한 장이면 사장님 아침이 달라집니다. 위 3개 가게 중 하나를
            골라주세요.
          </p>
        )}
      </div>
    </main>
  );
}
