import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: 'Fastgile',
    template: '%s | Fastgile',
  },
  description:
    'Fastgile provides comprehensive educational resources on Agile methodologies, offering courses, tutorials, and expert insights to help you excel in Agile project management and development.',
  authors: [
    {
      name: 'Fastgile',
      url: 'https://www.fastgile.org',
    },
  ],
  abstract:
    'Fastgile is an educational platform dedicated to teaching Agile methodologies. Through expert-led courses, resources, and tools, Fastgile helps individuals and teams quickly grasp and apply Agile principles to enhance project management, team collaboration, and software development.',
  keywords: [
    'Agile methodologies',
    'project management',
    'software development',
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`} suppressHydrationWarning>
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
            <Toaster position="top-right" />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
