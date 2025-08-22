import useUserRepository from "@/pages/user/data/repository/useUserRepository";
import { UserDataTableState } from "@/pages/user/presentation/redux/userDataTableSlice";
import User from "../../data/models/User";
import { UserFormValues } from "../../presentation/form/useUserForm";


const useUserService = () => {
    const { getIndex, store, update, remove } = useUserRepository();

    const getIndexUser = (params: UserDataTableState["params"]) => {
        return getIndex(params);
    }


    const createUser = ({ formValues } : { formValues: UserFormValues }) => {
        const user = new User(formValues);

        return store(user);
    }


    const updateUser = async ({ user, formValues }: {
        user: User,
        formValues: UserFormValues
    }) => {
        console.log('FormValue', formValues.description);
        console.log('User', user.getDescription());

        user.setName(formValues.name);
        user.setFullName(formValues.full_name ?? "");
        user.setEmail(formValues.email);
        user.setDescription(formValues.description ?? "");
        user.setAddress(formValues.address ?? "");
        user.setGender(formValues.gender ?? "");

        return update(user);
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
