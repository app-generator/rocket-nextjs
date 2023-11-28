import "./globals.css";
import type { Metadata } from "next";
import { NextAuthProvider } from "../Provider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Rocket NextJs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
