"use client";

import * as React from "react";
import {
  CloudRain,
  CloudSun,
  Package,
  Copy,
  Check,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CardOutput } from "@/lib/schema";

type Props = {
  data: CardOutput["inventory_weather"];
  showCopy?: boolean;
};

export default function WeatherInventoryCard({ data, showCopy = false }: Props) {
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    const text = [
      "[날씨]",
      data.weather_note,
      "",
      "[재고]",
      data.inventory_note,
    ].join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1000);
    });
  }

  return (
    <Card className="group relative border-l-4 border-l-brand-500 ring-0 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      <div
        aria-hidden="true"
        className="h-1.5 w-full bg-gradient-to-r from-brand-100 via-brand-200 to-brand-100 -mt-4 mb-1"
      />
      <CardHeader className="px-5 pt-2">
        <div className="flex items-center justify-between gap-2">
          <Badge
            variant="outline"
            className="bg-brand-50 text-brand-700 border-brand-200 font-bold"
          >
            <span className="text-[10px] tabular-nums mr-1">05</span>
            재고·날씨
          </Badge>
          <div className="size-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100 group-hover:bg-brand-100 transition-colors">
            <CloudRain className="size-5" aria-hidden="true" />
          </div>
        </div>
        <CardTitle className="mt-3 text-base font-extrabold text-neutral-900 leading-snug">
          오늘 영업 컨디션
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <CloudSun className="size-3.5 text-brand-700" aria-hidden="true" />
              <span className="text-xs uppercase text-brand-600 tracking-wider font-bold">
                날씨
              </span>
            </div>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {data.weather_note}
            </p>
          </div>
          <div className="pt-3 border-t border-neutral-100">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Package className="size-3.5 text-brand-700" aria-hidden="true" />
              <span className="text-xs uppercase text-brand-600 tracking-wider font-bold">
                재고
              </span>
            </div>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {data.inventory_note}
            </p>
          </div>
        </div>
        {showCopy && (
          <div className="mt-4 flex justify-end">
            <Button
              type="button"
              variant="outline"
              size="xs"
              onClick={handleCopy}
              aria-label="재고·날씨 카드 복사"
              className="border-brand-200 text-brand-700 hover:bg-brand-50"
            >
              {copied ? (
                <>
                  <Check className="size-3" aria-hidden="true" />
                  복사됨
                </>
              ) : (
                <>
                  <Copy className="size-3" aria-hidden="true" />
                  복사
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
