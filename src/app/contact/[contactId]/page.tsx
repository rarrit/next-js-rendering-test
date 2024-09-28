"use client";

import { useRouter } from "next/navigation";

type Props = {
  params: {
    contactId: number;
  }
}

const ContactPage = ({ params } : Props) => {
  const router = useRouter();
  const pageId: number = Number(params.contactId);

  const handleMovePrevPage = () => {    
    if(pageId <= 1) alert("이전 페이지가 없습니다.");      
    else router.push(`/contact/${pageId - 1}`);
  }
  const handleMoveNextPage = () => {
    router.push(`/contact/${pageId + 1}`);
  }

  return (
    <div>
      현재 페이지는 Contact Page-{pageId} 입니다.
      <hr/>
      <button onClick={handleMovePrevPage}>이전 페이지로 이동</button> | 
      <button onClick={handleMoveNextPage}>다음 페이지로 이동</button>
    </div>
  )
}

export default ContactPage
