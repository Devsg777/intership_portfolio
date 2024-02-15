import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";

export const metadata = {
  title: "Dev",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex  ">
          <Header className="h-screen w-40" />
          <div className="w-full bg-image-blue">{children}</div>
        </div>
      </body>
    </html>
  );
}
