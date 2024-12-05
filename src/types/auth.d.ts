import * as z from "zod";

interface ICredentials{
    email:string,
    password:string
}

// Infer the type from the schema
type LoginFormValues = z.infer<typeof loginSchema>;
