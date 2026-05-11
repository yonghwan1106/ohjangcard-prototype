"use client";

import * as React from "react";
import { Sun, CloudRain, Cloud, Loader2, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { Persona } from "@/lib/personas";
import type { GenerateRequest, Weather } from "@/lib/schema";

type Props = {
  persona: Persona;
  weather: Weather;
  onWeatherChange: (w: Weather) => void;
  onSubmit: (req: GenerateRequest) => void;
  isLoading: boolean;
};

const WEATHER_OPTIONS: { id: Weather; label: string; emoji: string; icon: typeof Sun }[] = [
  { id: "sunny", label: "맑음", emoji: "☀️", icon: Sun },
  { id: "rainy", label: "비", emoji: "☔", icon: CloudRain },
  { id: "cloudy", label: "흐림", emoji: "☁️", icon: Cloud },
];

export default function InputForm({
  persona,
  weather,
  onWeatherChange,
  onSubmit,
  isLoading,
}: Props) {
  const [yesterday, setYesterday] = React.useState(persona.default_yesterday);
  const [topMenu, setTopMenu] = React.useState(persona.default_top_menu);
  const [review1, setReview1] = React.useState(persona.default_reviews[0]);
  const [review2, setReview2] = React.useState(persona.default_reviews[1]);
  const [review3, setReview3] = React.useState(persona.default_reviews[2]);
  const [inventory, setInventory] = React.useState(persona.default_inventory);

  // 페르소나가 바뀌면 입력 자동 채움
  React.useEffect(() => {
    setYesterday(persona.default_yesterday);
    setTopMenu(persona.default_top_menu);
    setReview1(persona.default_reviews[0]);
    setReview2(persona.default_reviews[1]);
    setReview3(persona.default_reviews[2]);
    setInventory(persona.default_inventory);
  }, [persona]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !yesterday.trim() ||
      !topMenu.trim() ||
      !review1.trim() ||
      !review2.trim() ||
      !review3.trim() ||
      !inventory.trim()
    ) {
      window.alert("모든 필드를 채워주세요");
      return;
    }
    onSubmit({
      persona_id: persona.id,
      yesterday: yesterday.trim(),
      top_menu: topMenu.trim(),
      reviews: [review1.trim(), review2.trim(), review3.trim()],
      inventory: inventory.trim(),
      weather,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 날씨 토글 - 가장 강한 시연 무기 */}
      <div className="rounded-xl bg-brand-50 ring-1 ring-brand-200 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="size-4 text-brand-700" aria-hidden="true" />
          <span className="text-xs uppercase tracking-wider text-brand-700 font-bold">
            오늘 날씨 신호
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {WEATHER_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const active = weather === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onWeatherChange(opt.id)}
                aria-pressed={active}
                disabled={isLoading}
                className={[
                  "rounded-xl px-3 py-3 transition-all outline-none",
                  "focus-visible:ring-3 focus-visible:ring-brand-500/40",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  active
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-500/30 scale-[1.03]"
                    : "bg-white text-neutral-700 ring-1 ring-brand-200 hover:bg-brand-100 hover:ring-brand-300",
                ].join(" ")}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl leading-none" aria-hidden="true">
                    {opt.emoji}
                  </span>
                  <div className="flex items-center gap-1">
                    <Icon className="size-3" aria-hidden="true" />
                    <span className="text-xs font-bold">{opt.label}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
          같은 가게도 날씨가 바뀌면 카드 내용이 달라집니다. 직접 토글해서 비교해 보세요.
        </p>
      </div>

      {/* 입력 필드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5 md:col-span-2">
          <Label htmlFor="yesterday" className="text-brand-700 font-bold">
            어제 매출 및 특이사항
          </Label>
          <Input
            id="yesterday"
            value={yesterday}
            onChange={(e) => setYesterday(e.target.value)}
            disabled={isLoading}
            placeholder="어제 매출과 특이사항을 입력하세요"
            className="bg-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="top_menu" className="text-brand-700 font-bold">
            주력 메뉴
          </Label>
          <Input
            id="top_menu"
            value={topMenu}
            onChange={(e) => setTopMenu(e.target.value)}
            disabled={isLoading}
            placeholder="대표 메뉴"
            className="bg-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="inventory" className="text-brand-700 font-bold">
            남은 재고
          </Label>
          <Input
            id="inventory"
            value={inventory}
            onChange={(e) => setInventory(e.target.value)}
            disabled={isLoading}
            placeholder="남은 재료 목록"
            className="bg-white"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-brand-700 font-bold">최근 리뷰 3건</Label>
        <div className="space-y-2.5">
          {[
            { id: "r1", value: review1, set: setReview1, idx: 1 },
            { id: "r2", value: review2, set: setReview2, idx: 2 },
            { id: "r3", value: review3, set: setReview3, idx: 3 },
          ].map(({ id, value, set, idx }) => (
            <div key={id} className="flex gap-2.5 items-start">
              <span className="mt-2 size-6 rounded-md bg-brand-100 text-brand-700 font-bold text-xs grid place-items-center tabular-nums shrink-0">
                {idx}
              </span>
              <Textarea
                id={id}
                value={value}
                onChange={(e) => set(e.target.value)}
                disabled={isLoading}
                rows={2}
                placeholder={`리뷰 ${idx}`}
                className="bg-white min-h-14 resize-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 space-y-3">
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 text-base font-extrabold bg-brand-600 text-white hover:bg-brand-700 rounded-xl shadow-lg shadow-brand-500/30 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2
                className="size-5 animate-spin"
                aria-hidden="true"
              />
              생성 중…
            </>
          ) : (
            <>
              <Sparkles className="size-5" aria-hidden="true" />
              오늘장사카드 생성하기
            </>
          )}
        </Button>
        <p className="text-xs text-neutral-600 leading-relaxed text-center">
          Claude Haiku 4.5가 5초 이내에 5종 카드를 생성합니다.{" "}
          <span className="text-neutral-500">
            ANTHROPIC_API_KEY 미설정 시 fallback 카드 반환.
          </span>
        </p>
      </div>
    </form>
  );
}
