import type { Metadata } from "next";
import NavigationPill from "@/components/NavigationPill";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Devansh Mishra | Salesforce Trailblazer",
    template: "%s | Devansh Mishra",
  },
  description:
    "Salesforce Admin & Developer, Agentforce Champion, Trailhead Ranger, and community builder.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavigationPill />
        <div className="site-frame">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
