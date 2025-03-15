# Practice Framer Motion

![practice-framer-motion](https://user-images.githubusercontent.com/56423604/191564433-64a4746f-adeb-409e-a7a0-0634f98e515e.gif)

![practice-framer-motion_2](https://user-images.githubusercontent.com/56423604/191564567-13575531-a636-41ce-b4e8-8ce5c653ae77.gif)

> Framer Motion을 이용한 다양한 애니메이션

- Animations : 새로고침 시 회전하는 애니메이션
- Variant : 새로고침 시 작은 원이 떠오르는 애니메이션
- Gestures : 작은 사각형 hover 시에 회전하면서 사각형이 회전하는 애니메이션 / click 시에 원으로 변하며 작아지는 애니메이션
- Drag : 작은 사각형 Drag 시에 색이 변하는 애니메이션
- BoundDrag : 작은 사각형 안에서 원이 드래그 되면서 색이 변하는 애니메이션
- RollingDrag : 수평적으로 드래그되면서 사각형이 회전과 동시에 배경이 변하는 애니메이션
- Scroll : 수직 스크롤에 따라 사각형에 크기와 흰색 부분이 달라지는 애니메이션
- Path : 유령 모양의 아이콘의 그려지고 채워지는 애니메이션
- Popup : 팝업이 등장하는 애니메이션

## Quick Start

```shell
npm install
npm start
```

## Project Structure

```Plain text
src
│
├── components ───────────  view 컴포넌트
│   ├── Animations
│   ├── BoundDrag
│   ├── Drag
│   ├── Gesture
│   ├── Path
│   ├── RollingDrag
│   ├── Scroll
│   └── Variant
│
├── style ────────────────  styled-components' custom style & GlobalStyle, theme 관련
│   ├── GlobalStyle
│   ├── index
│   ├── styled.d.ts
│   └── theme
│
├── App.js ───────────────  Theme Context 적용 & GlobalStyle 적용
│
└── index.js ─────────────  애플리케이션 엔트리 포인트
```

## Tech Stack

- react v_18.2.0
- react-dom v_18.2.0
- styled-components v_5.3.5
- framer-motion v_7.3.5
- typescript v_4.8.3
