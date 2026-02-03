
function Page() {
    return (
        <main className='flex flex-col gap-y-8'>
            <section className='font-bold text-4xl'> انشاء درس </section>
            <section >
                <form className='flex h-auto w-1/3 ml-auto text-xl flex-col text-right p-8 gap-4 border-2 border-green-800 rounded-3xl'>
                    <label> اسم الدرس </label>
                    <input type='text' />
                    <label> الوصول </label>
                    <select>
                        <option> يوتيوب </option>
                        <option> محلي </option>
                    </select>
                    <label> الفيديو </label>
                    <input type='file' />
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