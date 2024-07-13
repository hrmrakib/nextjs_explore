import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/compoents/Navbar";
import AuthProvider from "./AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  default: "nexjs",
  template: "%s | hello programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
