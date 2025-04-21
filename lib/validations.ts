import { z } from "zod";

export const signUpSchema = z.object({
  fullname: z.string().min(3),
});
