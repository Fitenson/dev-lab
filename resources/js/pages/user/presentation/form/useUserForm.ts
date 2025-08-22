import { useForm } from "react-hook-form";
import z from "zod";
import { userSchema } from "@/pages/user/presentation/schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import User from "@/pages/user/data/models/User";


interface UseUserFormProps {
    user: User
}

export type UserFormValues = z.infer<typeof userSchema>;

const useUserForm = ({ user }: UseUserFormProps) => {
    const userForm = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: user.getName(),
            full_name: user.getFullName(),
            email: user.getEmail(),
            description: user.getDescription(),
            address: user.getAddress(),
            gender: user.getGender()
        }
    });


    const setUserFormError = (error: unknown) => {
        const errors = error?.response?.data?.errors ?? {};

        if (Object.keys(errors).length > 0) {
            Object.keys(errors).forEach((field) => {
                // Remove "user." prefix if it exists
                const normalizedField = field.replace(/^user\./, "");
                if (normalizedField in userForm.getValues()) {
                    userForm.setError(normalizedField, {
                        type: "server",
                        message: errors[field][0] ?? "Invalid value", // Take first error message
                    });
                }
            });
        }
    }


    return {
        userForm,
        setUserFormError
    };
}


export default useUserForm;
