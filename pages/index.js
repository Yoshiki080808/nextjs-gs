// pages/index.js
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-sm'>
      <Link href='/blog/3'>
        <a>ブログページNEW（next/link）</a>
      </Link>
      
      {/* <a href='/hello'>ブログページ（a タグ）</a> */}
      <img src='/vercel.svg' />
      <div>Hello World!</div>
      <Image
        src='/paletty.png'
        width={500}
        height={500}
        alt='パレッティ公式キャラクター'
      />
    </div>
  )
}
