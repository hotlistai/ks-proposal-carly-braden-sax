import { FadeIn } from "./fade-in"

export function ClosingSection() {
  return (
    <section
      className="px-9 md:px-[72px] py-24 max-w-[1040px] mx-auto text-center"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
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
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@knoxsignature.com?subject=Knox%20Signature%20%E2%80%94%20Check%20Availability"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-[15px] font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
            style={{
              background: "rgba(255,255,255,0.95)",
              color: "#0a0a0a",
            }}
          >
            Check Availability
          </a>
          <a
            href="mailto:hello@knoxsignature.com?subject=Knox%20Signature%20%E2%80%94%20Schedule%20a%20Call"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-[15px] font-semibold tracking-wide transition-all duration-200 hover:opacity-80"
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Schedule a Call
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
