# 오늘장사카드 — 동네상권 브리핑

> 아침 8시, AI가 보내는 오늘의 장사 카드

「모두의 창업 프로젝트 2026」(중소벤처기업부) 응모 라이브 프로토타입.

## 무엇을 하는 서비스인가

수원·용인 1~5인 외식 소점포 사장님이 전날 매출·리뷰·재고를 3분 안에 입력하면, Claude Haiku 4.5 AI가 오늘 날씨·요일 신호와 결합해 5종 카드를 생성합니다:

1. 오늘 밀 메뉴
2. 네이버·인스타그램 게시글 초안
3. 리뷰 답변 3건
4. 쿠폰 제안
5. 재고·날씨 주의

## 기술 스택

- **Next.js 16** App Router + Turbopack
- **React 19** + TypeScript 5
- **Tailwind CSS 4** + shadcn/ui
- **@anthropic-ai/sdk** Claude Haiku 4.5 (`claude-haiku-4-5-20251001`)
- **Zod 4** 입력·출력 스키마 검증
- **Vercel** 배포

## 실행

```bash
cp .env.local.example .env.local
# .env.local 파일에 ANTHROPIC_API_KEY 입력
npm install
npm run dev
```

http://localhost:3000

## 라이브 데모

`<여기에 Vercel URL 추가>` — 박용환 운영

## 페르소나

- 샌드위치 가게 (수원 영통 12평)
- 카페 (용인 수지 8평)
- 분식집 (수원 권선동 15평)

## 응모자

박용환 / 경인블루저널(정보통신업, 사업자 849-01-03618) / 크리에이티브 넥서스

## 라이센스

응모용 비공개 프로토타입. 저작권 박용환.
