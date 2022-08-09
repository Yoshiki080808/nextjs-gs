
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Link href='/blog/3'>
        <a>ブログページNEW（next/link）</a>
        <p>aaaaaaaa</p>
      </Link>
      
  
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
