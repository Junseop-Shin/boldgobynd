# StudioBOLD 웹사이트 클론 / 리디자인

- 레퍼런스: https://studiobold.co.kr
- 배포: https://boldgobynd.vercel.app/

## 기술 스택

- Next.js (Pages Router)
- React, TypeScript
- Styled-Components
- Framer Motion (애니메이션)
- React Icons
- Vercel 배포

## 구현 기능

- **반응형 디자인** — 모바일 / 데스크톱 분기 레이아웃 (`Responsive` 컴포넌트)
- **스크롤 애니메이션** — `FadeUpAnimation` (framer-motion useInView)
- **데스크톱 Sticky 스크롤** — 섹션별 고정 스크롤 전환 (`DesktopMainSection`)
- **이미지 갤러리** — 태그 필터, 호버 오버레이, 상세 페이지 연결
- **무한 캐로셀** — 자동 재생, 좌우 내비게이션, peek 모드 (좌우 1/5 노출)
- **풀스크린 이미지 뷰어** — 확대/축소, 드래그, 이미지 인덱스, 클립보드 복사
- **모바일 내비게이션 드로어** — 슬라이드인 메뉴, Works 서브메뉴
- **문의 메일 알림** — Let's Talk 섹션 이메일 연동

## 페이지 구성

| 경로 | 설명 |
|------|------|
| `/` | 메인 홈 (Hero + 4개 섹션 + Let's Talk) |
| `/works` | 포트폴리오 갤러리 (태그 필터) |
| `/works/[slug]` | 작업물 상세 페이지 |
| `/about` | About 페이지 |

## 보류 중인 기능

- 폰트 최적화
- 화면 전환 Fade out (Next.js Pages Router 적용 어려움)
- 카카오톡 알림톡 (공식 딜러사 경유 필요 — https://kakaobusiness.gitbook.io/main/ad/bizmessage/notice-friend)
