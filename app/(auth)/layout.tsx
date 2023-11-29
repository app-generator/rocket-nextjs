import { NextAuthProvider } from "../Provider";
import Header from "@/components/Header";
import "./globals.css";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer />
      </body>
    </html>
  );
}
