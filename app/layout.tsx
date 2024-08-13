import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const robRoboto = Roboto({ subsets: ["latin"], weight:'400' });

export const metadata: Metadata = {
  title: "Switch Base",
  description: "Fiber DB Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robRoboto.className}>{children}
        <ToastContainer/>
      </body>
    </html>
  );
}
