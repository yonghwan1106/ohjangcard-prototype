import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      {/* 배경 장식: 햇살 같은 라디얼 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 size-[600px] rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 size-[500px] rounded-full bg-brand-100/60 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* 좌측 텍스트 */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur ring-1 ring-brand-200 px-3.5 py-1.5">
              <Sparkles
                className="size-3.5 text-brand-600"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
                모두의 창업 프로젝트 2026 응모
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-neutral-900">
              아침 8시,
              <br />
              AI가 보내는
              <br />
              <span className="brand-text-gradient">오늘의 장사 카드</span>
            </h1>

            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl">
              전날 매출·리뷰·날씨를 읽어 동네 외식 소점포에 오늘 팔 메뉴·SNS
              문구·리뷰 답변·쿠폰·재고 주의를 한 화면으로.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                render={
                  <Link href="/demo">
                    데모 체험하기
                    <ArrowRight className="size-4" />
                  </Link>
                }
                className="h-12 px-6 bg-brand-600 text-white hover:bg-brand-700 rounded-xl font-semibold text-base shadow-lg shadow-brand-500/30"
              />
              <Button
                variant="outline"
                render={
                  <a href="#beta">
                    베타 신청
                    <ArrowDown className="size-4" />
                  </a>
                }
                className="h-12 px-6 rounded-xl border-2 border-brand-600 text-brand-700 hover:bg-brand-50 font-semibold text-base"
              />
            </div>

            <div className="flex items-center gap-2 pt-4 text-sm text-neutral-500">
              <span className="inline-block size-2 rounded-full bg-brand-500 animate-pulse" />
              <span>
                Claude Haiku 4.5로 작동 · 수원·용인 외식 소점포 대상
              </span>
            </div>
          </div>

          {/* 우측 이미지 */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-3xl overflow-hidden ring-1 ring-brand-200/50 shadow-2xl shadow-brand-500/20">
              <Image
                src="/images/hero-background.png"
                alt="지역 미디어 운영자와 동네 사장님이 매장 앞에서 대화하는 모습"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {/* 위에서 살짝 그라데이션 오버레이 */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-700/10 via-transparent to-transparent"
              />
            </div>

            {/* 떠 있는 시간 표시 카드 */}
            <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white rounded-2xl shadow-xl ring-1 ring-brand-100 px-5 py-4 flex items-center gap-3">
              <div className="size-10 rounded-full bg-brand-50 grid place-items-center">
                <span className="text-xl" aria-hidden="true">
                  ☀️
                </span>
              </div>
              <div>
                <div className="text-xs text-neutral-500">매일 아침</div>
                <div className="text-lg font-extrabold text-neutral-900">
                  08:00 카드 도착
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
