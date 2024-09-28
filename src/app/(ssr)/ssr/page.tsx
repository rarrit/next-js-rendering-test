import { Posts } from '@/app/types/postType';
import Link from 'next/link'

const SsrPage = async () => {
  const res = await fetch("http://localhost:4003/posts",{
    // fetch 안에서 캐싱 x => 매번 새로고침 할 때마다 렌더링됨
    // 반대는 force-cache : ssg
    cache: "no-store",
  });
  const data: Posts[] = await res.json();

  console.log("sss");

  return (
    <div>
      <h1>SSR TEST PAGE</h1>

        {data.map(post => {
          return (
            <div key={post.id}>
              <p>id: {post.id}</p>
              <p>title: {post.title}</p>
              <p>author: {post.author}</p>
            </div>
          )
        })}        

      <hr/>
      <Link href={"/ssr"} className="border-2">[SSR] TEST PAGE 이동</Link>
      <Link href={"/ssg"} className="border-2">[SSG] TEST PAGE 이동</Link>
      <Link href={"/csr"} className="border-2">[CSR] TEST PAGE 이동</Link>
      <Link href={"/isr"} className="border-2">[ISR] TEST PAGE 이동</Link>
    </div>
  )
}

export default SsrPage
