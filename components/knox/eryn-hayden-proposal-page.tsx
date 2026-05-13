import Image from "next/image";
import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";
import { VideoPlayer } from "./video-player";

const config = {
  coupleName: "Eryn & Hayden",
  eventDate: "January 1, 2027",
  venue: "The Laurel",
  location: "Grapevine, Texas",
  totalInvestment: "$6,500",
  deposit: "A 50% deposit secures the date",
  balanceDue: "The remaining balance is due 30 days prior to the event",
};

const BANNER_IMAGE = "https://www.knoxsignature.com/images/knox-press-banner.png";
const PREVIEW_VIDEO = "/videos/eryn-hayden-preview.mp4";
const PREVIEW_VIDEO_POSTER = "/videos/eryn-hayden-preview-poster.jpg";
const MIDDLE_VIDEO = "/videos/eryn-hayden-live-set-audiofix-v2.mp4";
const MIDDLE_VIDEO_POSTER = "/videos/eryn-hayden-live-set-poster.jpg";
const PRODUCTION_IMAGE =
  "https://raw.githubusercontent.com/hotlistai/anna-max-proposal/main/assets/Images/knox-signature-set-1.png";

const detailCards = [
  { label: "Date", value: config.eventDate },
  { label: "Cocktail Hour", value: "Live piano + saxophone performance" },
  { label: "Reception", value: `${config.venue}, ${config.location}` },
  { label: "Performance", value: "DJ-led set with live saxophone integration" },
];

const ceremonyItems = [
  "Live piano and saxophone performance",
  "A welcoming, elevated atmosphere as guests arrive",
  "Thoughtful live music designed to feel social, memorable, and refined",
  "Sound coverage tailored to the cocktail space",
];

const cocktailItems = [
  "The evening begins with live performance during cocktail hour",
  "A natural transition into reception keeps the energy cohesive",
  "Each moment is designed to feel intentional, elevated, and seamless",
];

const dinnerItems = [
  "DJ-led music selection that supports conversation and flow",
  "Emcee coverage for introductions, announcements, and key moments",
  "Seamless handling of toasts using wireless microphones",
  "Select live accents to complement important moments throughout the evening",
];

const danceItems = [
  "DJ-led set with live saxophone integration",
  "Energy builds intentionally throughout the night",
  "A packed dance floor that still feels polished and elevated",
];

const productionItems = [
  "Minimal white DJ command center",
  "Premium column-array sound system",
  "Architectural atmospheric lighting",
  "Wireless microphones for speeches and announcements",
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

function CalloutBox({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-10 px-7 py-7"
      style={{
        background: "rgba(255,255,255,0.025)",
        borderLeft: "2px solid rgba(255,255,255,0.15)",
      }}
    >
      <p className="m-0 italic font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
        {children}
      </p>
    </div>
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
              We loved hearing more about your wedding celebration at {config.venue} in {config.location} on{" "}
              {config.eventDate}, and are excited to design an atmosphere that carries the evening naturally from
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
        {detailCards.map((card, index) => (
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

function ArrivalSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Arrival</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Cocktail Hour Atmosphere
        </h2>
      </FadeIn>

      <FadeIn delay={175}>
        <p className="mt-8 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          The evening begins with live performance during cocktail hour, followed by a reception experience that builds
          naturally in energy throughout the night.
        </p>
      </FadeIn>

      <FadeIn delay={250}>
        <div className="mt-10">
          <SectionLabel>Cocktail Hour</SectionLabel>
          <ul className="my-0 max-w-[64ch] list-none p-0">
            {ceremonyItems.map((item) => (
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
        <SectionLabel>The Celebration</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Reception Experience
        </h2>
      </FadeIn>

      <FadeIn delay={175}>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            className="h-full px-7 py-7"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <SectionLabel>Dinner & Key Moments</SectionLabel>
            <ul className="my-0 list-none p-0">
              {dinnerItems.map((item) => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
            </ul>
          </div>
          <div
            className="h-full px-7 py-7"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <SectionLabel>Dance</SectionLabel>
            <ul className="my-0 list-none p-0">
              {danceItems.map((item) => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={250}>
        <div className="mt-12">
          <p className="max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
            As the evening unfolds, the experience transitions into a DJ-led reception with live saxophone integration.
          </p>
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
          Everything is designed to look as polished as it sounds and to complement the venue throughout the evening.
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

      <FadeIn delay={125}>
        <CalloutBox>
          These planning pieces help ensure the experience feels smooth, intentional, and fully aligned with the flow
          of the evening.
        </CalloutBox>
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
          Coverage includes cocktail hour and reception.
        </p>
        <p className="mt-5 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          This structure allows the experience to move seamlessly from one part of the day to the next with intention
          and continuity.
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
      <EventSnapshot />
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
