import useUserRepository from "@/pages/user/data/repository/useUserRepository";
import { UserDataTableState } from "../redux/userDataTableSlice";


const useUserService = () => {
    const { getIndex, update } = useUserRepository();

    const getIndexUser = (params: UserDataTableState["params"]) => {
        return getIndex(params);
    }


    const updateUser = async (id: string, formData: FormData) => {
        return update(id, formData);
    }


    return {
        getIndexUser,
        updateUser
    };
}


export default useUserService;
