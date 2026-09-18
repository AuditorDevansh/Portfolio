import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devansh Mishra | Salesforce Administrator",
  description:
    "Portfolio of Devansh Mishra, a Salesforce Administrator and Developer Intern Aspirant.",
  keywords: ["Devansh Mishra", "Salesforce Administrator", "Salesforce Developer", "AWS"],
  authors: [{ name: "Devansh Mishra" }],
  openGraph: {
    title: "Devansh Mishra | Salesforce Administrator",
    description: "Building thoughtful systems on Salesforce, one workflow at a time.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
