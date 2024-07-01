"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  // onClick이벤트를 사용할 때 주로씀 (useRouter를 사용할 때는 항상 코드 최상단에 “use client”를 삽입)
  const router = useRouter(); // next/navigation로 임포트

  // 다른 Link로 이동해도 리렌더링이 안됨 (useEffect는 최초에 딱 한번)
  useEffect(() => {
    console.log("최초 렌더링 한 번만 호출 합니다!");
  }, []);

  return (
    <div className="m-8 p-8 bg-white text-black">
      <h1>TestLayout페이지</h1>
      <p>테스트 경로 하위에서의 이동을 확인해봅니다.</p>
      <nav className="p-4 border-solid border-2 border-violet-500 rounded-md">
        <ul>
          <li onClick={() => router.push("/test")}>
            {/* <Link href="/test">테스트 페이지</Link> */}
            테스트 페이지 이동 (router) 사용
          </li>
          <li onClick={() => router.push("/test/1")}>
            {/* <Link href="/test/1">테스트 페이지1</Link> */}
            테스트 페이지1 test/1로 이동(router) 사용
          </li>
          <li>
            <Link href="/test/2">테스트 페이지2 (Link)사용</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default TestLayout;
