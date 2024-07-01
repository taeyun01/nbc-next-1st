// marketing폴더 아래 있는 모든 폴더 페이지들을 디자인 하고 싶을 때
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>여기는 마케팅과 관련된 페이지가 놓이는 곳</p>
      {children}
      {/* /business에 의한 페이지 컴포넌트들   */}
    </div>
  );
};

export default MarketingLayout;
