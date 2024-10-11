import { Work_Sans } from "next/font/google";
import "./globals.css";

// Load Work Sans font with specific weights (e.g., 400 for normal, 700 for bold)
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
