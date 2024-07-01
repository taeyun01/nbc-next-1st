import CSR from "@/components/rendering/CSR";
import ISR from "@/components/rendering/ISR";
import SSG from "@/components/rendering/SSG";
import SSR from "@/components/rendering/SSR";

// revalidate옵션은 컴포넌트에서는 적용 안되고.
// page, layout에서만 동작한다.
// 그럼 이 페이지에 있는 모든 데이터들은 10초마다 갱신된다. (페이지 레벨로 revalidate를 적용할 때 유용하다)
export const revalidate = 10;

const RenderingTestPage = () => {
  return (
    <div>
      <h1>4가지 렌더링 방식을 테스트 합니다.</h1>
      {/*<h1>SSG</h1>
       <SSG /> */}
      {/* <h1>ISR</h1>
      <ISR /> */}
      {/* <h1>SSR</h1>
      <SSR /> */}
      <h1>CSR</h1>
      <CSR />
    </div>
  );
};

export default RenderingTestPage;
