import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg md:text-xl font-extrabold tracking-tight"
          aria-label="오늘장사카드 홈"
        >
          <span aria-hidden="true">🌅</span>
          <span className="brand-text-gradient">오늘장사카드</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-700">
          <a href="#problem" className="hover:text-brand-600 transition-colors">
            문제
          </a>
          <a href="#solution" className="hover:text-brand-600 transition-colors">
            카드 미리보기
          </a>
          <a href="#how" className="hover:text-brand-600 transition-colors">
            작동 방식
          </a>
          <a href="#pricing" className="hover:text-brand-600 transition-colors">
            요금제
          </a>
        </nav>

        <Button
          render={
            <Link href="/demo">
              데모 체험
              <ArrowRight className="size-4" />
            </Link>
          }
          className="h-10 px-4 bg-brand-600 text-white hover:bg-brand-700 rounded-xl font-semibold shadow-md shadow-brand-500/20"
        />
      </div>
    </header>
  );
}
