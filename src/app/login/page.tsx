"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from "motion/react"

function Page() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoginMode(!isLoginMode)
  }

  return (
    <div className='flex flex-row-reverse w-full h-full justify-center items-cente gap-x-64'>
      <div className='flex flex-col w-1/4 h-auto gap-y-12 items-center justify-center'>
        <AnimatePresence mode='wait'>
          {isLoginMode ? <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
            className='flex flex-col gap-y-12 items-center justify-center w-full' key="login">
            <span className='text-3xl'>تسجيل دخول المستخدم</span>
            <form className='flex h-auto text-xl flex-col w-full text-right p-8 gap-4 border-2 border-green-800 rounded-3xl' onSubmit={(e) => submitForm(e)}>
              <label> البريد الالكتروني</label>
              <input type='email' className='rounded-full p-2' />
              <label>كلمة المرور</label>
              <input type='password' className='rounded-full p-2' />
              <Link href="/reset_password" className='hover:underline text-gray-800 text-center mr-auto text-lg font-bold'>نسيت كلمة المرور؟  </Link>
              <input className='text-green-50 my-6 bg-green-900 rounded-full py-3 px-6' type='submit' value='تسجيل الدخول' />
              <button className='hover:underline text-gray-800 ml-auto text-lg mx-auto'>  ليس لديك حساب؟ <span className='font-bold'>انشاء حساب جديد</span></button>
            </form>
          </motion.div> : <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeIn" }}
            className='flex flex-col gap-y-12 items-center justify-center w-full' key="register">
            <span className='text-3xl'> انساء حساب جديد </span>
            <form className='flex h-auto text-xl flex-col w-full text-right p-8 gap-4 border-2 border-green-800 rounded-3xl' onSubmit={(e) => submitForm(e)}>
              <label>اسم المستخدم</label>
              <input type='text' className='rounded-full p-2' />
              <label> البريد الالكتروني</label>
              <input type='email' className='rounded-full p-2' />
              <label>كلمة المرور</label>
              <input type='password' className='rounded-full p-2' />
              <label>  نوع المستخدم </label>
              <select className='text-end px-4 py-2 rounded-3xl'>
                <option>استاذ</option>
                <option>مشرف</option>
                <option>طالب</option>
              </select>
              <Link href="/reset_password" className='hover:underline text-gray-800 text-center mr-auto text-lg font-bold'>نسيت كلمة المرور؟  </Link>
              <input className='text-green-50 my-6 bg-green-900 rounded-full py-3 px-6' type='submit' value='تسجيل الدخول' />
              <button className='hover:underline text-gray-800 ml-auto text-lg mx-auto'> العودة </button>
            </form>
          </motion.div>}
        </AnimatePresence>

      </div>

      <Image
        src="/LoginIllustration.png"
        alt="paryer"
        width={800}
        height={800}
        className='mt-12 pr-16 border-r-2 border-green-800'
      />
    </div>
  )
}

export default Page