import { FadeIn } from "./fade-in"
import { VideoPlayer } from "./video-player"

const VIDEO_SRC =
  "https://raw.githubusercontent.com/hotlistai/anna-max-proposal/main/assets/videos/knox-anna-max-personal-video.mp4"

export function PersonalVideo() {
  return (
    <section className="px-9 md:px-[72px] pb-14 max-w-[1040px] mx-auto">
      <FadeIn>
        <VideoPlayer src={VIDEO_SRC} halfWidth />
        <p
          className="mt-5 text-sm italic font-light"
          style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}
        >
          {"Here's a little treat we've prepared for you. Enjoy."}
        </p>
      </FadeIn>
    </section>
  )
}
