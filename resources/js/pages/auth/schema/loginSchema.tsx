import { emailMaxError, emailMinError, passwordMaxError, passwordMinError } from "@/core/presentation/message/error/form-error";
import { z } from "zod";


export const loginSchema = z.object({
    email: z
    .email()
    .min(1, { error: emailMinError })
    .max(100, { error: emailMaxError }),

    password: z
    .string()
    .min(8, { error: passwordMinError })
    .max(100, { error: passwordMaxError }),
})
