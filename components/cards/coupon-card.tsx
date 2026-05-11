"use client";

import * as React from "react";
import { Ticket, Clock, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CardOutput } from "@/lib/schema";

type Props = {
  data: CardOutput["coupon"];
  showCopy?: boolean;
};

export default function CouponCard({ data, showCopy = false }: Props) {
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    const text = [data.headline, "", data.body, "", `유효: ${data.valid_until}`].join(
      "\n",
    );
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
            <span className="text-[10px] tabular-nums mr-1">04</span>
            쿠폰 제안
          </Badge>
          <div className="size-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100 group-hover:bg-brand-100 transition-colors">
            <Ticket className="size-5" aria-hidden="true" />
          </div>
        </div>
        <CardTitle className="mt-3 text-base font-extrabold text-neutral-900 leading-snug">
          오늘 하루 한정 쿠폰
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="space-y-3">
          <h3 className="text-2xl text-brand-700 font-extrabold leading-tight">
            {data.headline}
          </h3>
          <p className="text-sm text-neutral-700 leading-relaxed">{data.body}</p>
          <div className="inline-flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-1.5 ring-1 ring-brand-200">
            <Clock className="size-3.5 text-brand-700" aria-hidden="true" />
            <span className="text-xs font-bold text-brand-700 tabular-nums">
              {data.valid_until}
            </span>
          </div>
        </div>
        {showCopy && (
          <div className="mt-4 flex justify-end">
            <Button
              type="button"
              variant="outline"
              size="xs"
              onClick={handleCopy}
              aria-label="쿠폰 카드 복사"
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
