import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "../context/UserContext";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SUP!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Menu />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
