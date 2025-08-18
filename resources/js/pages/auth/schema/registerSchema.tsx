import { emailMaxError, emailMinError, nameMaxError, nameMinError, passwordMaxError, passwordMinError } from "@/core/presentation/message/error/form-error";
import { z } from "zod";


export const registerSchema = z.object({
    name: z
    .string()
    .min(1, { error: nameMinError })
    .max(100, { error: nameMaxError }),

    email: z
    .email()
    .min(1, { error: emailMinError })
    .max(100, { error: emailMaxError }),

    password: z
    .string()
    .min(8, { error: passwordMinError })
    .max(100, { error: passwordMaxError }),

    password_confirmation: z
    .string()
    .min(8, { error: "Confirm Password must be at least 8 characters long" })
    .max(100, { error: "Confirm Password too long"})
})
.refine((data) => data.password === data.password_confirmation, {
    error: "Passwords do not match",
    path: ["password_confirmation"],
});
