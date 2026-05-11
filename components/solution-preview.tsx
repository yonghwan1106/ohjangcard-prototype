import MenuCard from "@/components/cards/menu-card";
import SnsCard from "@/components/cards/sns-card";
import ReviewCard from "@/components/cards/review-card";
import CouponCard from "@/components/cards/coupon-card";
import WeatherInventoryCard from "@/components/cards/weather-inventory-card";
import type { CardOutput } from "@/lib/schema";

const SAMPLE_DATA: CardOutput = {
  menu: {
    title: "오늘 밀 메뉴 · 따뜻한 토마토 수프 세트",
    items: [
      {
        name: "토마토 수프 + 클럽샌드 세트",
        reason: "비 예보 + 남은 토마토 2kg, 점심 12시 게시",
      },
    ],
  },
  sns: {
    naver:
      "비 내리는 오늘, 따끈한 토마토 수프와 클럽샌드위치 세트 12시 오픈합니다 ☔",
    instagram:
      "토마토 수프 + 클럽샌드위치 세트, 비 오는 화요일 점심 ☔ 따끈한 한 끼 #햇살샌드 #수원영통점심 #토마토수프",
  },
  reviews: [
    {
      quote: "점심 대기 길다",
      reply: "12시 직전 미리 포장 예약 가능합니다. 카톡 채널로 주문 부탁드려요",
    },
    {
      quote: "비 오는 날 배달 필요",
      reply: "오늘 비 예보라 배민·쿠팡이츠 동시 오픈했습니다. 배달팁 -1000원 진행 중",
    },
    {
      quote: "토마토 신선했다",
      reply: "오늘 들어온 친환경 토마토 2kg로 수프 세트 만들었습니다",
    },
  ],
  coupon: {
    headline: "비 오는 화요일 한정 1000원 할인",
    body: "토마토 수프 세트 주문 시 사이드 음료 1000원 할인",
    valid_until: "오늘 17:00까지",
  },
  inventory_weather: {
    weather_note:
      "오늘 종일 비 예보 (강수확률 80%). 따뜻한 메뉴 우선 노출 권장",
    inventory_note:
      "토마토 2kg는 오늘 수프 세트로 소진, 햄 1.5kg는 내일 클럽샌드 추가, 치아바타 8개는 16시까지 SOLD 가능",
  },
};

export default function SolutionPreview() {
  return (
    <section id="solution" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤드라인 */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-4">
            Today&apos;s Cards
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
            <span className="brand-text-gradient">
              오늘장사카드 한 장이면,
            </span>
            <br />
            <span className="text-neutral-900">아침 8시가 달라집니다</span>
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            샌드위치 가게 &lsquo;햇살샌드&rsquo; A대표(수원 영통 12평)의 비 오는
            화요일 아침. 카드는 이렇게 도착합니다.
          </p>
        </div>

        {/* 5종 카드 그리드: md 2 / lg 3 / 마지막 2장 중앙 정렬 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <MenuCard data={SAMPLE_DATA.menu} showCopy={false} />
          <SnsCard data={SAMPLE_DATA.sns} showCopy={false} />
          <ReviewCard data={SAMPLE_DATA.reviews} showCopy={false} />
          <div className="lg:col-start-1">
            <CouponCard data={SAMPLE_DATA.coupon} showCopy={false} />
          </div>
          <div className="lg:col-start-2">
            <WeatherInventoryCard
              data={SAMPLE_DATA.inventory_weather}
              showCopy={false}
            />
          </div>
        </div>

        {/* 하단 캡션 */}
        <p className="mt-10 text-center text-sm text-neutral-500">
          모든 카드는{" "}
          <span className="font-semibold text-brand-700">
            Claude Haiku 4.5
          </span>
          가 점주 입력값과 외부 신호(날씨·요일)를 결합해 생성합니다. 점주가 그대로
          쓰거나 한 번 다듬어 게시.
        </p>
      </div>
    </section>
  );
}
