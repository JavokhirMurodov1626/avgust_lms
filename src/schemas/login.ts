import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().min(9, "Telefon raqamni kiriting"),
  password: z.string(),
});
