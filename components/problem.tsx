import Image from "next/image";
import { Clock, Megaphone, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Clock,
    title: "매일 신호 해석할 시간 부족",
    body: "어제 매출·리뷰·날씨·재고는 넘치지만, 사장님은 재료·배달·직원·세금에 묶여 있다.",
  },
  {
    icon: Megaphone,
    title: "홍보는 감으로, 쿠폰 남발",
    body: "할인 쿠폰과 감성 문구 복붙으로 흐른다. 리뷰 답변은 밀린다.",
  },
  {
    icon: TrendingDown,
    title: "위기는 3~6개월 뒤",
    body: "매출 하락이 누적된 뒤에야 위기를 알아차린다. 그땐 이미 늦었다.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤드라인 */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-4">
            Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            데이터가 없는 게 아닙니다.
            <br />
            <span className="text-brand-700">읽을 시간이</span> 없는 겁니다.
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            1~5인 외식 소점포 사장님이 마주한 진짜 문제
          </p>
        </div>

        {/* 2열 그리드 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* 좌측 이미지 */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-brand-100 shadow-xl">
              <Image
                src="/images/problem-illustration.png"
                alt="아침 오픈 전 사장님이 스마트폰을 보며 고민하는 모습"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* 떠 있는 페르소나 카드 */}
            <div className="absolute -bottom-5 -right-5 lg:-right-8 max-w-[260px] bg-white rounded-2xl shadow-2xl ring-1 ring-brand-100 px-5 py-4">
              <div className="text-xs text-neutral-500 mb-1">대표 페르소나</div>
              <div className="text-base font-extrabold text-neutral-900">
                햇살샌드 · A대표 (43)
              </div>
              <div className="text-xs text-neutral-600 mt-1">
                수원 영통 12평 샌드위치
              </div>
            </div>
          </div>

          {/* 우측 3-up 카드 스택 */}
          <div className="space-y-4">
            {items.map(({ icon: Icon, title, body }, i) => (
              <Card
                key={title}
                className="border-l-4 border-l-brand-500 ring-0 hover:bg-brand-50 transition-colors py-5"
              >
                <CardContent className="flex items-start gap-4 px-5">
                  <div className="shrink-0 size-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-xs font-bold text-brand-600 tabular-nums">
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {title}
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 결론 인용 */}
        <blockquote className="mt-16 lg:mt-20 max-w-3xl mx-auto text-center">
          <p className="text-xl lg:text-2xl font-bold text-neutral-800 leading-relaxed">
            <span className="text-brand-600">&ldquo;</span>
            1~5인 외식 소점포의 문제는 마케팅 지식 부족이 아니라,
            <br className="hidden sm:block" />
            <span className="brand-text-gradient">
              데이터를 의사결정으로 바꿀 시간이 없는 것
            </span>
            입니다.
            <span className="text-brand-600">&rdquo;</span>
          </p>
        </blockquote>
      </div>
    </section>
  );
}
