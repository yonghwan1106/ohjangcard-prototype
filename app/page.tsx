import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center brand-gradient">
      <div className="max-w-2xl px-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase">
          모두의 창업 프로젝트 2026
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
          <span className="brand-text-gradient">오늘장사카드</span>
          <span className="block text-3xl md:text-4xl mt-3 text-neutral-700">
            아침 8시, AI가 보내는 오늘의 장사 카드
          </span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-neutral-600 leading-relaxed">
          전날 매출·리뷰·날씨를 읽어 동네 외식 소점포에
          <br />
          오늘 팔 메뉴·SNS 문구·리뷰 답변·쿠폰·재고 주의를 한 화면으로.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition"
          >
            데모 체험하기 →
          </Link>
          <a
            href="#beta"
            className="inline-flex items-center justify-center rounded-xl border-2 border-brand-600 px-6 py-3 text-brand-700 font-semibold hover:bg-brand-50 transition"
          >
            베타 신청
          </a>
        </div>
        <p className="mt-10 text-xs text-neutral-500">
          D-4 셋업 단계 · 본 랜딩은 D-3에 7개 섹션으로 확장 예정
        </p>
      </div>
    </main>
  );
}
