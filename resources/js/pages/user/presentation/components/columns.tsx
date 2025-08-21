import { ColumnDef } from "@tanstack/react-table";
import { UserModel } from "@/pages/user/presentation/schema/userSchema";
import { createColumn } from "@/core/presentation/table/ColumnConfig";
import UserForm from "@/pages/user/presentation/form/UserForm";


export const columns: ColumnDef<UserModel>[] = [
    createColumn<UserModel>({ accessorKey: UserForm.getName(), header: "Name" }),
    createColumn<UserModel>({ accessorKey: UserForm.getFullName(), header: "Full Name" }),
    createColumn<UserModel>({ accessorKey: UserForm.getEmail(), header: "Email" }),
    createColumn<UserModel>({ accessorKey: UserForm.getDescription(), header: "Description" }),
    createColumn<UserModel>({ accessorKey: UserForm.getAddress(), header: "Address" }),
    createColumn<UserModel>({ accessorKey: UserForm.getGender(), header: "Gender" }),
];
