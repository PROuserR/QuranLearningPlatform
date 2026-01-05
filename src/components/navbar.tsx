import Image from 'next/image';
import Link from 'next/link';

function navbar() {
  return (
    <nav className='text-2xl w-full bg-green-800 text-green-50 px-4 py-2 flex flex-row-reverse items-center justify-center'>
      <Link href="/">منصة تعليم القرآن الكريم</Link>
      <Image
        src="/Quran.png" // path relative to public folder
        alt="Quran"
        width={64}
        height={64}
      />
      <div className='flex flex-row items-center justify-center gap-x-8 mr-auto'>
        <Link href="/login" className='hover:underline'>
          تسجيل الدخول
        </Link>
        <Link href="/about" className='hover:underline'>
          حول
        </Link>
      </div>
    </nav>
  )
}

export default navbar