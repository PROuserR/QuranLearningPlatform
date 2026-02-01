"use client"
import Link from "next/link"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Page() {
    const data = [
        { name: 'محرم', number: 7 },
        { name: 'صفر', number: 286 },
        { name: 'ربيع الاول', number: 200 },
        { name: 'ربيع الاخر', number: 176 },
        { name: 'جمادى الاولى', number: 7 },
        { name: 'جمادى الاخرة', number: 286 },
        { name: 'رجب', number: 200 },
        { name: 'شعبان', number: 176 },
        { name: 'رمضان', number: 7 },
        { name: 'شوال', number: 286 },
        { name: 'ذو القعدة', number: 0 },
        { name: 'ذو الحجة', number: 0 },
    ];

    const data2 = [
        { name: 'Completed', value: 40 },
        { name: 'Remaining', value: 60 },
    ];

    const COLORS = ['#4ade80', '#166534'];

    return (
        <main className='flex flex-col w-full gap-y-8'>
            <section className='font-bold text-4xl'> لوحة الطالب </section>
            <section className='flex flex-col space-y-8 md:flex-row '>
                <div className='flex flex-col w-full md:w-1/2 gap-y-8 text-green-50'>
                    <div className='flex flex-col  items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                        <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                            <span> الجزء/السورة الحالية </span>
                            <span className='font-bold'> 221 </span>
                        </div>
                        <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
                    </div>
                    <div className='flex flex-col  items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                        <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                            <span className=''>
                                التسميعات المقبولة
                            </span>
                            <span className='font-bold'> 221 </span>
                        </div>
                        <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
                    </div>
                    <div className='flex flex-col  items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
                        <div className='flex flex-row-reverse items-center justify-center w-full gap-x-4 md:gap-x-24'>
                            <span className=''>
                                التسميعات المرفوضة
                            </span>
                            <span className='font-bold'> 221 </span>
                        </div>
                        <Link href="admin/students" className='mx-auto text-center font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
                    </div>
                </div>
                <div className='flex flex-col w-full h-[500px] md:w-1/2 gap-y-8'>
                    <span className='text-green-800 text-xl'> نسبة الانجاز </span>
                    <ResponsiveContainer width="100%" height="100%" className="rounded-3xl">
                        <PieChart>
                            <Pie
                                data={data2}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent = 1 }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                    <span className='text-green-800 text-xl'> ملاحظات التركيز على التشكيل</span>
                </div>
            </section>
        </main>
    )
}

export default Page