import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MdEmail } from "react-icons/md";
import { BiCopyright, BiPhone } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ezeani Chucks Profile",
  description: "Fullstack commercial mobile and web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* footer */}
        <div className="flex flex-col gap-4 items-center justify-center text-gray-400 bg-black min-h-20 w-screen p-5">
          <h3 className="flex gap-2 items-center">
            Ezeani Chukwudi <BiCopyright className="text-sm -mr-1" />{" "}
            {new Date().getFullYear()}
          </h3>
          <h5 className="flex items-center gap-2 text-sm">
            <MdEmail className="text-xl" />
            {"concord_chucks2@yahoo.com"}
          </h5>
          <h5 className="flex items-center gap-2 text-sm">
            <BiPhone className="text-xl" />
            {"+2348067268692"}
          </h5>
        </div>
      </body>
    </html>
  );
}
