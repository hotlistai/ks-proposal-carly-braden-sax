import type { Metadata } from "next";
import { CarlyBradenProposalPage } from "@/components/knox/carly-braden-proposal-page";

export const metadata: Metadata = {
  title: "Knox Signature - Carly & Braden Sax Feature",
  description:
    "A Knox Signature saxophone-focused experience proposal for Carly and Braden.",
  openGraph: {
    title: "Knox Signature - Carly & Braden Sax Feature",
    description: "Ceremony, cocktail hour, and reception saxophone feature by Ben.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature - Carly & Braden Sax Feature",
    description: "Ceremony, cocktail hour, and reception saxophone feature by Ben.",
    images: ["/ks-social-cover.png"],
  },
};

export default function Page() {
  return (
    <main>
      <CarlyBradenProposalPage />
    </main>
  );
}
