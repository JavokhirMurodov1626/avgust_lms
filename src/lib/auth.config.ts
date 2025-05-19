import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "@/schemas/login";
import bcryptjs from "bcryptjs";
import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { users } from "@/drizzle/schema/user";

export default {
  providers: [
    Credentials({
      credentials: {
        phone: {
          type: "text",
          label: "Telefon raqam",
          placeholder: "Kiriting",
        },
        password: {
          type: "password",
          label: "Parol",
          placeholder: "Kiriting",
        },
      },

      authorize: async (credentials) => {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { phone, password } = validatedFields.data;

          const existingUser = await db.query.users.findFirst({
            where: eq(users.phone, phone),
          });

          if (!existingUser) {
            // throw new Error("Bunday foydalanuvchi topilmadi");
            return null;
          }
          const isPasswordValid = bcryptjs.compare(
            password,
            existingUser.password
          );

          if (!isPasswordValid) {
            // throw new Error("Parol xato");
            return null;
          }
          return existingUser;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
