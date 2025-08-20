import useUserRepository from "@/pages/user/data/repository/useUserRepository";
import { UserDataTableState } from "../redux/userDataTableSlice";


const useUserService = () => {
    const { getIndex } = useUserRepository();

    const getIndexUser = (params: UserDataTableState["params"]) => {
        return getIndex(params);
    }


    return {
        getIndexUser
    };
}


export default useUserService;
