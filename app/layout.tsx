import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoKR = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "오늘장사카드 — 동네상권 브리핑",
  description:
    "아침 8시, AI가 보내는 오늘의 장사 카드. 전날 매출·리뷰·날씨를 읽어 외식 소점포 사장님에게 메뉴·SNS·리뷰답변·쿠폰·재고를 한 화면으로.",
  openGraph: {
    title: "오늘장사카드 — 동네상권 브리핑",
    description:
      "전날 매출·리뷰·날씨를 읽어 동네 점포에 오늘 팔 메뉴·홍보문구·쿠폰을 보내는 AI 장사 실행카드",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoKR.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
