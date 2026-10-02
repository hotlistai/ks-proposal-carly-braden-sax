import type { Metadata } from "next";
import { ErynHaydenProposalPage } from "@/components/knox/eryn-hayden-proposal-page";

export const metadata: Metadata = {
  title: "Knox Signature | Mallory & Ethan",
  description:
    "A Knox Signature wedding proposal for Mallory and Ethan at Park City Club.",
  openGraph: {
    title: "Knox Signature | Mallory & Ethan",
    description: "Cocktail hour and reception atmosphere designed for Mallory and Ethan.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature | Mallory & Ethan",
    description: "Cocktail hour and reception atmosphere designed for Mallory and Ethan.",
    images: ["/ks-social-cover.png"],
  },
};

export default function Page() {
  return <ErynHaydenProposalPage />;
}
