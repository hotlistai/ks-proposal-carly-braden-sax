import Image from "next/image"
import { FadeIn } from "./fade-in"
import { VideoPlayer } from "./video-player"

/* ------------------------------------------------------------------ */
/*  CONFIG — fill in per-client. Empty strings render as [Placeholder] */
/* ------------------------------------------------------------------ */
const config = {
  performerName: "",
  brandName: "",
  contactEmail: "",
  websiteUrl: "",
  packageName: "",
  packagePrice: "",
}

const PERFORMER_NAME = config.performerName || "Ben"
const BRAND_NAME = config.brandName || "Ben Live Saxophone"
const CONTACT_EMAIL = config.contactEmail || "booking@example.com"
const WEBSITE_URL = config.websiteUrl || ""
const PACKAGE_NAME = config.packageName || "Signature Sax Feature"
const PACKAGE_PRICE = config.packagePrice || "$1,150"

const HERO_IMAGE =
  "https://blog.hotlistdigital.com/wp-content/uploads/2026/02/A1B2B3EB-5FEB-4EC6-92DD-526510F2BE85.png"

const PREVIEW_VIDEO =
  "https://blog.hotlistdigital.com/wp-content/uploads/2026/02/copy_7176FC73-AE21-41C0-AD53-24F70BB44072.mov"

const PERFORMANCE_VIDEO =
  "https://blog.hotlistdigital.com/wp-content/uploads/2026/02/copy_F7EA7A53-FECE-4210-92F6-0FD643DF13B1.mov"

/* ------------------------------------------------------------------ */
/*  Shared components matching the proposal visual language            */
/* ------------------------------------------------------------------ */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase mb-5"
      style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
    >
      {children}
    </p>
  )
}

function StyledListItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="relative pl-7 mb-3"
      style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
    >
      <span
        className="absolute left-0 font-light"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        {"\u2014"}
      </span>
      {children}
    </li>
  )
}

function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-10 py-7 px-7"
      style={{
        background: "rgba(255,255,255,0.025)",
        borderLeft: "2px solid rgba(255,255,255,0.15)",
      }}
    >
      <p
        className="italic m-0 font-light"
        style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}
      >
        {children}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  1 — Header                                                          */
/* ------------------------------------------------------------------ */
function Header() {
  return (
    <header>
      <div
        className="w-full border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="px-9 md:px-[72px] py-5 max-w-[1040px] mx-auto">
          <p
            className="text-[10px] font-semibold uppercase"
            style={{ letterSpacing: "0.3em", color: "rgba(255,255,255,0.5)" }}
          >
            {BRAND_NAME}
          </p>
        </div>
      </div>

      <div className="px-9 md:px-[72px] pt-20 pb-10 max-w-[1040px] mx-auto">
        <FadeIn>
          <p
            className="text-[10px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}
          >
            Planner Pricing Guide
          </p>
          <h1
            className="font-extrabold text-balance"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            {`${PERFORMER_NAME} — Live Saxophone`}
          </h1>
        </FadeIn>

        <FadeIn delay={150}>
          <p
            className="mt-6 max-w-[48ch] font-light"
            style={{
              fontSize: "clamp(17px, 1.6vw, 20px)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.65,
            }}
          >
            A featured live performance designed to elevate the room in real time.
          </p>
        </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={300}>
          <div className="mt-16">
            <Image
              src={HERO_IMAGE}
              alt="Ben performing live saxophone at a private event"
              width={1200}
              height={800}
              className="w-full h-auto block"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            />
          </div>
        </FadeIn>

        {/* Private Preview */}
        <FadeIn delay={400}>
          <div className="mt-20">
            <SectionLabel>Private Preview</SectionLabel>
            <VideoPlayer src={PREVIEW_VIDEO} halfWidth />
            <p
              className="mt-4 text-sm font-light"
              style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
            >
              A look at how the evening feels when everything moves as one.
            </p>
          </div>
        </FadeIn>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  2 — The Experience                                                 */
/* ------------------------------------------------------------------ */
function Experience() {
  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Experience</SectionLabel>
        <h3
          className="font-bold mb-5"
          style={{
            fontSize: "clamp(20px, 2.5vw, 24px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          Live saxophone, tailored to the room.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <p
          className="font-light"
          style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
        >
          Ben performs live, roaming the room wireless and reading the energy of
          the crowd in real time. Improvised melodies meet curated moments
          throughout the evening, creating high-impact connections between the
          music and your guests.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <ul className="list-none mt-6 mb-0 p-0">
          <StyledListItem>
            Performance layered directly over your DJ’s live mix
          </StyledListItem>
          <StyledListItem>
            Real-time improvisation tailored to your crowd
          </StyledListItem>
          <StyledListItem>
            Engaging performance within the crowd
          </StyledListItem>
          <StyledListItem>
            Dance floor walk-through moments
          </StyledListItem>
          <StyledListItem>
            Guest interaction and high-energy highlights
          </StyledListItem>
        </ul>
      </FadeIn>

      {/* Performance Video */}
      <FadeIn delay={300}>
        <div className="mt-10">
          <VideoPlayer src={PERFORMANCE_VIDEO} halfWidth />
          <p
            className="mt-4 text-sm font-light"
            style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
          >
            Live performance in action.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  4 — What's Included                                               */
/* ------------------------------------------------------------------ */
function WhatsIncluded() {
  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>{"What\u2019s Included"}</SectionLabel>
        <h3
          className="font-bold mb-5"
          style={{
            fontSize: "clamp(20px, 2.5vw, 24px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          Everything for the performance.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <ul className="list-none my-5 p-0">
          <StyledListItem>
            Featured live saxophone performance by {PERFORMER_NAME}
          </StyledListItem>
          <StyledListItem>
            Wireless sax setup for complete mobility
          </StyledListItem>
          <StyledListItem>
            Direct connection into your DJ’s sound system
          </StyledListItem>
          <StyledListItem>
            Coordination with DJ for a clean, continuous mix
          </StyledListItem>
          <StyledListItem>
            Performance layered directly over the live DJ set
          </StyledListItem>
          <StyledListItem>
            Dance floor walk-through moments + guest interaction highlights
          </StyledListItem>
          <StyledListItem>
            {"Optional: add-on extension / additional set (upon request)"}
          </StyledListItem>
        </ul>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  5 — Requirements                                                   */
/* ------------------------------------------------------------------ */
function Requirements() {
  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Requirements</SectionLabel>
        <h3
          className="font-bold mb-5"
          style={{
            fontSize: "clamp(20px, 2.5vw, 24px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          A few things we need from the DJ team.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <ul className="list-none my-5 p-0">
          <StyledListItem>
            Access to a standard line/input through the DJ or sound system (details confirmed in advance).
          </StyledListItem>
          <StyledListItem>
            A brief arrival window for soundcheck.
          </StyledListItem>
        </ul>
      </FadeIn>

      <FadeIn delay={200}>
        <CalloutBox>
          We coordinate directly with your DJ and planner to keep setup clean,
          quick, and seamless.
        </CalloutBox>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6 — Investment + Terms                                             */
/* ------------------------------------------------------------------ */
function Investment() {
  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Investment</SectionLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <div
          className="mt-4 py-8 px-8 max-w-[640px]"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.35)" }}
          >
            Sax Package
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h3
              className="font-bold m-0"
              style={{
                fontSize: "clamp(22px, 2.4vw, 28px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#ffffff",
              }}
            >
              {PACKAGE_NAME}
            </h3>
            <p
              className="m-0 font-semibold"
              style={{
                fontSize: "clamp(24px, 2.8vw, 32px)",
                letterSpacing: "-0.02em",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              {PACKAGE_PRICE}
            </p>
          </div>

          <ul className="list-none mt-7 mb-0 p-0">
            <StyledListItem>
              Featured live saxophone performance layered over your DJ’s set
            </StyledListItem>
            <StyledListItem>
              Wireless roaming performance with dance floor walk-through moments
            </StyledListItem>
            <StyledListItem>
              Real-time improvisation, guest interaction, and high-energy highlights
            </StyledListItem>
            <StyledListItem>
              Direct DJ/sound-system connection + soundcheck coordination
            </StyledListItem>
          </ul>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <p
          className="mt-6 text-[13px] font-light"
          style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
        >
          Planner pricing guide rate for the featured sax package. Extended time,
          travel, or custom additions can be quoted separately.
        </p>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  7 — Final CTA                                                      */
/* ------------------------------------------------------------------ */
function FinalCta() {
  return (
    <section
      className="px-9 md:px-[72px] py-24 max-w-[1040px] mx-auto text-center"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p
          className="font-light mx-auto text-balance"
          style={{
            fontSize: "clamp(22px, 2.5vw, 30px)",
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.88)",
            maxWidth: "580px",
            letterSpacing: "-0.01em",
          }}
        >
          If the room matters, this is the move.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <p
          className="mt-8 text-[13px] font-light"
          style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em" }}
        >
          Limited dates each season.
        </p>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */
function ProposalFooter() {
  return (
    <footer
      className="px-9 md:px-[72px] pt-14 pb-20 max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p
          className="text-[10px] font-semibold uppercase mb-4"
          style={{ letterSpacing: "4px", color: "rgba(255,255,255,0.35)" }}
        >
          {BRAND_NAME}
        </p>
        <p
          className="font-light mb-6"
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Planner pricing guide for live saxophone performance
        </p>
        <div
          className="text-[14px] flex flex-col gap-1"
          style={{ color: "rgba(255,255,255,0.45)", lineHeight: 2 }}
        >
          <p>Based in Dallas. Available worldwide.</p>
          <p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="footer-link pb-px transition-all duration-200"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          {WEBSITE_URL ? (
            <p>
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link pb-px transition-all duration-200"
              >
                {WEBSITE_URL.replace(/^https?:\/\//, "")}
              </a>
            </p>
          ) : null}
        </div>
        <p
          className="mt-10 text-[12px] font-light"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          This proposal is confidential and intended solely for the named recipient.
        </p>
      </FadeIn>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Full page export                                                   */
/* ------------------------------------------------------------------ */
export function ProposalPage() {
  return (
    <>
      <Header />
      <Experience />
      <WhatsIncluded />
      <Requirements />
      <Investment />
      <FinalCta />
      <ProposalFooter />
    </>
  )
}
