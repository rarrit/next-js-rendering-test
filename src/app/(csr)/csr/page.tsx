"use client";

import { Posts } from '@/app/types/postType';
import Link from 'next/link'
import { useEffect, useState } from 'react';

const getPostsData = async () => {
  const res = await fetch("http://localhost:4003/posts");
  const data: Posts[] = await res.json();
  return data;
}

const CsrPage = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    getPostsData().then(setPosts);
  }, [])

  return (
    <div>
      <h1>CSR TEST PAGE</h1>

      {posts.map(post => {
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

export default CsrPage
