import type { Metadata } from "next";
import { Great_Vibes, Poppins } from "next/font/google";
import "./globals.css";

const scriptFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const bodyFont = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feliz Aniversário, Ellen Mayanne ❤️",
  description:
    "Uma carta de amor em forma de site, feita especialmente para Ellen Mayanne.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${scriptFont.variable} ${bodyFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
