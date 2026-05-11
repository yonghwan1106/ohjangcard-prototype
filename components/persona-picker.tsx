"use client";

import * as React from "react";
import { Store, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PERSONAS, type Persona } from "@/lib/personas";

type PersonaId = Persona["id"];

type Props = {
  selected: PersonaId | null;
  onSelect: (id: PersonaId) => void;
};

export default function PersonaPicker({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
      {PERSONAS.map((p, i) => {
        const isSelected = selected === p.id;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelect(p.id)}
            aria-pressed={isSelected}
            aria-label={`${p.label} - ${p.store_name} 선택`}
            className={[
              "group text-left transition-all duration-300 rounded-xl outline-none",
              "focus-visible:ring-3 focus-visible:ring-brand-500/40",
              isSelected
                ? "scale-[1.02]"
                : "hover:-translate-y-0.5 hover:scale-[1.005]",
            ].join(" ")}
          >
            <Card
              className={[
                "relative border-l-4 ring-0 overflow-hidden transition-all duration-300 h-full",
                isSelected
                  ? "border-l-brand-600 shadow-2xl shadow-brand-500/20 ring-2 ring-brand-500 ring-offset-2"
                  : "border-l-brand-500 shadow-sm hover:shadow-xl hover:ring-1 hover:ring-brand-300",
              ].join(" ")}
            >
              {/* 상단 그라데이션 띠 - 선택 시 진해짐 */}
              <div
                aria-hidden="true"
                className={[
                  "h-1.5 w-full -mt-4 mb-1 transition-all duration-300",
                  isSelected
                    ? "bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400"
                    : "bg-gradient-to-r from-brand-100 via-brand-200 to-brand-100 group-hover:from-brand-200 group-hover:via-brand-300 group-hover:to-brand-200",
                ].join(" ")}
              />

              <CardContent className="px-5 pb-5 pt-2">
                <div className="flex items-start justify-between gap-2">
                  <Badge
                    variant="outline"
                    className={[
                      "font-bold transition-colors",
                      isSelected
                        ? "bg-brand-600 text-white border-brand-600"
                        : "bg-brand-50 text-brand-700 border-brand-200",
                    ].join(" ")}
                  >
                    <span className="text-[10px] tabular-nums mr-1">
                      0{i + 1}
                    </span>
                    {p.label}
                  </Badge>
                  {isSelected ? (
                    <div className="size-9 rounded-xl bg-brand-600 text-white grid place-items-center ring-2 ring-brand-200">
                      <CheckCircle2 className="size-5" aria-hidden="true" />
                    </div>
                  ) : (
                    <div className="size-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100 group-hover:bg-brand-100 transition-colors">
                      <Store className="size-5" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <div className="mt-3 text-5xl leading-none" aria-hidden="true">
                  {p.emoji}
                </div>

                <h3 className="mt-3 text-lg font-extrabold text-neutral-900 leading-snug">
                  {p.store_name}
                </h3>
                <div className="mt-1 flex items-center gap-1 text-xs text-brand-700 font-semibold">
                  <MapPin className="size-3" aria-hidden="true" />
                  <span>{p.location}</span>
                </div>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                  {p.description}
                </p>

                {isSelected && (
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-1 ring-1 ring-brand-200">
                    <CheckCircle2
                      className="size-3 text-brand-700"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-bold text-brand-700">
                      선택됨
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </button>
        );
      })}
    </div>
  );
}
