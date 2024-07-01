// admin폴더 아래 있는 모든 폴더 페이지들을 디자인 하고 싶을 때
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>여기는 어드민 페이지가 놓이는 곳입니다!</p>
      {children}
    </div>
  );
};

export default AdminLayout;
