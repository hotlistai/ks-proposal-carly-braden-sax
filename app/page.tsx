import type { Metadata } from "next";
import { InvestmentGuidePage } from "@/components/investment-guide/investment-guide-page";

export const metadata: Metadata = {
  title: "Knox Signature Wedding Investment Guide",
  description:
    "Explore KNOX Signature wedding starting prices, cocktail hour and reception coverage, ceremony sound, violin, and live drum enhancements.",
  openGraph: {
    title: "Knox Signature Wedding Investment Guide",
    description: "Wedding starting prices for Signature, ceremony coverage, violin, and live drums.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature Wedding Investment Guide",
    description: "Wedding starting prices for Signature, ceremony coverage, violin, and live drums.",
    images: ["/ks-social-cover.png"],
  },
};

export default function Page() {
  return <InvestmentGuidePage />;
}
