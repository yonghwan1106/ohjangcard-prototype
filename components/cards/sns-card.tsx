"use client";

import * as React from "react";
import { Megaphone, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CardOutput } from "@/lib/schema";

type Props = {
  data: CardOutput["sns"];
  showCopy?: boolean;
};

type CopyTarget = "naver" | "instagram" | null;

export default function SnsCard({ data, showCopy = false }: Props) {
  const [copied, setCopied] = React.useState<CopyTarget>(null);

  function handleCopy(target: Exclude<CopyTarget, null>, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(target);
      window.setTimeout(() => setCopied(null), 1000);
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
            <span className="text-[10px] tabular-nums mr-1">02</span>
            SNS 문구
          </Badge>
          <div className="size-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center ring-1 ring-brand-100 group-hover:bg-brand-100 transition-colors">
            <Megaphone className="size-5" aria-hidden="true" />
          </div>
        </div>
        <CardTitle className="mt-3 text-base font-extrabold text-neutral-900 leading-snug">
          네이버 · 인스타그램 한 줄
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs uppercase text-brand-600 tracking-wider font-bold">
                네이버
              </span>
              {showCopy && (
                <Button
                  type="button"
                  variant="ghost"
                  size="xs"
                  onClick={() => handleCopy("naver", data.naver)}
                  aria-label="네이버 문구 복사"
                  className="text-brand-700 hover:bg-brand-50"
                >
                  {copied === "naver" ? (
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
              )}
            </div>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {data.naver}
            </p>
          </div>
          <div className="pt-3 border-t border-neutral-100">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs uppercase text-brand-600 tracking-wider font-bold">
                인스타그램
              </span>
              {showCopy && (
                <Button
                  type="button"
                  variant="ghost"
                  size="xs"
                  onClick={() => handleCopy("instagram", data.instagram)}
                  aria-label="인스타그램 문구 복사"
                  className="text-brand-700 hover:bg-brand-50"
                >
                  {copied === "instagram" ? (
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
              )}
            </div>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {data.instagram}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
