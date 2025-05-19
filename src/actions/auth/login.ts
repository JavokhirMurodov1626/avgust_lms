"use server";
import { signIn } from "@/lib/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async ({
  phone,
  password,
}: {
  phone: string;
  password: string;
}) => {
  try {
    await signIn("credentials", {
      phone,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return { error: "Parol yoki telefon raqam xato" };
        default:
          return {
            error: "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring",
          };
      }
    }
    throw e;
  }
};
