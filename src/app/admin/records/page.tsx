'use client';
import DataTable from "@/components/datatable";
import { BsSearch } from "react-icons/bs";
import { BsFunnel } from "react-icons/bs";

function Page() {
    return (
        <main className="w-full flex flex-col gap-y-8">
            <section className="text-4xl font-bold ml-auto">
                جدول الطلاب
            </section>
            <section className="flex flex-row-reverse gap-x-8 w-full font-bold">
                <div className="flex flex-row-reverse justify-center items-center gap-x-4 p-4 bg-green-50 border-[2px] border-green-800 rounded-3xl w-1/4">
                    <input type="text" placeholder="بحث" className="border-0 text-end bg-green-50 w-full h-full" />
                    <BsSearch />
                </div>
                <div className="px-8 py-4 flex flex-row-reverse bg-green-50 border-[2px] border-green-800 rounded-3xl items-center justify-center gap-x-4">
                    <span> ترتيب حسب </span>
                    <select className="p-2 bg-transparent flex items-center justify-center w-24">
                        <option> اسم </option>
                        <option> بريد الالكتروني </option>
                        <option> تاريخ </option>
                    </select>
                </div>
                <button className="p-4 bg-green-50 border-[2px] border-green-800 rounded-3xl flex w-auto items-center justify-center mr-auto"><BsFunnel /></button>
            </section>
            <section>
                <DataTable />
            </section>
        </main>
    )
}

export default Page