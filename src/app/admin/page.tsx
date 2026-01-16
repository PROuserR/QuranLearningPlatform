'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Link from 'next/link';

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



function Page() {
  return (
    <main className='flex flex-col w-full gap-y-8 text-green-800'>
      <section className='flex flex-col ml-auto text-end w-auto gap-y-8 mb-8'>
        <span className='font-bold text-4xl'>
          لوحة التحكم
        </span>
        <span className='font-semibold text-2xl'>
          هذه احصائيات عن المنصة يمكنك الاطلاع على ما يحصل في المنصة
        </span>
      </section>
      <section className='flex flex-col md:flex-row text-sm md:text-xl text-green-50 gap-y-8 md:gap-x-8 h-full'>
        <div className='w-full md:w-2/5 h-full grid grid-cols-2 gap-x-6 gap-y-12 text-end'>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الطلاب  </span>
              <span className='font-bold'> 221 </span>
            </div>
            <Link href="admin/students" className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الاساتذة  </span>
              <span className='font-bold'> 221 </span>
            </div>
            <Link href="admin/teachers" className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد المشرفين  </span>
              <span className='font-bold'> 221 </span>
            </div>
            <Link href="admin/admins" className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الحلقات  </span>
              <span className='font-bold'> 221 </span>
            </div>
            <Link href="admin/courses" className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الدروس  </span>
              <span className='font-bold'> 322 </span>
            </div>
            <Link href="admin/lessons" className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الاعلانات  </span>
              <span className='font-bold'> 192 </span>
            </div>
            <Link href="admin/issues" className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full px-8'>
              <span className='text-end'> عدد طلبات الاساتذة للانضمام  </span>
              <span className='font-bold'> 34 </span>
            </div>
            <Link href="admin/requests" className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>

          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className='text-center'> ايقاف حساب مؤقتا </span>
            </div>
            <Link href="admin/students" className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl w-5/6'> عرض </Link>

          </div>
        </div>
        <div className='flex flex-col w-full md:w-3/5 h-[1000px] py-4 md:px-4 gap-y-6 md:gapx-6'>
          <div className='flex w-full justify-center items-center px-2 text-green-800 text-end'>
            <select className='text-end px-4 py-2 rounded-3xl mr-auto bg-green-50'>
              <option>استاذ</option>
              <option>مشرف</option>
              <option>طالب</option>
            </select>
            <span>
              احصائيات المستخدمين
            </span>
          </div>
          <ResponsiveContainer width="100%" height="45%" className="rounded-3xl text-sm">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="name" interval={0} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="number" fill="#166534" />
            </BarChart>
          </ResponsiveContainer>

          <div className='text-green-800 text-end'>
            احصائيات مالية
          </div>
          <ResponsiveContainer width="100%" height="45%" className="rounded-3xl">
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

        </div>
      </section>
    </main>

  )
}

export default Page