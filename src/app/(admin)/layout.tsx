"use client";

import { useEffect } from "react";

// layout -> template로 변경하면 똑같이 동작하지만, 네비게이션시 새로 렌더링됨
// 다시 실행 필요 없을 때 layout.tsx 
// 실행이 필요할 때 template.tsx

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  useEffect(() => {
    console.log("렌더링 시 실행됩니다.");
    // 두번 실행되는 이유는 next.config.mjs 에서 reactStrictMode: false 하면됨
  }, []);

  return (
    <>
      <h1>어드민 레이아웃</h1>
      {children}      
    </>
  )
  
}

export default AdminLayout
