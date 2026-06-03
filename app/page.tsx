import type { Metadata } from "next";
import { InvestmentGuidePage } from "@/components/investment-guide/investment-guide-page";

export const metadata: Metadata = {
  title: "Knox Signature Wedding Investment Guide",
  description:
    "A public Knox Signature wedding investment guide for cocktail hour, reception, ceremony coverage, and atmosphere review calls.",
  openGraph: {
    title: "Knox Signature Wedding Investment Guide",
    description: "Cocktail hour, reception, ceremony coverage, and atmosphere review call details.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature Wedding Investment Guide",
    description: "Cocktail hour, reception, ceremony coverage, and atmosphere review call details.",
    images: ["/ks-social-cover.png"],
  },
};

export default function Page() {
  return <InvestmentGuidePage />;
}
