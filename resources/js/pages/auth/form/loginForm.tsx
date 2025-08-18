import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/loginSchema";
import useShowToast from "@/hooks/use-show-toast";
import { router } from "@inertiajs/react";


export const useLoginForm = () => {
    const showToast = useShowToast();


    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });


    const submit = (data: z.infer<typeof loginSchema>) => {
        router.post("/login", data, {
            onSuccess: () => {
                showToast("Success", "Login Successfully", "success");
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
            }
        });
    }


    return {
        ...form,
        submit
    };
}
