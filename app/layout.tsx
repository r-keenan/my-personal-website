"use client";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <Header styleConditional={"opacity-90 bg-blur-sm"} router={router} />
        {children}
        <Footer router={router} />
      </body>
    </html>
  );
}
