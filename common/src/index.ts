import z from "zod";

export const signupInput  = z.object({
    username: z.string(),
    password: z.string().min(6),
    name:z.string()
})

export type SignupInput = z. infer<typeof signupInput>

export const signinInput  = z.object({
    username: z.string(),
    password: z.string().min(6),
})

export type SigninInput = z. infer<typeof signinInput>

export const blogInput  = z.object({
    title: z.string(),
    content: z.string()
})
export type BlogInput = z. infer<typeof blogInput>

export const blogUpdate  = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string()
})
export type BlogUpdate = z. infer<typeof blogUpdate>

