'use client';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
    getFilteredRowModel,
    ColumnDef,
    ColumnSort,
    ColumnFilter,
} from '@tanstack/react-table';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { BsFunnel } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    isActive: string;
};

// Dummy data
const users = [
    { id: '1', name: 'رامي', email: 'rami@example.com', createdAt: '2022/3/4', isActive: true ? 'نعم' : 'لا' },
    { id: '2', name: 'سارة', email: 'sara@example.com', createdAt: '2024/4/6', isActive: false ? 'نعم' : 'لا' },
    { id: '3', name: 'عمر', email: 'omar@example.com', createdAt: '2025/5/22', isActive: true ? 'نعم' : 'لا' },
    { id: '4', name: 'رامي', email: 'rami@example.com', createdAt: '2022/3/4', isActive: true ? 'نعم' : 'لا' },
    { id: '5', name: 'سارة', email: 'sara@example.com', createdAt: '2024/4/6', isActive: false ? 'نعم' : 'لا' },
    { id: '6', name: 'عمر', email: 'omar@example.com', createdAt: '2025/5/22', isActive: true ? 'نعم' : 'لا' },
    { id: '7', name: 'رامي', email: 'rami@example.com', createdAt: '2022/3/4', isActive: true ? 'نعم' : 'لا' },
    { id: '8', name: 'سارة', email: 'sara@example.com', createdAt: '2024/4/6', isActive: false ? 'نعم' : 'لا' },
    { id: '9', name: 'عمر', email: 'omar@example.com', createdAt: '2025/5/22', isActive: true ? 'نعم' : 'لا' },
    { id: '10', name: 'رامي', email: 'rami@example.com', createdAt: '2022/3/4', isActive: true ? 'نعم' : 'لا' },
    { id: '11', name: 'سارة', email: 'sara@example.com', createdAt: '2024/4/6', isActive: false ? 'نعم' : 'لا' },
    { id: '12', name: 'عمر', email: 'omar@example.com', createdAt: '2025/5/22', isActive: true ? 'نعم' : 'لا' },
    { id: '13', name: 'رامي', email: 'rami@example.com', createdAt: '2022/3/4', isActive: true ? 'نعم' : 'لا' },
    { id: '14', name: 'سارة', email: 'sara@example.com', createdAt: '2024/4/6', isActive: false ? 'نعم' : 'لا' },
    { id: '15', name: 'عمر', email: 'omar@example.com', createdAt: '2025/5/22', isActive: true ? 'نعم' : 'لا' },
    { id: '16', name: 'رامي', email: 'rami@example.com', createdAt: '2022/3/4', isActive: true ? 'نعم' : 'لا' },
    { id: '17', name: 'سارة', email: 'sara@example.com', createdAt: '2024/4/6', isActive: false ? 'نعم' : 'لا' },
    { id: '18', name: 'عمر', email: 'omar@example.com', createdAt: '2025/5/22', isActive: true ? 'نعم' : 'لا' },
    { id: '19', name: 'رامي', email: 'rami@example.com', createdAt: '2022/3/4', isActive: true ? 'نعم' : 'لا' },
    { id: '20', name: 'سارة', email: 'sara@example.com', createdAt: '2024/4/6', isActive: false ? 'نعم' : 'لا' },
];

// Define columns
const columns: ColumnDef<User>[] = [
    { accessorKey: 'isActive', header: 'ناشط' },
    { accessorKey: 'createdAt', header: 'تاريخ انشاء الحساب' },
    { accessorKey: 'email', header: 'البريد الالكتروني' },
    { accessorKey: 'name', header: 'الاسم' },
    { accessorKey: 'id', header: 'الرقم التسلسلي' },
];

function DataTable() {
    const [sorting, setSorting] = useState<ColumnSort[]>([]);
    const [sortQuery, setSortQuery] = useState<string>("name");
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
    const [filterQuery, setFilterQuery] = useState<string>("name");
    const [isFilterShown, setIsFilterShown] = useState<boolean>(false);

    const table = useReactTable({
        data: users,
        columns,
        state: { sorting, columnFilters },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    // Handle dropdown change
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setSortQuery(value);
    };

    const sortData = (sortQuery: string) => {
        if (sortQuery === "name" || sortQuery == "id" || sortQuery == "createdAt") {
            if (isAscending)
                setSorting([{ id: sortQuery, desc: false }]); // ascending
            else
                setSorting([{ id: sortQuery, desc: true }]); // descending 
        } else {
            setSorting([]); // no sort
        }
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === "name" || value == "id" || value == "createdAt") {
            setFilterQuery(value);
        } else {
            setFilterQuery("name");
        }
    };

    return (
        <main className='h-[75vh] w-full flex flex-col gap-y-8 '>
            <section className="flex flex-row-reverse gap-x-8 w-full font-bold">
                <div className="flex flex-row-reverse justify-center items-center gap-x-4 px-6 py-2 bg-green-50  border-green-800 rounded-3xl w-1/5">
                    <input type="text" placeholder="بحث" className="border-0 outline-none text-end bg-green-50 w-full h-full" onChange={(e) =>
                        table.getColumn(filterQuery)?.setFilterValue(e.target.value)}
                    />
                    <BsSearch className="w-6 h-6" />
                </div>

                <div className="px-6 py-2 flex flex-row-reverse bg-green-50 border-green-800 rounded-3xl items-center justify-center gap-x-4">
                    <span> ترتيب حسب </span>
                    <select className="p-1 bg-transparent flex items-center justify-center mr-auto w-auto outline-none text-center" onChange={(e) => { handleSortChange(e); sortData(e.target.value) }}>
                        <option value="id"> الرقم التسلسلي  </option>
                        <option value="name"> اسم </option>
                        <option value="createdAt"> تاريخ </option>
                    </select>
                    <div className='ml-auto cursor-pointer'>
                        {isAscending ? <BsArrowUp className='w-6 h-6' onClick={() => { setIsAscending(false); sortData(sortQuery) }} />
                            : <BsArrowDown className='w-6 h-6' onClick={() => { setIsAscending(true); sortData(sortQuery) }} />}
                    </div>
                </div>

                <div className='flex mr-auto gap-x-4 bg-green-50  border-green-800 rounded-3xl p-2'>
                    <button className="flex w-auto items-center justify-center"><BsFunnel className="w-6 h-6" onClick={() => setIsFilterShown(!isFilterShown)} /></button>
                    {isFilterShown ? <select className="bg-transparent flex items-center justify-center mr-auto w-auto outline-none text-center" onChange={handleFilterChange}>
                        <option value="id"> الرقم التسلسلي  </option>
                        <option value="name"> اسم </option>
                        <option value="createdAt"> تاريخ </option>
                    </select> : null}
                </div>
            </section>

            <table className="bg-amber-50 w-full h-full text-center">
                <thead >
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th className="bg-green-800 text-green-50" key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="border border-green-200">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <section className='px-4 text-green-800 flex w-full items-center justify-end'>
                <div className='font-extralight p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl text-green-50 mr-auto'>
                    <button> اضافة طالب </button>
                </div>

                <div>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        التالي
                    </button>
                    <span style={{ margin: "0 1rem" }}>
                        صفحة {table.getState().pagination.pageIndex + 1} من {" "}
                        {table.getPageCount()}
                    </span>
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        السابق
                    </button>
                </div>
            </section>

        </main>

    )
}

export default DataTable