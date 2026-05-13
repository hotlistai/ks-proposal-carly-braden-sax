import Image from "next/image"
import { FadeIn } from "./fade-in"
import { VideoPlayer } from "./video-player"

/* ------------------------------------------------------------------ */
/*  CONFIG — fill in per-client. Empty strings render as [Placeholder] */
/* ------------------------------------------------------------------ */
const config = {
  clientName: "",
  eventDate: "",
  venue: "",
  plannerName: "",
  setTimes: "",
  investment: "",
  retainer: "",
  balanceDue: "",
  overtime: "",
  callTextLink: "",
}

function p(value: string, fallback: string) {
  return value || `[${fallback}]`
}

const BANNER_IMAGE =
  "https://www.knoxsignature.com/images/knox-press-banner.png"

const HERO_IMAGE =
  "https://blog.hotlistdigital.com/wp-content/uploads/2026/02/A1B2B3EB-5FEB-4EC6-92DD-526510F2BE85.png"

const PREVIEW_VIDEO =
  "https://blog.hotlistdigital.com/wp-content/uploads/2026/02/copy_7176FC73-AE21-41C0-AD53-24F70BB44072.mov"

const PERFORMANCE_VIDEO =
  "https://blog.hotlistdigital.com/wp-content/uploads/2026/02/copy_F7EA7A53-FECE-4210-92F6-0FD643DF13B1.mov"

/* ------------------------------------------------------------------ */
/*  Shared components matching Knox brand language                     */
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
/*  1 — Header with Knox Banner                                        */
/* ------------------------------------------------------------------ */
function Header() {
  return (
    <header>
      {/* Knox Banner */}
      <div className="w-full">
        <Image
          src={BANNER_IMAGE}
          alt="Knox Signature"
          width={1920}
          height={600}
          priority
          className="w-full h-auto block"
        />
      </div>

      <div className="px-9 md:px-[72px] pt-20 pb-10 max-w-[1040px] mx-auto">
        <FadeIn>
          <p
            className="text-[10px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}
          >
            Event Proposal
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
            {"Ben \u2014 Live Saxophone"}
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

        <FadeIn delay={300}>
          <div className="mt-10">
            <a
              href={config.callTextLink || "mailto:hello@knoxsignature.com?subject=Knox%20Signature%20%E2%80%94%20Schedule%20a%20Call"}
              className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-semibold tracking-wide transition-all duration-200 hover:opacity-80"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Call / Text
            </a>
          </div>
        </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={350}>
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
        <FadeIn delay={450}>
          <div className="mt-20">
            <SectionLabel>Private Preview</SectionLabel>
            <VideoPlayer src={PREVIEW_VIDEO} />
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
/*  2 — Event Details                                                  */
/* ------------------------------------------------------------------ */
function EventDetails() {
  const rows = [
    { label: "Client", value: p(config.clientName, "Client Name") },
    { label: "Date", value: p(config.eventDate, "Event Date") },
    { label: "Venue", value: p(config.venue, "Venue Name + City") },
    { label: "Planner", value: p(config.plannerName, "Planner Name") },
    { label: "Set Time(s)", value: p(config.setTimes, "Time Window") },
  ]

  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Event Details</SectionLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <div
          className="mt-4 py-8 px-8 max-w-[480px]"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <dl className="flex flex-col gap-4 m-0">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-6">
                <dt
                  className="text-[14px] font-medium shrink-0"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {row.label}
                </dt>
                <dd
                  className="text-[14px] font-medium text-right m-0"
                  style={{ color: "rgba(255,255,255,0.88)" }}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  3 — The Experience                                                 */
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
        <p
          className="mt-5 font-light"
          style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
        >
          Every set is tailored to the timeline and feel of the room.
        </p>
      </FadeIn>

      <FadeIn delay={300}>
        <CalloutBox>
          The focus is always on the room{"\u2014"}not the stage. The performance
          adapts to the energy of your guests in real time.
        </CalloutBox>
      </FadeIn>

      {/* Performance Video */}
      <FadeIn delay={400}>
        <div className="mt-10">
          <VideoPlayer src={PERFORMANCE_VIDEO} />
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
            Live saxophone performance by Ben (featured set)
          </StyledListItem>
          <StyledListItem>
            Wireless, fully mobile setup
          </StyledListItem>
          <StyledListItem>
            Onsite soundcheck and coordination with venue
          </StyledListItem>
          <StyledListItem>
            Performance tailored to the room and timeline
          </StyledListItem>
          <StyledListItem>
            {"Optional: add-on set / extension (upon request)"}
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
          A few things we need from the venue.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <ul className="list-none my-5 p-0">
          <StyledListItem>
            Access to a standard audio input at the venue (details confirmed in advance).
          </StyledListItem>
          <StyledListItem>
            A brief arrival window for soundcheck.
          </StyledListItem>
        </ul>
      </FadeIn>

      <FadeIn delay={200}>
        <CalloutBox>
          We coordinate directly with your venue or planner to keep setup clean
          and stress-free.
        </CalloutBox>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6 — Investment + Terms                                             */
/* ------------------------------------------------------------------ */
function Investment() {
  const rows = [
    { label: "Investment", value: p(config.investment, "---") },
    { label: "Retainer to reserve", value: p(config.retainer, "---") },
    { label: "Balance due", value: p(config.balanceDue, "---") },
    { label: "Overtime / extension", value: p(config.overtime, "---") },
  ]

  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Investment + Terms</SectionLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <div
          className="mt-4 py-8 px-8 max-w-[480px]"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <dl className="flex flex-col gap-4 m-0">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-6">
                <dt
                  className="text-[14px] font-medium shrink-0"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {row.label}
                </dt>
                <dd
                  className="text-[14px] font-medium text-right m-0"
                  style={{ color: "rgba(255,255,255,0.88)" }}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <p
          className="mt-6 text-[13px] font-light"
          style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
        >
          50% retainer to reserve your date. Balance due 30 days prior.
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
        <div className="mt-10 flex justify-center">
          <a
            href={config.callTextLink || "mailto:hello@knoxsignature.com?subject=Knox%20Signature%20%E2%80%94%20Schedule%20a%20Call"}
            className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-semibold tracking-wide transition-all duration-200 hover:opacity-80"
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Call / Text
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={300}>
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
/*  Footer — Knox Signature branding                                   */
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
          Knox Signature
        </p>
        <p
          className="font-light mb-6"
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Live saxophone + DJ atmospheres
        </p>
        <div
          className="text-[14px] flex flex-col gap-1"
          style={{ color: "rgba(255,255,255,0.45)", lineHeight: 2 }}
        >
          <p>Based in Dallas. Available worldwide.</p>
          <p>
            <a
              href="mailto:hello@knoxsignature.com"
              className="footer-link pb-px transition-all duration-200"
            >
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
      <EventDetails />
      <Experience />
      <WhatsIncluded />
      <Requirements />
      <Investment />
      <FinalCta />
      <ProposalFooter />
    </>
  )
}
