import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProviders"

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "NoteBot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>
          </ThemeProvider>
      </body>
    </html>
  );
}
