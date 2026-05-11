"use client";

import * as React from "react";
import { UtensilsCrossed, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CardOutput } from "@/lib/schema";

type Props = {
  data: CardOutput["menu"];
  showCopy?: boolean;
};

export default function MenuCard({ data, showCopy = false }: Props) {
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    const text = [
      data.title,
      "",
      ...data.items.map((it) => `- ${it.name}\n  ${it.reason}`),
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
            <span className="text-[10px] tabular-nums mr-1">01</span>
            오늘 밀 메뉴
          </Badge>
          <div className="size-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100 group-hover:bg-brand-100 transition-colors">
            <UtensilsCrossed className="size-5" aria-hidden="true" />
          </div>
        </div>
        <CardTitle className="mt-3 text-xl font-bold text-neutral-900 leading-snug">
          {data.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <ul className="space-y-3">
          {data.items.map((item, idx) => (
            <li
              key={`${item.name}-${idx}`}
              className="border-l-2 border-brand-200 pl-3"
            >
              <div className="font-bold text-neutral-900 text-sm leading-snug">
                {item.name}
              </div>
              <div className="text-sm text-neutral-600 mt-0.5 leading-relaxed">
                {item.reason}
              </div>
            </li>
          ))}
        </ul>
        {showCopy && (
          <div className="mt-4 flex justify-end">
            <Button
              type="button"
              variant="outline"
              size="xs"
              onClick={handleCopy}
              aria-label="메뉴 카드 복사"
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
