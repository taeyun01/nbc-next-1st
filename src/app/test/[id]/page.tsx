import React from "react";

type Props = {
  params: {
    id: string;
  };
};

// 동적 라우트 적용 (Detail 페이지: params.id)
export function generateMetadata({ params }: Props) {
  return {
    title: `Detail 페이지 : ${params.id}`,
    description: `Detail 페이지 : ${params.id}`,
  };
}

const TestDetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <h2>다이나믹 라우트</h2>
      TestDetailPage : {params.id}
    </div>
  );
};

export default TestDetailPage;
