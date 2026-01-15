'use client';
import DataTable from "@/components/datatable";


function Page() {
    return (
        <main className="w-full flex flex-col gap-y-8">
            <section className="text-4xl font-bold ml-auto">
                جدول الطلاب
            </section>
            <section>
                <DataTable />
            </section>
        </main>
    )
}

export default Page