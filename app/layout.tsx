import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const postNoBillsColombo = localFont({
  src: "./fonts/postnobillscolombo-light.ttf",
  variable: "--font-post-no-bills-colombo",
  weight: "300",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Waldorf Project | Chapter Five",
  description: "Book Chapter Five/Kaihoygo by The Waldorf Project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${postNoBillsColombo.variable} h-full overflow-hidden antialiased`}
    >
      <body className="h-full overflow-hidden flex flex-col overscroll-none">{children}</body>
    </html>
  );
}
