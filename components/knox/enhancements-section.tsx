import { FadeIn } from "./fade-in"

export function EnhancementsSection() {
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
          Custom Enhancements
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
          Thoughtfully accommodated when appropriate.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
          If there are additional design elements that are important to you,
          we{"'"}re happy to discuss them once we understand your vision and
          priorities. When appropriate, we can thoughtfully accommodate custom
          enhancements that align with the space and the overall feel of the
          event.
        </p>
      </FadeIn>
    </section>
  )
}
