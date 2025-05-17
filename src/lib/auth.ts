import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/drizzle/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: {
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
        console.log(credentials, "credentials");

        // Example authentication logic (replace with real DB check)
        const { email, password } = credentials ?? {};

        if (email === "admin@example.com" && password === "admin123") {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
          };
        }

        return null; // Return null if authentication fails
      },
    }),
  ],
});
