import type { Metadata } from "next";
import 'swiper/css';
import "./globals.css";

export const metadata: Metadata = {
  title: "Avgust LMS",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
