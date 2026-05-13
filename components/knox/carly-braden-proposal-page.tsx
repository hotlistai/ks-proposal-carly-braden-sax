"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";
import { VideoPlayer } from "./video-player";

const config = {
  coupleName: "Carly & Braden",
  eventDate: "December 4, 2026",
  venue: "The Reserve at Marty B's",
  totalInvestment: "$2,750",
  deposit: "A 50% deposit secures the date",
  balanceDue: "The remaining balance is due 30 days prior to the event",
};

const BANNER_IMAGE = "https://www.knoxsignature.com/images/knox-press-banner.png";
const PREVIEW_VIDEO = "https://blog.hotlistdigital.com/wp-content/uploads/2026/01/copy_BF7A718B-4926-4B53-AD03-6D3BC8DB232F_2.mp4";
const PREVIEW_VIDEO_POSTER = "/videos/carly-braden-sax-dive-poster.jpg";
const SECOND_VIDEO = "https://blog.hotlistdigital.com/wp-content/uploads/2026/05/WeddingReception-1.mov";

const snapshotCards = [
  { label: "Date", value: config.eventDate },
  { label: "Venue", value: config.venue },
  { label: "Experience", value: "Ceremony + Cocktail Hour + Reception" },
  { label: "Format", value: "Live roaming saxophone feature by Ben" },
];

const ceremonyItems = ["Live saxophone performance for select ceremony moments"];

const cocktailItems = [
  "Live roaming saxophone performance",
  "Warm, social atmosphere as guests arrive and mingle",
  "Real-time improvisation layered over curated music",
  "Wireless mobility throughout the cocktail space",
];

const receptionItems = [
  "Live saxophone layered directly over your DJ's mix",
  "Dance floor walk-through moments",
  "Guest interaction and high-energy highlights",
  "Real-time improvisation tailored to the room",
  "A more interactive, energetic atmosphere as the night builds",
];

const includedItems = [
  "Featured live saxophone performance by Ben",
  "Wireless saxophone setup for complete mobility",
  "Direct DJ/sound-system connection",
  "Coordination with DJ for a clean, continuous mix",
  "Guest interaction highlights and dance floor moments",
];

const requirementItems = [
  "Access to a standard line/input through the DJ or sound system",
  "A brief arrival window for soundcheck",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-5 text-[11px] font-semibold uppercase"
      style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
    >
      {children}
    </p>
  );
}

function StyledListItem({ children }: { children: ReactNode }) {
  return (
    <li className="relative mb-3 pl-7" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
      <span className="absolute left-0 font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
        {"\u2014"}
      </span>
      {children}
    </li>
  );
}

function Header() {
  return (
    <header>
      <div className="w-full">
        <Image
          src={BANNER_IMAGE}
          alt="Knox Signature"
          width={1920}
          height={600}
          priority
          className="block h-auto w-full"
        />
      </div>

      <div className="mx-auto max-w-[1040px] px-9 pb-10 pt-20 md:px-[72px]">
        <FadeIn>
          <p
            className="mb-4 text-[10px] font-semibold uppercase"
            style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}
          >
            Wedding Proposal
          </p>
          <h1
            className="text-balance font-extrabold"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            The Knox Signature Sax Feature Experience
          </h1>
          <p
            className="mt-4 text-[11px] font-semibold uppercase"
            style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.5)" }}
          >
            FOR {config.coupleName.toUpperCase()}
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div
            className="mt-6 max-w-[62ch] space-y-5 font-light"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            <p>Thank you for the conversation.</p>
            <p>
              We loved hearing more about your wedding celebration at The Reserve at Marty B&apos;s on{" "}
              {config.eventDate}, and put together the following saxophone-focused experience for your day.
            </p>
            <p>Below is the proposed structure for your Knox Signature Sax Feature experience.</p>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="mt-12">
            <SectionLabel>Private Preview</SectionLabel>
            <VideoPlayer src={PREVIEW_VIDEO} poster={PREVIEW_VIDEO_POSTER} halfWidth className="max-w-[520px]" />
          </div>
        </FadeIn>
      </div>
    </header>
  );
}

function EventSnapshot() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Event Snapshot</SectionLabel>
      </FadeIn>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {snapshotCards.map((card, index) => (
          <FadeIn key={card.label} delay={index * 75}>
            <div
              className="h-full px-6 py-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase"
                style={{ letterSpacing: "0.24em", color: "rgba(255,255,255,0.35)" }}
              >
                {card.label}
              </p>
              <p
                className="mt-4 font-medium"
                style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.55, fontSize: "16px" }}
              >
                {card.value}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Experience</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Ceremony, Cocktail Hour & Reception Saxophone Feature
        </h2>
        <p className="mt-4 text-[14px] uppercase" style={{ letterSpacing: "0.24em", color: "rgba(255,255,255,0.42)" }}>
          {config.venue}
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <p className="mt-8 max-w-[66ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          Ben performs live throughout the evening, roaming the room wirelessly and shaping the energy of the crowd in
          real time.
        </p>
      </FadeIn>

      <FadeIn delay={225}>
        <p className="mt-5 max-w-[66ch] font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          The experience is designed to feel elevated, engaging, and interactive while still staying tasteful and
          intentional throughout the day.
        </p>
      </FadeIn>

      <FadeIn delay={275}>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="px-7 py-7" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <SectionLabel>Ceremony</SectionLabel>
            <ul className="m-0 list-none p-0">
              {ceremonyItems.map((item) => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
            </ul>
          </div>
          <div className="px-7 py-7" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <SectionLabel>Cocktail Hour</SectionLabel>
            <ul className="m-0 list-none p-0">
              {cocktailItems.map((item) => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
            </ul>
          </div>
          <div className="px-7 py-7" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <SectionLabel>Reception</SectionLabel>
            <ul className="m-0 list-none p-0">
              {receptionItems.map((item) => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function IncludedSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>What&apos;s Included</SectionLabel>
        <ul className="m-0 max-w-[66ch] list-none p-0">
          {includedItems.map((item) => (
            <StyledListItem key={item}>{item}</StyledListItem>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}

function ReceptionPreviewSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Reception Preview</SectionLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <VideoPlayer src={SECOND_VIDEO} halfWidth className="max-w-[520px]" />
      </FadeIn>
    </section>
  );
}

function RequirementsSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Requirements</SectionLabel>
        <ul className="m-0 max-w-[66ch] list-none p-0">
          {requirementItems.map((item) => (
            <StyledListItem key={item}>{item}</StyledListItem>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={150}>
        <p className="mt-8 max-w-[66ch] font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          We coordinate directly with your DJ and planner to keep setup clean, quick, and seamless.
        </p>
      </FadeIn>
    </section>
  );
}

function InvestmentSection() {
  return (
    <section
      id="investment"
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Sax Feature Experience</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Ceremony + Cocktail Hour + Reception
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
        <FadeIn delay={175}>
          <div
            className="h-full px-8 py-8"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.35)" }}
            >
              Total Investment
            </p>
            <p
              className="mt-4 m-0 font-semibold"
              style={{ fontSize: "clamp(42px, 6vw, 72px)", letterSpacing: "-0.04em", lineHeight: 1, color: "#ffffff" }}
            >
              {config.totalInvestment}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div
            className="h-full px-8 py-8"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.35)" }}
            >
              Terms
            </p>
            <dl className="mt-6 flex flex-col gap-5">
              <div>
                <dt className="text-[13px] font-medium uppercase" style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}>
                  Deposit
                </dt>
                <dd className="mt-2 m-0 font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                  {config.deposit}
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-medium uppercase" style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}>
                  Balance
                </dt>
                <dd className="mt-2 m-0 font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                  {config.balanceDue}
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={300}>
        <p className="mt-10 max-w-[68ch] italic font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          We approach every event with the same goal: to create an atmosphere that feels elevated, memorable, and
          engaging for both you and your guests.
        </p>
      </FadeIn>
    </section>
  );
}

function ProposalFooter() {
  return (
    <footer
      className="mx-auto max-w-[1040px] px-9 pb-20 pt-14 md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p className="mb-4 text-[10px] font-semibold uppercase" style={{ letterSpacing: "4px", color: "rgba(255,255,255,0.35)" }}>
          Knox Signature
        </p>
        <p className="mb-6 font-light" style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>
          Wedding atmospheres built with intention, restraint, and energy.
        </p>
        <div className="flex flex-col gap-1 text-[14px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 2 }}>
          <p>Based in Dallas. Available worldwide.</p>
          <p>
            <a href="mailto:hello@knoxsignature.com" className="footer-link pb-px transition-all duration-200">
              hello@knoxsignature.com
            </a>
          </p>
          <p>
            <a
              href="https://knoxsignature.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link pb-px transition-all duration-200"
            >
              knoxsignature.com
            </a>
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}

export function CarlyBradenProposalPage() {
  return (
    <>
      <Header />
      <EventSnapshot />
      <ExperienceSection />
      <ReceptionPreviewSection />
      <IncludedSection />
      <RequirementsSection />
      <InvestmentSection />
      <ProposalFooter />
    </>
  );
}
