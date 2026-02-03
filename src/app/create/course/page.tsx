
function Page() {
    return (
        <main className='flex flex-col gap-y-8'>
            <section className='font-bold text-4xl'> انشاء دورة</section>
            <section >
                <form className='flex h-auto w-1/3 ml-auto text-xl flex-col text-right p-8 gap-4 border-2 border-green-800 rounded-3xl'>
                    <label> اسم الدورة </label>
                    <input type='text' />
                    <label> المستوى </label>
                    <select>
                        <option> مبتدئ </option>
                        <option> متوسط </option>
                        <option> متقدم </option>
                    </select>
                    <label> المدة </label>
                    <input type='datetime-local' />
                    <input type='datetime-local' />
                    <label> النوع </label>
                    <select>
                        <option> مباشر (Live) </option>
                        <option> مسجل </option>
                        <option> مسجل و مباشر </option>
                    </select>
                    <input type='submit' value="انشاء" className='text-green-50 my-6 bg-green-900 rounded-full py-3 px-6 cursor-pointer' />
                </form>
            </section>
        </main>
    )
}

export default Page