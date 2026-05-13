import Image from "next/image"
import { FadeIn } from "./fade-in"
import { VideoPlayer } from "./video-player"

const PREVIEW_VIDEO =
  "https://blog.hotlistdigital.com/wp-content/uploads/2026/02/knox-signature-web-video-man-i-need.mp4"

export function Header() {
  return (
    <header>
      {/* Banner */}
      <div className="w-full">
        <Image
          src="https://www.knoxsignature.com/images/knox-press-banner.png"
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
            Knox Signature
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
            Request an Atmosphere.
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
            Live saxophone + DJ, designed as one continuous atmosphere.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
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

        {/* Private Preview */}
        <FadeIn delay={450}>
          <div className="mt-20">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{
                letterSpacing: "0.32em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Private Preview
            </p>
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
