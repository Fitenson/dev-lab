import { useRequest } from "@/lib/useRequest";
import { UserDataTableState } from "../../redux/userDataTableSlice";


const useUserRepository = () => {
    const { request } =  useRequest();

    const getIndex = async (params: UserDataTableState["params"]) => {
        const response = await request.post("/user/index", params);
        return response.data;
    }


    const update = async (id: string, formData: FormData) => {
        const response = await request.post(`/user/update/${id}`, formData);
        return response.data;
    }


    return {
        getIndex,
        update
    };
}


export default useUserRepository;
