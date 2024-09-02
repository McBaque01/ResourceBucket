import z from 'zod'

export const signUpSchema = z.object({

    Firstname: z.string().min(2, {message: "At least 2 characters long"}),
    Lastname: z.string().min(2, {message: "At least 2 characters long"}),
    Email: z.string()
    .email({ message: "Invalid email format"}),
    Password: z
    .string()
    .min(8, {message: "At least 8 characters long"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 
        {message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'}),
    ConfirmPassword: z.string(),
    })
   
   .refine((data) => data.Password == data.ConfirmPassword, {
    message: "Passwords don't match",
    path: ["ConfirmPassword"], // specify the path to show the error message      
    })