import useUserRepository from "@/pages/user/data/repository/useUserRepository";
import { UserDataTableState } from "@/pages/user/presentation/redux/userDataTableSlice";
import User from "../../data/models/User";


const useUserService = () => {
    const { getIndex, store, update, remove } = useUserRepository();

    const getIndexUser = (params: UserDataTableState["params"]) => {
        return getIndex(params);
    }


    const createUser = (formData: FormData) => {
        return store(formData);
    }


    const updateUser = async (id: string, formData: FormData) => {
        return update(id, formData);
    }


    const removeUser = (values: User[]) => {
        return remove(values);
    }


    return {
        getIndexUser,
        createUser,
        updateUser,
        removeUser
    };
}


export default useUserService;
