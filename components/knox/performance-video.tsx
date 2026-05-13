import { FadeIn } from "./fade-in"
import { VideoPlayer } from "./video-player"

const VIDEO_SRC =
  "https://blog.hotlistdigital.com/wp-content/uploads/2026/02/knox-signature-web-video-man-i-need.mp4"

export function PerformanceVideo() {
  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <VideoPlayer src={VIDEO_SRC} />
      </FadeIn>
    </section>
  )
}
