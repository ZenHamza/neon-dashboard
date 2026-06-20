import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neon Dashboard",
  description: "Real-time analytics dashboard with AI-powered insights",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
