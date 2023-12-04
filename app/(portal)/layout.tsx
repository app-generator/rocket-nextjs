import { NextAuthProvider } from "../Provider";
import NavbarSidebarLayout from "./NavbarSidebarLayout";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <NavbarSidebarLayout>
            {children}
          </NavbarSidebarLayout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
