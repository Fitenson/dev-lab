import { ColumnDef } from "@tanstack/react-table";
import { UserModel } from "../schema/userSchema";
import { createColumn } from "@/core/presentation/table/ColumnConfig";


export const columns: ColumnDef<UserModel>[] = [
    createColumn<UserModel>({ accessorKey: "name", header: "Name" }),
    createColumn<UserModel>({ accessorKey: "full_name", header: "Full Name" }),
    createColumn<UserModel>({ accessorKey: "email", header: "Email" }),
    createColumn<UserModel>({ accessorKey: "description", header: "Description" }),
    createColumn<UserModel>({ accessorKey: "address", header: "Address" }),
];
