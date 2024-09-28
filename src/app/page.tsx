import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Main Page 입니다 :P</h1>
      <hr/>
      
      <Link href={"/about/1"} className="border-2">About Page로 이동</Link>
      <Link href={"/contact/1"}>Contact Page로 이동</Link>
    </div>
  );
}
