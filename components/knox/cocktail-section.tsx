import { FadeIn } from "./fade-in"

export function CocktailSection() {
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
          02 — Cocktail Hour
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
          Live performance that sets the tone.
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
          Cocktail hour is performed live and curated to set the tone for the
          night.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <p className="mt-5 font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
          Phillip performs piano with Ben on saxophone, blending live
          instrumentation with modern stylings and carefully selected tracks
          when appropriate. The result is social, elevated, and engaging without
          feeling like background music.
        </p>
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
            This is designed to feel welcoming and memorable as guests
            transition into the evening.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
