import { useRequest } from "@/lib/useRequest";
import { UserDataTableState } from "../../presentation/redux/userDataTableSlice";
import User from "../models/User";


const useUserRepository = () => {
    const { request } =  useRequest();

    const getIndex = async (params: UserDataTableState["params"]) => {
        return await request({
            url: "/user/index",
            method: "POST",
            data: params,
        });
    }


    const store = async (user: User) => {
        const formData = new FormData();

        formData.append("user[name]", user.getName());
        formData.append("user[full_name]", user.getFullName());
        formData.append("user[email]", user.getEmail());
        formData.append("user[description]", user.getDescription());
        formData.append("user[address]", user.getAddress());
        formData.append("user[gender]", user.getGender());

        return await request({
            url: "/user/store",
            method: "POST",
            data: formData
        });
    }


    const update = async (user: User) => {
        const formData = new FormData();

        formData.append("_method", "PUT");
        formData.append("user[name]", user.getName());
        formData.append("user[full_name]", user.getFullName());
        formData.append("user[email]", user.getEmail());
        formData.append("user[description]", user.getDescription());
        formData.append("user[address]", user.getAddress());
        formData.append("user[gender]", user.getGender());

        return await request({
            url: `/user/update/${user.getId()}`,
            method: "POST",
            data: formData
        });
    }


    const remove = async (values: User[]) => {
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
