import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: '/icon.png', 
  },
  title: "Charvi Shukla",
  description: "Charvi's Portfolio Website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
