"use client";

import * as React from "react";
import { MessageSquareReply, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CardOutput } from "@/lib/schema";

type Props = {
  data: CardOutput["reviews"];
  showCopy?: boolean;
};

export default function ReviewCard({ data, showCopy = false }: Props) {
  const [copiedIdx, setCopiedIdx] = React.useState<number | null>(null);

  function handleCopy(idx: number, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      window.setTimeout(() => setCopiedIdx(null), 1000);
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
            <span className="text-[10px] tabular-nums mr-1">03</span>
            리뷰 답변 3건
          </Badge>
          <div className="size-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100 group-hover:bg-brand-100 transition-colors">
            <MessageSquareReply className="size-5" aria-hidden="true" />
          </div>
        </div>
        <CardTitle className="mt-3 text-base font-extrabold text-neutral-900 leading-snug">
          어제 들어온 리뷰에 즉답 초안
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="space-y-4">
          {data.map((review, idx) => (
            <div
              key={`${review.quote}-${idx}`}
              className={
                idx > 0 ? "pt-4 border-t border-neutral-100" : undefined
              }
            >
              <div className="rounded-lg bg-brand-50 ring-1 ring-brand-100 px-3 py-2 mb-2">
                <p className="text-xs text-brand-700 italic leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="text-sm text-neutral-800 leading-relaxed flex-1">
                  {review.reply}
                </p>
                {showCopy && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => handleCopy(idx, review.reply)}
                    aria-label={`리뷰 ${idx + 1} 답변 복사`}
                    className="text-brand-700 hover:bg-brand-50 shrink-0"
                  >
                    {copiedIdx === idx ? (
                      <Check className="size-3" aria-hidden="true" />
                    ) : (
                      <Copy className="size-3" aria-hidden="true" />
                    )}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
