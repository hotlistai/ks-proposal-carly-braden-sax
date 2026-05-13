import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carly-braden-sax.knoxsignature.com"),
  title: "Knox Signature - Carly & Braden Sax Feature",
  description: "A client-facing Knox Signature saxophone feature proposal for Carly and Braden.",
  icons: {
    icon: "/ks-favicon.png",
    shortcut: "/ks-favicon.png",
    apple: "/ks-favicon.png",
  },
  openGraph: {
    title: "Knox Signature - Carly & Braden Sax Feature",
    description: "A client-facing Knox Signature saxophone feature proposal for Carly and Braden.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature - Carly & Braden Sax Feature",
    description: "A client-facing Knox Signature saxophone feature proposal for Carly and Braden.",
    images: ["/ks-social-cover.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
