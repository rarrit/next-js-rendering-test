"use client";

import { useRouter } from "next/navigation";

type Props = {
  params: {
    aboutId: number;
  }
}


const AboutPage = ({ params } : Props) => {
  const router = useRouter();
  const pageId: number = Number(params.aboutId);

  const handleMovePrevPage = () => {    
    if(pageId <= 1) alert("이전 페이지가 없습니다.");      
    else router.push(`/about/${pageId - 1}`);
  }
  const handleMoveNextPage = () => {
    router.push(`/about/${pageId + 1}`);
  }

  return (
    <div>
      현재 페이지는 About Page-{pageId} 입니다.
      <hr/>
      <button onClick={handleMovePrevPage}>이전 페이지로 이동</button> | 
      <button onClick={handleMoveNextPage}>다음 페이지로 이동</button>      
    </div>
  )
}

export default AboutPage
