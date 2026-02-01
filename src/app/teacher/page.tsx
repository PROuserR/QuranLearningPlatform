"use client"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Page() {
  const data = [
    {
      name: 'محرم',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'صفر',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'ربيع الاول',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'ربيع الاخر',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'جمادى الاولى',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'جمادى الاخرة',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  return (
    <main className='flex flex-col w-full gap-y-8'>
      <section className='font-bold text-4xl'> لوحة الاستاذ </section>

      <section className="flex flex-col md:flex-row md:gap-x-8 gap-y-8">
        <div className="flex flex-col gap-y-8 w-full md:w-1/2">
          <div className='font-bold text-4xl'> الطلاب </div>
          <div className='flex'>
            <div className='flex flex-col md:flex-row-reverse w-full gap-y-4 md:gap-x-8 text-green-50'>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span> جدول كل الطلاب </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span className=''>
                    المتاخرين عن التسميع
                  </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span className=''>
                    المحافظين على التسميع
                  </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
            </div>
          </div>
          <div className='font-bold text-4xl'> الدروس </div>
          <div className='flex'>
            <div className='flex flex-col md:flex-row-reverse w-full gap-y-4 md:gap-x-8 text-green-50'>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span> جدول كل الدروس </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span className=''>
                    الدروس التي لم ترفع
                  </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span className=''>
                    الدروس التي رفعت
                  </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
            </div>
          </div>
          <div className='font-bold text-4xl'> الدورات </div>
          <div className='flex'>
            <div className='flex flex-col md:flex-row-reverse w-full gap-y-4 md:gap-x-8 text-green-50'>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span> جدول كل الدورات </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span className=''>
                    الدورات التي انتهت
                  </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
              <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                  <span className=''>
                    الدورات الحالية
                  </span>
                  <span className='font-bold'> 221 </span>
                </div>
                <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-8 w-full md:w-1/2 h-[500px]">
          <span className='font-bold text-4xl'> مخطط الوقت </span>
          <LineChart
            style={{ width: '100%', height: '100%', maxHeight: '80vh' }}
            responsive
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </section>
    </main>
  )
}

export default Page