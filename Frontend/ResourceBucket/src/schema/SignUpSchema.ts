import z from 'zod'

export const signUpSchema = z.object({
    email: z
    .string()
    .email({ message: "Invalid email format" }),
    password: z
    .string()
    .min(8, {message: "At least 8 characters long"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 
        {message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'}),
    confirmPassword: z.string(),
    })
   
   .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // specify the path to show the error message      
    })