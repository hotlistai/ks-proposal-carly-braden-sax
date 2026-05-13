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

export function TimingSection() {
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
          Timing
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
          Up to six hours total.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
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
            The Knox Signature experience typically covers up to six hours
            total, including:
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <ul className="list-none my-5">
          <StyledListItem>Ceremony</StyledListItem>
          <StyledListItem>Cocktail hour</StyledListItem>
          <StyledListItem>Dinner</StyledListItem>
        </ul>
      </FadeIn>

      <FadeIn delay={300}>
        <p className="font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
          This timing works well for the majority of private events and allows
          the experience to evolve naturally throughout the evening.
        </p>
      </FadeIn>
    </section>
  )
}
