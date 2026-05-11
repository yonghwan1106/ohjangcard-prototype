"use client";

import * as React from "react";
import { Sparkles, Send, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const industries = [
  { value: "sandwich", label: "샌드위치" },
  { value: "cafe", label: "카페" },
  { value: "bunsik", label: "분식" },
  { value: "bakery", label: "베이커리" },
  { value: "etc", label: "기타" },
];

const stats = [
  { icon: Users, value: "10곳", label: "1차 베타 모집" },
  { icon: MapPin, value: "수원·용인", label: "운영 지역" },
  { icon: Sparkles, value: "30일", label: "무료 사용" },
];

export default function BetaForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [industry, setIndustry] = React.useState<string | null>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(
      "베타 신청 완료! 곧 박용환 운영자가 연락드리겠습니다. 감사합니다."
    );
    formRef.current?.reset();
    setIndustry("");
  }

  return (
    <section id="beta" className="relative brand-gradient py-20 lg:py-28">
      {/* 배경 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/4 size-[400px] rounded-full bg-white/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-1/4 size-[500px] rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* 헤드라인 */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur ring-1 ring-brand-200 px-3.5 py-1.5 mb-5">
            <span className="inline-block size-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-brand-700 uppercase">
              Beta · D-3 모집
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            수원·용인 10개 점포
            <br />
            <span className="brand-text-gradient">1차 베타</span> 모집
          </h2>
          <p className="mt-5 text-base lg:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            오늘장사카드를 30일 무료로 사용해보실 사장님을 모십니다.
          </p>
        </div>

        {/* 통계 라인 */}
        <div className="grid grid-cols-3 gap-3 lg:gap-5 max-w-2xl mx-auto mb-10 lg:mb-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white/80 backdrop-blur rounded-2xl ring-1 ring-brand-200 px-3 py-4 lg:px-5 lg:py-5 text-center"
            >
              <Icon
                className="size-5 text-brand-600 mx-auto mb-2"
                aria-hidden="true"
              />
              <div className="text-lg lg:text-2xl font-extrabold text-neutral-900 tracking-tight">
                {value}
              </div>
              <div className="text-[11px] lg:text-xs text-neutral-600 font-medium mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* 폼 카드 */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl ring-1 ring-brand-100 p-7 lg:p-10">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* 가게명 + 업종 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="storeName"
                  className="text-sm font-bold text-neutral-800"
                >
                  가게명 <span className="text-brand-600">*</span>
                </Label>
                <Input
                  id="storeName"
                  name="storeName"
                  required
                  placeholder="예) 햇살샌드"
                  className="h-11 rounded-xl border-neutral-300 focus-visible:border-brand-500 focus-visible:ring-brand-200"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="industry"
                  className="text-sm font-bold text-neutral-800"
                >
                  업종
                </Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger
                    id="industry"
                    className="h-11 w-full rounded-xl border-neutral-300 focus-visible:border-brand-500 focus-visible:ring-brand-200"
                  >
                    <SelectValue placeholder="업종 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* 연락처 */}
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-bold text-neutral-800"
              >
                연락처 <span className="text-brand-600">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="010-0000-0000"
                className="h-11 rounded-xl border-neutral-300 focus-visible:border-brand-500 focus-visible:ring-brand-200"
              />
            </div>

            {/* 메모 */}
            <div className="space-y-2">
              <Label
                htmlFor="memo"
                className="text-sm font-bold text-neutral-800"
              >
                한 줄 메모{" "}
                <span className="text-xs font-normal text-neutral-500">
                  (선택)
                </span>
              </Label>
              <Textarea
                id="memo"
                name="memo"
                placeholder="가게 위치, 영업 시간, 궁금한 점 등을 자유롭게 적어주세요"
                rows={3}
                className="min-h-[88px] rounded-xl border-neutral-300 focus-visible:border-brand-500 focus-visible:ring-brand-200 resize-none"
              />
            </div>

            {/* 제출 버튼 */}
            <Button
              type="submit"
              className="w-full h-13 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-base font-bold shadow-lg shadow-brand-500/30 mt-2 py-3.5"
            >
              <Send className="size-4" aria-hidden="true" />
              베타 신청하기
            </Button>

            {/* 캡션 */}
            <p className="text-xs text-neutral-500 leading-relaxed text-center pt-2 border-t border-neutral-100 mt-5">
              응모자{" "}
              <span className="font-semibold text-neutral-700">박용환</span>이
              1:1로 모집·온보딩을 진행합니다.
              <br />
              개인정보는 본 모집 외 사용하지 않습니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
