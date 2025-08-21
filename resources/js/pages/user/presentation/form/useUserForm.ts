import { useForm } from "react-hook-form";
import z from "zod";
import { userSchema } from "@/pages/user/presentation/schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import User from "@/pages/user/data/models/User";


interface UseUserFormProps {
    user: User
}


const useUserForm = ({ user }: UseUserFormProps) => {
    const userForm = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: user.getName() || "",
            full_name: user.getFullName() || "",
            email: user.getEmail() || "",
            description: user.getDescription() || "",
            address: user.getAddress() || "",
        }
    });


    return {
        userForm,
    };
}


export default useUserForm;
