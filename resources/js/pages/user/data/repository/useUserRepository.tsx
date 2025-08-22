import { useRequest } from "@/lib/useRequest";
import { UserDataTableState } from "../../presentation/redux/userDataTableSlice";
import User from "../models/User";
import { UserModel } from "../../presentation/schema/userSchema";


const useUserRepository = () => {
    const { request } =  useRequest();

    const getIndex = async (params: UserDataTableState["params"]) => {
        return await request({
            url: "/user/index",
            method: "POST",
            data: params,
        });
    }


    const store = async (formData: FormData) => {
        return await request({
            url: "/user/store",
            method: "POST",
            data: formData
        });
    }


    const update = async (id: string, formData: FormData) => {
        formData.append("_method", "PUT");

        return await request({
            url: `/user/update/${id}`,
            method: "POST",
            data: formData
        });
    }


    const remove = async (values: UserModel[]) => {
        const formData = new FormData();

        values.forEach((user, index) => {
            formData.append(`UUIDs[${index}]`, user.getId());
        });

        formData.append("_method", "DELETE");

        return await request({
            url: "/user/delete",
            method: "POST",
            data: formData
        });
    }


    return {
        getIndex,
        store,
        update,
        remove
    };
}


export default useUserRepository;
