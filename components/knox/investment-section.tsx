import { FadeIn } from "./fade-in"

const includes = [
  "Ceremony audio + live saxophone",
  "Flow and pacing across the full evening",
  "Live sax integration with DJ",
  "Wireless microphones for toasts",
  "Pre-event planning call",
]

export function InvestmentSection() {
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
          Investment
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div
          className="mt-4 py-10 px-10 rounded-2xl"
          style={{
            background: "rgba(102,126,234,0.04)",
            border: "1px solid rgba(102,126,234,0.2)",
          }}
        >
          <div className="flex justify-between items-baseline flex-wrap gap-4 mb-3">
            <h3
              className="font-semibold m-0"
              style={{ fontSize: "26px", color: "#ffffff" }}
            >
              The Full Atmosphere
            </h3>
            <span
              className="font-bold"
              style={{
                fontSize: "32px",
                letterSpacing: "-0.03em",
                color: "#ffffff",
              }}
            >
              $5,950
            </span>
          </div>
          <p
            className="mb-8 font-light"
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Starting investment
          </p>

          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {includes.map((item) => (
              <li
                key={item}
                className="relative pl-6 font-light"
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.7,
                }}
              >
                <span
                  className="absolute left-0"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {"\u2014"}
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            className="mt-10 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-[13px] font-light"
              style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
            >
              50% retainer to reserve your date. Balance due 30 days prior.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
