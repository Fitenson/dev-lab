import { useForm } from "react-hook-form"
import z from "zod"
import { registerSchema } from "../schema/registerSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import useShowToast from "@/hooks/use-show-toast";


export const useRegisterForm = () => {
    const showToast = useShowToast();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    });


    const submit = (data: z.infer<typeof registerSchema>) => {
        router.post('register', data, {
            onSuccess: () => {
                showToast("Success", "Succesfully register", "success");
            },
            onError: (errors) => {
                Object.keys(errors).forEach((field) => {
                    if(field in form.getValues()) {
                        form.setError(field, {
                            type: 'max',
                            message: errors[field]
                        });
                    }
                });

                showToast('Error', 'Error on create', 'error');
            },
        });
    }


    return {
        ...form,
        submit
    };
}
