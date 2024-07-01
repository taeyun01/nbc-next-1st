// "use client"; // use client = 클리이언트 컴포넌트로 실행

import CustomCounter from "@/components/CustomCounter";

// src>app>page.tsx
export default function Home() {
  return (
    <div className="p-8">
      안녕하세요! 내배캠 리액트.. 아니아니 넥스트입니다!
      <CustomCounter />
    </div>
  );
}
