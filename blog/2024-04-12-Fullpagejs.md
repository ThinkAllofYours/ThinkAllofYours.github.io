---
slug: fullpage-js-nextjs-typescript-integration
title: 🎨 Fullpage.js + Next.js + TypeScript로 멋진 웹페이지 만들기
authors: [bundabergman]
tags: [fullpage.js, nextjs, typescript, react, frontend]
---

## Fullpage.js + Next.js + TypeScript로 멋진 웹페이지 만들기 🚀

안녕하세요! 오늘은 Fullpage.js, Next.js, 그리고 TypeScript를 함께 사용하여 멋진 웹 페이지를 구현하는 방법을 공유하려고 합니다. 인터넷에서 이 세 가지 기술을 함께 사용하는 예제를 찾기 어려워 이렇게 블로그에 작성하게 되었습니다.

## 📚 참고 자료

- [공식 Next.js 샘플](https://github.com/alvarotrigo/react-fullpage/tree/master/examples/next)
- [완성된 프로젝트 GitHub](https://github.com/ThinkAllofYours/fullpage_nextjs_typescript.git)

## 🛠️ 준비물

먼저, 프로젝트에 필요한 패키지들을 설치해야 합니다:

```bash
npx create-next-app@latest --typescript
npm install react-bootstrap bootstrap
npm install @fullpage/react-fullpage
```

### 📦 package.json

```json
{
  "name": "fullpage_nextjs_typescript",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "license": "gpl-3.0",
  "dependencies": {
    "@fullpage/react-fullpage": "^0.1.38",
    "@types/node": "18.15.11",
    "@types/react": "18.0.34",
    "@types/react-dom": "18.0.11",
    "bootstrap": "^5.2.3",
    "next": "13.3.0",
    "react": "18.2.0",
    "react-bootstrap": "^2.7.2",
    "react-dom": "18.2.0",
    "typescript": "5.0.4"
  }
}
```

## 💻 구현하기

> `components/fullpageExample.tsx`라는 파일을 생성하고 아래의 코드를 입력합니다.

[이전 코드와 동일한 TypeScript 코드 블록]

```tsx
import React, { useState } from "react";
import ReactFullpage, { fullpageOptions } from "@fullpage/react-fullpage";
import { Navbar, Nav, Button } from "react-bootstrap";

interface Section {
  text: string;
  id?: number;
}

const originalColors = [
  "blue",
  "#0798ec",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow",
];

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};

const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const FullpageJsExample = () => {
  const [sectionsColor, setSectionsColor] = useState([...originalColors]);
  const [fullpages, setFullpages] = useState<Section[]>([
    {
      text: "Section 1",
    },
    {
      text: "Section 2",
    },
    {
      text: "Section 3",
    },
  ]);

  const onLeave = (origin: any, destination: any, direction: any) => {
    console.log("onLeave", { origin, destination, direction });
  };

  const handleChangeColors = () => {
    const newColors =
      sectionsColor[0] === "yellow" ? [...originalColors] : ["yellow", "blue", "white"];
    setSectionsColor(newColors);
  };

  const handleAddSection = () => {
    setFullpages((prevFullpages) => [
      ...prevFullpages,
      {
        text: `section ${prevFullpages.length + 1}`,
        id: Math.random(),
      },
    ]);
  };

  const handleRemoveSection = () => {
    setFullpages((prevFullpages) => {
      const newPages = [...prevFullpages];
      newPages.pop();
      return newPages;
    });
  };

  if (!fullpages.length) {
    return null;
  }

  const Menu = () => (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home" className="mx-2">
        Fullpage.js + Next.js + Typescript
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Button onClick={handleAddSection} className="mr-2, mx-1">
              ADD SECTION
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button onClick={handleRemoveSection} className="mr-2, mx-1">
              REMOVE SECTION
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button onClick={handleChangeColors}>CHANGE SECTION</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  const credits: Credits = {
    enabled: true,
    label: "my custom",
    position: "left",
  };

  return (
    <div className="App">
      <Menu />
      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        navigation
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        pluginWrapper={pluginWrapper}
        debug={false}
        credits={credits}
        render={(comp: any) => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ text }) => (
              <div key={text} className="section">
                <h1>{text}</h1>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default FullpageJsExample;
```

코드 설명은 다음과 같습니다:

1.  React 및 필요한 모듈을 import 합니다.
2.  각 섹션의 정보와 색상을 저장하는 상태를 생성합니다.
3.  섹션을 추가하고 삭제하거나 색상을 변경하는 함수를 구현합니다.
4.  React-Bootstrap을 사용하여 상단 메뉴를 구현합니다.
5.  Fullpage.js의 옵션을 설정하고, 각 섹션을 렌더링합니다.

실행
--

이제 터미널에서 `npm run dev` 명령어를 입력하여 개발 서버를 실행시키세요. 웹 브라우저에서 `http://localhost:3000`에 접속하면 작성한 웹 페이지를 확인할 수 있습니다.

이상으로 Fullpage.js, Next.js, TypeScript를 사용하여 웹 페이지를 구현하는 방법입니다.