"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from "motion/react"

function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown)
  }

  return (
    <nav className='text-lg md:text-2xl w-full bg-green-800 text-green-50 md:px-4 md:py-2 p-2 flex flex-row-reverse items-center justify-center'>
      <Link href="/">منصة تعليم القرآن الكريم</Link>
      <Image
        src="/Quran.png" // path relative to public folder
        alt="Quran"
        width="64"
        height="64"
        className='hidden md:flex'
      />
      <div className='hidden md:flex flex-row items-center justify-center md:gap-x-8 gap-x-2 mr-auto'>
        <Link href="/login" className='hover:underline'>
          تسجيل الدخول
        </Link>
        <Link href="/about" className='hover:underline'>
          حول
        </Link>
      </div>

      <div className='flex flex-col md:hidden w-auto gap-y-1 mr-auto' onClick={toggleMenu}>
        <div className='flex w-6 bg-green-50 py-[1px] px-3'></div>
        <div className='flex w-6 bg-green-50 py-[1px] px-3'></div>
        <div className='flex w-6 bg-green-50 py-[1px] px-3'></div>
      </div>

      {isMenuShown ? <div className='h-screen w-screen left-0 top-0 text-4xl bg-green-400 absolute z-10 flex flex-col'>
        <div className='flex flex-row-reverse w-full items-center px-4'>
          <Image
            src="/Quran.png" // path relative to public folder
            alt="Quran"
            width="64"
            height="64"
            className='mb-auto'
          />
          <div className='mr-auto text-3xl' onClick={toggleMenu}>X</div>

        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}   // starting state
          animate={{ opacity: 1, x: 0 }}    // end state
          transition={{ duration: 1, ease: "easeOut" }} // timing
          className='flex flex-col text-center items-center justify-center w-full m-auto gap-y-12'>
          <Link href="/" onClick={toggleMenu}> الصفحة الرئيسية</Link>
          <Link href="/login" onClick={toggleMenu}>تسجيل الدخول</Link>
          <Link href="/about" onClick={toggleMenu}>حول</Link>
        </motion.div>
      </div> : null}

    </nav>
  )
}

export default Navbar