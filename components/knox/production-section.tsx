import Image from "next/image"
import { FadeIn } from "./fade-in"

const PRODUCTION_IMAGE =
  "https://raw.githubusercontent.com/hotlistai/anna-max-proposal/main/assets/Images/knox-signature-set-1.png"

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

export function ProductionSection() {
  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p
          className="text-[11px] font-semibold uppercase mb-5"
          style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.72)" }}
        >
          Production & Design
        </p>
        <h3
          className="font-bold mb-5"
          style={{
            fontSize: "clamp(20px, 2.5vw, 24px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          Minimal, architectural, and integrated.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
          Our setup is designed to be minimal, architectural, and integrated
          into the space.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <p
          className="text-[11px] font-semibold uppercase mt-10 mb-5"
          style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.72)" }}
        >
          This includes:
        </p>
        <ul className="list-none my-5">
          <StyledListItem>A clean, white DJ command center</StyledListItem>
          <StyledListItem>
            Premium column-array sound on both sides of the room
          </StyledListItem>
          <StyledListItem>
            Architectural lighting to shape the space without overpowering it
          </StyledListItem>
          <StyledListItem>
            Wireless microphones and digital mixing for clarity and control
          </StyledListItem>
        </ul>
      </FadeIn>

      <FadeIn delay={300}>
        <p
          className="italic font-light"
          style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}
        >
          Everything is designed to look as good as it sounds.
        </p>
      </FadeIn>

      {/* Production showcase image */}
      <FadeIn delay={400}>
        <div className="mt-14 mb-[72px]">
          <Image
            src={PRODUCTION_IMAGE}
            alt="Knox Signature production setup"
            width={1040}
            height={600}
            className="w-full h-auto block rounded-xl"
            style={{ opacity: 0.96 }}
            unoptimized
          />
        </div>
      </FadeIn>
    </section>
  )
}
