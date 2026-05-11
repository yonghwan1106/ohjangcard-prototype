import Link from "next/link";
import { Code2 } from "lucide-react";

const columns = [
  {
    title: "서비스",
    links: [
      { label: "데모 체험", href: "/demo", external: false },
      { label: "베타 신청", href: "/#beta", external: false },
      {
        label: "GitHub",
        href: "https://github.com/yonghwan1106/ohjangcard-prototype",
        external: true,
      },
    ],
  },
  {
    title: "응모",
    items: [
      "모두의 창업 프로젝트 2026",
      "중소벤처기업부 공고 제2026-275호",
      "마감 2026-05-15 16:00",
    ],
  },
  {
    title: "운영",
    items: [
      "박용환",
      "경인블루저널 (정보통신업)",
      "사업자번호 849-01-03618",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* 컬럼 1 — 로고 + 소개 */}
          <div className="space-y-4 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-extrabold"
              aria-label="오늘장사카드 홈"
            >
              <span aria-hidden="true">🌅</span>
              <span className="brand-text-gradient">오늘장사카드</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              아침 8시, AI가 보내는
              <br />
              오늘의 장사 카드.
            </p>
            <a
              href="https://github.com/yonghwan1106/ohjangcard-prototype"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-brand-500 transition-colors"
            >
              <Code2 className="size-3.5" aria-hidden="true" />
              yonghwan1106/ohjangcard-prototype
            </a>
          </div>

          {/* 컬럼 2 — 서비스 */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              {columns[0].title}
            </h3>
            <ul className="space-y-2.5">
              {columns[0].links!.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-300 hover:text-brand-500 transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm text-neutral-300 hover:text-brand-500 transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 컬럼 3 — 응모 */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              {columns[1].title}
            </h3>
            <ul className="space-y-2.5">
              {columns[1].items!.map((item) => (
                <li
                  key={item}
                  className="text-sm text-neutral-300 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 컬럼 4 — 운영 */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              {columns[2].title}
            </h3>
            <ul className="space-y-2.5">
              {columns[2].items!.map((item) => (
                <li
                  key={item}
                  className="text-sm text-neutral-300 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 라인 */}
        <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-neutral-500 leading-relaxed">
            © 2026 박용환 · 「오늘장사카드」 응모용 비공개 프로토타입.
          </p>
          <p className="text-xs text-neutral-500 inline-flex items-center gap-1.5">
            <span className="inline-block size-1.5 rounded-full bg-brand-500" />
            Claude Haiku 4.5로 작동
          </p>
        </div>
      </div>
    </footer>
  );
}
