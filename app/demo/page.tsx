"use client";

import Link from "next/link";
import { PERSONAS } from "@/lib/personas";

export default function DemoPage() {
  return (
    <main className="flex-1 brand-gradient">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-brand-700 hover:underline">
          ← 홈으로
        </Link>
        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-neutral-900">
          오늘장사카드 데모
        </h1>
        <p className="mt-3 text-neutral-700">
          페르소나를 고르면, Claude Haiku 4.5가 그 가게의 오늘 5종 카드를
          생성합니다.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {PERSONAS.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm border border-brand-100"
            >
              <div className="text-4xl">{p.emoji}</div>
              <h3 className="mt-3 font-bold text-neutral-900">{p.label}</h3>
              <p className="mt-1 text-sm text-neutral-600">{p.store_name}</p>
              <p className="text-xs text-neutral-500 mt-1">{p.location}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-neutral-500 text-center">
          D-4 셋업 단계 · 입력 폼과 카드 생성기는 D-2에 본격 구현
        </p>
      </div>
    </main>
  );
}
