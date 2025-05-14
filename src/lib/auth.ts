import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
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
