'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

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

const COLORS = ['#00FF00', '#2E8B57']; // Indigo + Amber



function Page() {
  return (
    <main className='flex flex-col w-full p-8 gap-y-8'>
      <section className='flex flex-col ml-auto text-end w-auto gap-y-8 mb-8'>
        <span className='font-bold text-6xl'>
          لوحة التحكم
        </span>
        <span className='font-semibold text-2xl'>
          هذه احصائيات عن المنصة يمكنك الاطلاع على ما يحصل في المنصة
        </span>
      </section>
      <section className='flex text-2xl text-green-50 gap-x-8 h-full'>
        <div className='w-2/5 h-full grid grid-cols-2 gap-x-6 gap-y-12 text-end'>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الطلاب  </span>
              <span className='font-bold'> 221 </span>
            </div>
            <button className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl'> عرض </button>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الاساتذة  </span>
              <span className='font-bold'> 221 </span>
            </div>
            <button className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl'> عرض </button>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد المشرفين  </span>
              <span className='font-bold'> 221 </span>
            </div>
            <button className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl'> عرض </button>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الحلقات  </span>
              <span className='font-bold'> 221 </span>
            </div>
            <button className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl'> عرض </button>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الدروس  </span>
              <span className='font-bold'> 322 </span>
            </div>
            <button className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl'> عرض </button>
          </div>
          <div className='flex flex-col items-center justify-end w-full p-4 rounded-3xl bg-green-800 shadow-xl shadow-black gap-y-16'>
            <div className='flex flex-row-reverse items-center justify-center w-full gap-x-24'>
              <span className=''> عدد الاعلانات  </span>
              <span className='font-bold'> 192 </span>
            </div>
            <button className='mx-auto font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl'> عرض </button>
          </div>
        </div>
        <div className='flex flex-col w-3/5 h-[1000px] p-4 gap-6'>
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