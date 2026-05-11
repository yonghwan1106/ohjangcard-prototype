import Link from "next/link";
import { Check, Store, Building2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Tier = {
  icon: typeof Store;
  badge: string;
  name: string;
  price: string;
  priceUnit: string;
  priceNote: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    icon: Store,
    badge: "개별 점포",
    name: "점포",
    price: "3.9만원",
    priceUnit: "월",
    priceNote: "VAT 별도 · 30일 무료 체험",
    features: [
      "5종 카드 매일 아침 8시 발송",
      "리뷰 OCR 월 30건",
      "카카오 알림 채널 연동",
      "수원·용인 1차 베타 전용 가격",
    ],
    cta: { label: "1차 베타 신청 →", href: "#beta" },
  },
  {
    icon: Building2,
    badge: "20~50개 매장 묶음",
    name: "기관 · 상인회",
    price: "80~150만원",
    priceUnit: "월",
    priceNote: "협의 가격 · 묶음 단가",
    features: [
      "전 점포 카드 실행률 집계 대시보드",
      "이번 주 우리 동네 장사 리포트",
      "상권 B2B 위탁 운영",
      "지역 미디어 네트워크 연계",
    ],
    cta: { label: "기관 문의 →", href: "#beta" },
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤드라인 */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            동네 점포부터 상권 운영 OS까지
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            두 가지 요금제 · 90일 가설 검증 · 모두의 창업 프로젝트 1R/2R 자금으로
            MVP·현장 인터뷰·점주 교육에 집중합니다.
          </p>
        </div>

        {/* 2-tier 카드 */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map(
            ({
              icon: Icon,
              badge,
              name,
              price,
              priceUnit,
              priceNote,
              features,
              cta,
              highlight,
            }) => (
              <div
                key={name}
                className={`relative rounded-3xl bg-white p-7 lg:p-9 flex flex-col ${
                  highlight
                    ? "border-2 border-brand-600 shadow-2xl shadow-brand-500/20"
                    : "ring-1 ring-neutral-200 shadow-md"
                }`}
              >
                {/* 추천 배지 */}
                {highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand-600 text-white px-3 py-1 h-7 text-xs font-bold shadow-md">
                      <Star className="size-3 fill-white" aria-hidden="true" />
                      추천
                    </Badge>
                  </div>
                )}

                {/* 헤더 */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`size-12 rounded-2xl grid place-items-center ${
                      highlight
                        ? "bg-brand-600 text-white shadow-lg shadow-brand-500/30"
                        : "bg-brand-50 text-brand-600 ring-1 ring-brand-100"
                    }`}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-brand-600 uppercase">
                      {badge}
                    </p>
                    <h3 className="text-xl font-extrabold text-neutral-900">
                      {name}
                    </h3>
                  </div>
                </div>

                {/* 가격 */}
                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
                      {price}
                    </span>
                    <span className="text-base font-semibold text-neutral-500">
                      / {priceUnit}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-500">{priceNote}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="shrink-0 mt-0.5 size-5 rounded-full bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100">
                        <Check
                          className="size-3 stroke-[3]"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm text-neutral-700 leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  render={<a href={cta.href}>{cta.label}</a>}
                  variant={highlight ? "default" : "outline"}
                  className={`h-12 w-full rounded-xl font-bold text-base ${
                    highlight
                      ? "bg-brand-600 text-white hover:bg-brand-700 shadow-md shadow-brand-500/30"
                      : "border-2 border-brand-600 text-brand-700 hover:bg-brand-50"
                  }`}
                />
              </div>
            )
          )}
        </div>

        {/* 하단 KPI 캡션 */}
        <div className="mt-12 lg:mt-14 max-w-3xl mx-auto rounded-2xl bg-brand-50 ring-1 ring-brand-100 px-6 py-5 text-center">
          <p className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-2">
            90일 KPI
          </p>
          <p className="text-base lg:text-lg font-bold text-neutral-800 leading-relaxed">
            <span className="brand-text-gradient">10곳 중 6곳</span> 주 3회 사용,
            <span className="brand-text-gradient"> 3곳</span> 유료 전환
          </p>
          <Link
            href="/demo"
            className="mt-3 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-600 transition-colors"
          >
            먼저 데모 체험하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
