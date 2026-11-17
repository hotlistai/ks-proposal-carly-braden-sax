import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./wedding-guide.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://details.knoxsignature.com"),
  title: "Knox Signature Wedding Investment Guide",
  description:
    "Explore KNOX Signature wedding starting prices, cocktail hour and reception coverage, ceremony sound, violin, and live drum enhancements.",
  icons: {
    icon: "/ks-favicon.png",
    shortcut: "/ks-favicon.png",
    apple: "/ks-favicon.png",
  },
  openGraph: {
    title: "Knox Signature Wedding Investment Guide",
    description:
      "Explore KNOX Signature wedding starting prices, cocktail hour and reception coverage, ceremony sound, violin, and live drum enhancements.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature Wedding Investment Guide",
    description:
      "Explore KNOX Signature wedding starting prices, cocktail hour and reception coverage, ceremony sound, violin, and live drum enhancements.",
    images: ["/ks-social-cover.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
