import { FadeIn } from "./fade-in"

const experiences = [
  {
    label: "01 — Ceremony",
    title: "Clean audio. Calm presence.",
    description:
      "Wireless microphones, curated music, and live saxophone woven into the processional and key moments. Nothing visible. Nothing distracting.",
  },
  {
    label: "02 — Cocktail",
    title: "Live performance sets the tone.",
    description:
      "Piano and saxophone performed live, blending modern stylings with curated tracks. Social, elevated, and engaging from the first pour.",
  },
  {
    label: "03 — Reception",
    title: "The room comes alive.",
    description:
      "DJ-led set with live saxophone integration. Energy builds naturally through dinner, toasts, and dancing. One seamless arc.",
  },
]

export function ExperienceOverview() {
  return (
    <section
      className="px-9 md:px-[72px] py-24 max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <FadeIn>
        <p
          className="text-[11px] font-semibold uppercase mb-5"
          style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
        >
          The Experience
        </p>
        <h2
          className="font-extrabold max-w-[24ch] text-balance"
          style={{
            fontSize: "clamp(28px, 3vw, 38px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          One evening. One continuous atmosphere.
        </h2>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.label} delay={100 + i * 120}>
            <div
              className="py-8 px-7 rounded-xl h-full flex flex-col"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="text-[10px] font-semibold uppercase mb-4"
                style={{
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {exp.label}
              </p>
              <h3
                className="font-bold mb-4"
                style={{
                  fontSize: "18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  color: "#ffffff",
                }}
              >
                {exp.title}
              </h3>
              <p
                className="font-light mt-auto"
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.58)",
                  lineHeight: 1.7,
                }}
              >
                {exp.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
