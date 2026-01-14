'use client';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table';

type User = {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    isActive : string;
};



// Dummy data
const users = [
    { id: 1, name: 'Rami', email: 'rami@example.com', createdAt : '2022/3/4' , isActive: true ? 'نعم' : 'لا' },
    { id: 2, name: 'Sara', email: 'sara@example.com', createdAt: '2024/4/6', isActive: false ? 'نعم' : 'لا' },
    { id: 3, name: 'Omar', email: 'omar@example.com', createdAt: '2025/5/22', isActive: true ? 'نعم' : 'لا' },
];

// Define columns
const columns: ColumnDef<User>[] = [
    { accessorKey: 'name', header: 'الاسم' },
    { accessorKey: 'email', header: 'البريد الالكتروني' },
    { accessorKey: 'createdAt', header: 'تاريخ انشاء الحساب' },
    { accessorKey: 'isActive', header: 'ناشط' },
];

function DataTable() {
    const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className="bg-amber-50 border-2 border-green-800 w-full text-center">
            <thead >
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th className="border-2 border-green-800 bg-green-800 text-green-50" key={header.id}>
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
                            <td key={cell.id} className="border-2 border-green-800">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DataTable