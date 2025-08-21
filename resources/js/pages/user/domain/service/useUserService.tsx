import useUserRepository from "@/pages/user/data/repository/useUserRepository";
import { UserDataTableState } from "@/pages/user/presentation/redux/userDataTableSlice";


const useUserService = () => {
    const { getIndex, store, update } = useUserRepository();

    const getIndexUser = (params: UserDataTableState["params"]) => {
        return getIndex(params);
    }


    const createUser = (formData: FormData) => {
        return store(formData);
    }


    const updateUser = async (id: string, formData: FormData) => {
        return update(id, formData);
    }


    return {
        getIndexUser,
        createUser,
        updateUser
    };
}


export default useUserService;
