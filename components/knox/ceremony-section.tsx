import { FadeIn } from "./fade-in"

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

export function CeremonySection() {
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
          01 — Ceremony
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
          Clean, unobtrusive audio support.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
          The ceremony feels effortless and uninterrupted.
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
          <StyledListItem>A refined PA system integrated into the space</StyledListItem>
          <StyledListItem>Wireless lapel microphones for officiant and groom</StyledListItem>
          <StyledListItem>Curated ceremony music</StyledListItem>
          <StyledListItem>Processional, key moments, recessional cueing</StyledListItem>
          <StyledListItem>Optional live saxophone moments if desired</StyledListItem>
        </ul>
      </FadeIn>

      <FadeIn delay={300}>
        <div
          className="my-10 py-7 px-7 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.025)",
            borderLeft: "2px solid rgba(102,126,234,0.4)",
          }}
        >
          <p
            className="italic m-0"
            style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}
          >
            The focus is clarity, calm, and presence without drawing attention
            to the equipment.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
