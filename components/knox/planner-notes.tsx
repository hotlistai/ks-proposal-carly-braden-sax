import { FadeIn } from "./fade-in"

const notes = [
  "Cue sheet + mic plan provided",
  "Clean load-in, minimal footprint",
  "Vendor coordination handled",
]

export function PlannerNotes() {
  return (
    <section
      className="px-9 md:px-[72px] py-14 max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <FadeIn>
        <p
          className="text-[11px] font-semibold uppercase mb-6"
          style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
        >
          Planner Notes
        </p>
        <div className="flex flex-wrap gap-4">
          {notes.map((note) => (
            <span
              key={note}
              className="inline-block px-5 py-2.5 rounded-full text-[13px] font-medium"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.72)",
                letterSpacing: "0.01em",
              }}
            >
              {note}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
