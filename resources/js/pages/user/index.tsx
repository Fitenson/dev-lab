
import { UserModel } from "./schema/userSchema";
import { Head } from "@inertiajs/react";
import { useQuery } from "@tanstack/react-query";
import { convertToDataTable } from "@/lib/utils";
import AppLayout from "@/layouts/app-layout";
import UserLayout from "@/layouts/user/layout";
import HeadingSmall from "@/components/heading-small";
import UserDataTable from "./components/user-data-table";
import { columns } from "./components/columns";
import breadcrumbItems from "@/components/breadcrumb-items";
import { useAppSelector } from "@/core/presentation/store/useAppSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIndexData } from "./redux/userDataTableSlice";
import useUserService from "./service/useUserService";


export default function UserGridview() {
    const dispatch = useDispatch();
    const { params } = useAppSelector(state => state.userDataTable);
    const { getIndexUser } = useUserService();


    const { data } = useQuery({
        queryKey: ["/user/index", params],
        queryFn: async () => {
            return getIndexUser(params);
        },
        enabled: true,
    });


    useEffect(() => {
        if(data) {
            dispatch(setIndexData(data));
        }
    }, [params, data, dispatch]);


    const usersPaginator = useAppSelector(
        (state) => state.userDataTable.data
    );

    const users = usersPaginator ? convertToDataTable(usersPaginator) : [];


    return (
        <AppLayout breadcrumbs={breadcrumbItems}>
            <Head title="User" />

            <UserLayout>
                <section className="w-full max-w-7xl mx-auto">
                    <HeadingSmall title="Users" />
                    <UserDataTable<UserModel, unknown> data={users} columns={columns} />
                </section>
            </UserLayout>
        </AppLayout>
    );
}
