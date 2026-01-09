"use client"
import Image from 'next/image';
import { motion } from "motion/react"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-2">
      <main className="flex flex-row-reverse items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}   // starting state
          animate={{ opacity: 1, x: 0 }}    // end state
          transition={{ duration: 1, ease: "easeOut" }} // timing
          className="text-3xl flex flex-col items-center justify-center text-center gap-y-20 w-1/2">
          <span className="text-6xl font-semibold">تعلم القرآن الكريم عبر الانترنت</span>
          <span className="text-4xl flex-wrap w-2/3">
            القرآن نورٌ للقلب، فاجعل تلاوته عادةً يومية تنير دربك
            من جعل القرآن رفيقًا له، وجد الطمأنينة في كل خطوة
          </span>
          <div className='flex flex-row-reverse gap-x-12'>
            <Link href="/login" className='text-green-50 bg-green-900 rounded-full py-8 px-16'>ابدأ الآن</Link>
            <Link href="/about" className='text-green-900 border-2 border-green-900 rounded-full py-8 px-16'> المزيد </Link>

          </div>
        </motion.div>
        <motion.div
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
        </motion.div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
