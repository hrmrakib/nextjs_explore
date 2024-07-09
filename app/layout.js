import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./compoents/Navbar";

const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto(
//   {
//     weight: ["300", "400", "500", "800", "900"],
//   },
//   { subsets: ["latin"] }
// );

export const metadata = {
  default: "nexjs",
  template: "%s | hello programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
