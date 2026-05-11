export type Weather = "sunny" | "rainy" | "cloudy";

export type Persona = {
  id: "sandwich" | "cafe" | "bunsik";
  label: string;
  emoji: string;
  store_name: string;
  owner_name: string;
  location: string;
  description: string;
  default_yesterday: string;
  default_top_menu: string;
  default_reviews: [string, string, string];
  default_inventory: string;
};

export const PERSONAS: Persona[] = [
  {
    id: "sandwich",
    label: "샌드위치 가게",
    emoji: "🥪",
    store_name: "햇살샌드",
    owner_name: "A대표",
    location: "수원 영통구 12평",
    description: "수원 영통구 직장인 밀집 상권의 12평 샌드위치 전문점",
    default_yesterday: "어제 매출 약 38만원, 점심 피크 12~13시 집중",
    default_top_menu: "클럽샌드위치",
    default_reviews: [
      "점심 대기가 길다",
      "비 오는 날 배달이 있으면 좋겠다",
      "토마토가 신선했다",
    ],
    default_inventory: "토마토 2kg, 햄 1.5kg, 치아바타 8개",
  },
  {
    id: "cafe",
    label: "카페",
    emoji: "☕",
    store_name: "아침커피로스터스",
    owner_name: "B대표",
    location: "용인 수지구 8평",
    description: "용인 수지구 주택가 인근 8평 스페셜티 커피 로스터리 카페",
    default_yesterday: "어제 매출 약 52만원, 오전 테이크아웃 비중 높음",
    default_top_menu: "핸드드립 아메리카노",
    default_reviews: [
      "원두 향이 좋다",
      "노트북 자리가 부족",
      "디저트 종류가 적다",
    ],
    default_inventory: "에티오피아 원두 1.2kg, 우유 2L, 크림치즈 200g",
  },
  {
    id: "bunsik",
    label: "분식집",
    emoji: "🍱",
    store_name: "엄마손분식",
    owner_name: "C대표",
    location: "수원 권선동 15평",
    description: "수원 권선동 학원가 인근 15평 가정식 분식 전문점",
    default_yesterday: "어제 매출 약 67만원, 저녁 포장 수요 강세",
    default_top_menu: "김밥+라볶이 세트",
    default_reviews: [
      "양이 푸짐",
      "포장 줄이 길다",
      "비빔밥에 나물이 부족",
    ],
    default_inventory: "단무지 1통, 김 30장, 어묵 1.5kg, 쌀 5kg",
  },
];
