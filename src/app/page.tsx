"use client"
import Image from 'next/image';
import { motion } from "motion/react"
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex md:flex-row-reverse flex-col-reverse items-center justify-center">
      <motion.section
        initial={{ opacity: 0, x: 100 }}   // starting state
        animate={{ opacity: 1, x: 0 }}    // end state
        transition={{ duration: 1, ease: "easeOut" }} // timing
        className="text-3xl flex flex-col items-center justify-center text-center md:gap-y-20 md:w-1/2 w-full gap-y-12">
        <span className="md:text-6xl text-4xl font-semibold">تعلم القرآن الكريم عبر الانترنت</span>
        <span className="md:text-4xl text-2xl flex-wrap w-full whitespace-pre-line">
          القرآن نورٌ للقلب، فاجعل تلاوته عادةً يومية تنير دربك <br/>
          من جعل القرآن رفيقًا له، وجد الطمأنينة في كل خطوة
        </span>
        <div className='flex flex-row-reverse gap-x-2 md:gap-x-12 text-lg md:text-2xl'>
          <Link href="/login" className='text-green-50 bg-green-900 rounded-full md:py-8 md:px-16 p-6'>ابدأ الآن</Link>
          <Link href="/about" className='text-green-900 border-2 border-green-900 rounded-full md:py-8 md:px-16 p-6'> المزيد </Link>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: -100 }}   // starting state
        animate={{ opacity: 1, y: 0 }}    // end state
        transition={{ duration: 1, ease: "easeIn" }} // timing
      >
        <Image
          src="/Illustration.png" // path relative to public folder
          alt="Quran"
          width={800}
          height={800}
        />
      </motion.section>
    </main>
  );
}
