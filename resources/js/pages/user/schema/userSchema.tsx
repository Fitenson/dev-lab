import { addressMaxError, descriptionMaxError, emailInvalidError, emailMaxError } from "@/core/presentation/message/error/form-error";
import { z } from "zod";


export const userSchema = z.object({
    name: z.string().max(100, {
        error: "Name cannot exceed 100 characters"
    }).min(1, {
        error: "This field is required"
    }),

    full_name: z.string().max(100, {
        error: "Full Name cannot exceed 100 characters"
    }).optional(),

    email: z.email({
        error: emailInvalidError
    }).max(100, {
        error: emailMaxError
    }),

    description: z.string().max(255, {
        error: descriptionMaxError
    }).optional(),

    address: z.string().max(255, {
        error: addressMaxError
    }).optional(),
});


export type UserModel = z.infer<typeof userSchema>;
