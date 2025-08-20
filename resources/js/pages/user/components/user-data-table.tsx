import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    Row,
    useReactTable
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { router } from "@inertiajs/react";
import User from "@/pages/user/data/models/User";
import { UserModel } from "./../schema/userSchema";
import TopActionBar from "@/components/custom/top-action-bar";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/core/presentation/store/useAppSelector";
import { RootState } from "@/core/presentation/store";
import { setColumnVisibility, setRowSelection, setSorting } from "../redux/userDataTableSlice";


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}


export default function UserDataTable<TData, TValue>({
    columns,
    data
}: DataTableProps<TData, TValue>) {
    const dispatch = useDispatch();
    const { rowSelection, sorting, columnVisibility } = useAppSelector(
        (state: RootState) => state.userDataTable
    );


    const table = useReactTable({
        data,
        columns,
        enableRowSelection: true,
        enableMultiRowSelection: true,
        enableColumnFilters: true,
        onRowSelectionChange: (updater) => {
            const newValue = typeof updater === "function" ? updater(rowSelection) : updater;
            dispatch(setRowSelection(newValue));
        },
        onSortingChange: (updater) => {
            const newValue = typeof updater === "function" ? updater(sorting) : updater;
            dispatch(setSorting(newValue));
        },
        onColumnVisibilityChange: (updater) => {
            const newValue = typeof updater === "function" ? updater(columnVisibility) : updater;
            dispatch(setColumnVisibility(newValue));
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            rowSelection,
            sorting,
            columnVisibility
        }
    });


    const onSelectRow = (row: Row<TData>) => {
        const user = new User(row.original as UserModel);

        router.visit(`/user/${user.id}`);
    };


    return (
        <main className="w-full">
            <div className="overflow-hidden rounded-md border">
                <div className="w-full">
                    <TopActionBar
                        createAction={{ to: "/user/create" }}
                        deleteAction={{ action: () => {} }}
                        refreshAction={{ action: () => {} }}
                        table={table}
                    />
                </div>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null :
                                            flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}

                                            {header.column.getCanFilter() && (
                                                <Input
                                                    placeholder={`Filter ${String(header.column.id)}`}
                                                    value={(header.column.getFilterValue() ?? "") as string}
                                                    onChange={(e) => header.column.setFilterValue(e.target.value)}
                                                    className="mt-1 h-8"
                                                />
                                            )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                      className={`cursor-pointer ${
                                            row.getIsSelected() ? "bg-purple-600 text-white" : ""
                                        }`}
                                    key = {row.id}
                                    onDoubleClick = {() => onSelectRow(row)}
                                    data-state = {row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    <h3>No results</h3>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}
