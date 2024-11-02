import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
