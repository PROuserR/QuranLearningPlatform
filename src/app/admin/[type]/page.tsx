'use client';
import DataTable from "@/components/datatable";
import { useEffect, useState } from "react";



function Page({ params }: { params: { type: string } }) {
    const [dynamicPath, setDynamicPath] = useState<string>();

    useEffect(() => {
        switch (params.type) {
            case "students":
                setDynamicPath("الطلاب")
                break;
            case "teachers":
                setDynamicPath("الاساتذة")
                break;
            case "admins":
                setDynamicPath("المشرفين")
                break;
            case "courses":
                setDynamicPath("الحلقات")
                break;
            case "lessons":
                setDynamicPath("الدروس")
                break;
            case "issues":
                setDynamicPath("الاعلانات")
                break;

            default:
                break;
        }
    })

    return (
        <main className="w-full flex flex-col gap-y-8">
            <section className="text-4xl font-bold ml-auto">
                جدول {dynamicPath}
            </section>
            <section>
                <DataTable />
            </section>
        </main>
    )
}

export default Page