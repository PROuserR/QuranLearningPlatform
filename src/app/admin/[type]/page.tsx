'use client';
import DataTable from "@/components/datatable";


function Page({ params }: { params: { type: string } }) {
    return (
        <main className="w-full flex flex-col gap-y-8">
            {params.type}
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