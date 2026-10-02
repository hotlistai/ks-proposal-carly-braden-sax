import Image from "next/image";
import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";
import { VideoPlayer } from "./video-player";

const config = {
  coupleName: "Mallory & Ethan",
  eventDate: "September 18, 2027",
  venue: "Park City Club",
  totalInvestment: "$5,500",
  deposit: "A 50% deposit secures the date",
  balanceDue: "The remaining balance is due 30 days prior to the event",
};

const BANNER_IMAGE = "https://www.knoxsignature.com/images/knox-press-banner.png";
const PREVIEW_VIDEO = "/videos/mallory-ethan-preview.mp4";
const PREVIEW_VIDEO_POSTER = "/videos/mallory-ethan-preview-poster.jpg";
const MIDDLE_VIDEO = "/videos/mallory-ethan-wedding.mp4";
const MIDDLE_VIDEO_POSTER = "/videos/mallory-ethan-wedding-poster.jpg";
const PRODUCTION_IMAGE = "/WeddingFlowers.png";

const cocktailItems = ["Live grand piano + saxophone", "Curated music direction", "Dedicated sound coverage"];

const receptionItems = [
  "DJ + live saxophone",
  "Emcee coverage for introductions, announcements, and key moments",
  "Wireless microphones for speeches and toasts",
  "Interactive roaming saxophone moments with guests",
  "Music direction that builds naturally with the room",
];

const productionItems = [
  "Minimal white DJ command center",
  "Premium column-array sound system",
  "Architectural atmospheric lighting",
  "Wireless microphones",
  "Digital mixing for clarity and control",
];

const planningItems = [
  "Site visit prior to the wedding day",
  "Music planning session as the date gets closer",
  "Access to the Knox Signature Planning Portal",
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
            The Knox Signature Wedding Experience
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
              We loved hearing more about your wedding celebration at {config.venue} on {config.eventDate}, and are
              excited to create an experience that carries naturally from
              cocktail hour into the reception.
            </p>
            <p>Below is the proposed structure for your Knox Signature experience.</p>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="mt-12">
            <SectionLabel>Private Preview</SectionLabel>
            <VideoPlayer src={PREVIEW_VIDEO} poster={PREVIEW_VIDEO_POSTER} className="max-w-[760px]" />
          </div>
        </FadeIn>
      </div>
    </header>
  );
}

function ArrivalSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Build</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Cocktail Hour & Reception Experience
        </h2>
      </FadeIn>

      <FadeIn delay={175}>
        <p className="mt-8 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          {config.venue}
        </p>
      </FadeIn>

      <FadeIn delay={250}>
        <div className="mt-10">
          <SectionLabel>Cocktail Hour</SectionLabel>
          <ul className="my-0 max-w-[64ch] list-none p-0">
            {cocktailItems.map((item) => (
              <StyledListItem key={item}>{item}</StyledListItem>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}

function MiddleVideoSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <VideoPlayer src={MIDDLE_VIDEO} poster={MIDDLE_VIDEO_POSTER} halfWidth className="max-w-[560px]" />
      </FadeIn>
    </section>
  );
}

function ReceptionSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Reception</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Reception
        </h2>
      </FadeIn>

      <FadeIn delay={175}>
        <p className="mt-8 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          The reception begins with thoughtful music direction and live saxophone woven throughout the room before the
          energy naturally builds toward dancing.
        </p>
      </FadeIn>

      <FadeIn delay={250}>
        <div className="mt-10">
          <div
            className="max-w-[64ch] px-7 py-7"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <ul className="my-0 list-none p-0">
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

function ProductionSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Production & Design</SectionLabel>
        <ul className="my-0 max-w-[64ch] list-none p-0">
          {productionItems.map((item) => (
            <StyledListItem key={item}>{item}</StyledListItem>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={125}>
        <p className="mt-10 max-w-[66ch] font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          Everything is designed to look as polished as it sounds and to complement the venue rather than compete with it.
        </p>
      </FadeIn>

      <FadeIn delay={225}>
        <div className="mt-14">
          <Image
            src={PRODUCTION_IMAGE}
            alt="Knox Signature wedding setup with white DJ command center and architectural lighting"
            width={1536}
            height={1024}
            className="block h-auto w-full"
            style={{ border: "1px solid rgba(255,255,255,0.06)", opacity: 0.96 }}
          />
        </div>
      </FadeIn>
    </section>
  );
}

function PlanningSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Planning & Coordination</SectionLabel>
        <ul className="my-0 max-w-[64ch] list-none p-0">
          {planningItems.map((item) => (
            <StyledListItem key={item}>{item}</StyledListItem>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}

function TimingSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Timing</SectionLabel>
        <p className="max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          Cocktail hour and up to 4 hours of reception coverage.
        </p>
      </FadeIn>
    </section>
  );
}

function TotalInvestmentSection() {
  return (
    <section
      id="investment"
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Full Atmosphere</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Cocktail Hour + Reception Experience
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
              className="mt-5 m-0 font-semibold"
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
                <dt
                  className="text-[13px] font-medium uppercase"
                  style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}
                >
                  Deposit
                </dt>
                <dd className="mt-2 m-0 font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                  {config.deposit}
                </dd>
              </div>
              <div>
                <dt
                  className="text-[13px] font-medium uppercase"
                  style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}
                >
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
        <p
          className="mb-4 text-[10px] font-semibold uppercase"
          style={{ letterSpacing: "4px", color: "rgba(255,255,255,0.35)" }}
        >
          Knox Signature
        </p>
        <p className="mb-6 font-light" style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>
          We approach every wedding with the same goal: to create an atmosphere your guests remember long after the
          night ends.
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
        <p className="mt-10 text-[12px] font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
          This proposal is confidential and intended solely for {config.coupleName}.
        </p>
      </FadeIn>
    </footer>
  );
}

export function ErynHaydenProposalPage() {
  return (
    <>
      <Header />
      <ArrivalSection />
      <MiddleVideoSection />
      <ReceptionSection />
      <ProductionSection />
      <PlanningSection />
      <TimingSection />
      <TotalInvestmentSection />
      <ProposalFooter />
    </>
  );
}
