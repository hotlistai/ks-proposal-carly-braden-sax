"use client"

import { useRef, useState } from "react"

export function VideoPlayer({
  src,
  halfWidth = false,
}: {
  src: string
  halfWidth?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const isMovFile = src.toLowerCase().endsWith(".mov")
  const mimeType = isMovFile ? "video/quicktime" : "video/mp4"

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <div
      className={halfWidth ? "mx-auto w-full max-w-[520px] md:w-1/2" : "w-full"}
    >
      <div className="relative">
        <video
          ref={videoRef}
          className="block w-full h-auto shadow-lg"
          style={{ background: "#000" }}
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          controls={isPlaying}
        >
          <source src={src} type={mimeType} />
          {isMovFile && <source src={src} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handlePlay}
          aria-label="Play video"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full grid place-items-center cursor-pointer transition-opacity duration-200 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            background: "rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(2px)",
          }}
        >
          <span
            className="ml-1"
            style={{
              borderLeft: "18px solid #fff",
              borderTop: "11px solid transparent",
              borderBottom: "11px solid transparent",
              display: "block",
              width: 0,
              height: 0,
            }}
          />
        </button>
      </div>
    </div>
  )
}
