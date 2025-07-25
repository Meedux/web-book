import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./lib/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Book App",
  description: "Interactive online book application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
