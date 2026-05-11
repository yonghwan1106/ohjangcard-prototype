import Image from "next/image";
import { PencilLine, Sparkles, Bell, ChevronRight, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: PencilLine,
    num: "①",
    title: "점주 입력 3분",
    body: "어제 매출·리뷰·재고를 한 화면에. 키보드 대신 숫자·체크박스 위주의 가벼운 폼.",
    cap: "Step 01 · 입력",
  },
  {
    icon: Sparkles,
    num: "②",
    title: "AI 분석",
    body: "Claude Haiku 4.5가 오늘 날씨·요일·동네 행사를 결합해 5종 카드 초안을 만든다.",
    cap: "Step 02 · 분석",
  },
  {
    icon: Bell,
    num: "③",
    title: "아침 8시 카카오 알림",
    body: "5종 카드를 한 화면으로. 점주는 그대로 게시하거나 1분 다듬어 출고.",
    cap: "Step 03 · 발송",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-brand-50/40 py-20 lg:py-28">
      {/* 배경 격자 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.85 0.13 65 / 0.25) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* 헤드라인 */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            3분이면 오늘 장사가 시작됩니다
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            복잡한 대시보드 없이, 카카오 알림 한 번이면 끝.
          </p>
        </div>

        {/* 3단계 타임라인 */}
        <ol className="grid md:grid-cols-3 gap-5 lg:gap-2 mb-16 lg:mb-20">
          {steps.map(({ icon: Icon, num, title, body, cap }, i) => (
            <li
              key={title}
              className="relative flex flex-col md:flex-row md:items-stretch"
            >
              <div className="flex-1 bg-white rounded-2xl shadow-md ring-1 ring-brand-100 p-6 lg:p-7 hover:shadow-xl hover:ring-brand-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl lg:text-4xl font-extrabold brand-text-gradient tabular-nums">
                    {num}
                  </span>
                  <div className="size-12 rounded-2xl bg-brand-500 text-white grid place-items-center shadow-lg shadow-brand-500/30">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-[11px] font-bold tracking-widest text-brand-600 uppercase mb-2">
                  {cap}
                </p>
                <h3 className="text-xl font-extrabold text-neutral-900 mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {body}
                </p>
              </div>

              {/* 단계 사이 연결자 (마지막 제외) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:flex items-center justify-center px-1"
                >
                  <ChevronRight className="size-7 text-brand-300" />
                </div>
              )}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="md:hidden flex justify-center py-2"
                >
                  <ChevronRight className="size-6 text-brand-300 rotate-90" />
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* 하단 이미지 */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden ring-1 ring-brand-200/50 shadow-2xl shadow-brand-500/10">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/howitworks-illustration.png"
              alt="사장님들이 태블릿으로 카드형 UI를 함께 확인하는 모습"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-700/30 via-transparent to-transparent"
            />
          </div>
        </div>

        {/* 신뢰 캡션 */}
        <div className="mt-10 lg:mt-12 max-w-3xl mx-auto flex items-start gap-3 rounded-2xl bg-white ring-1 ring-brand-100 px-5 py-4 shadow-sm">
          <ShieldCheck
            className="size-5 text-brand-600 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm text-neutral-700 leading-relaxed">
            <span className="font-bold text-neutral-900">데이터 원칙</span> ·
            점주 제공·동의 기반, 원자료 30일 내 폐기, 집계 통계만 학습.
          </p>
        </div>
      </div>
    </section>
  );
}
