import { object, string } from "zod"

export const SignInSchema = object({
  email: string().email("Invalid email"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const RegisterSchema = object({
  name: string().min(1, "Name must be more than 1 character"),
  email: string().email("Invalid email"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  ConfirmPassword: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
}).refine((data) => data.password === data.ConfirmPassword 
    || data.password.length < 8 || data.ConfirmPassword.length < 8, {
    path: ["ConfirmPassword"],
    message: "Passwords dose not match",
})