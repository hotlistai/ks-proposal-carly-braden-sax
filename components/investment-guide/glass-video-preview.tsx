"use client";

import { useRef, useState } from "react";

export function GlassVideoPreview({
  src,
  poster,
  isMov,
}: {
  src: string;
  poster: string;
  isMov: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  function handlePlayClick() {
    const video = videoRef.current;
    if (!video) return;
    setHasStarted(true);
    void video.play();
  }

  return (
    <div className="relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <video
        ref={videoRef}
        className="block h-auto w-full bg-black"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        onPlay={() => setHasStarted(true)}
      >
        <source src={src} type={isMov ? "video/quicktime" : "video/mp4"} />
        {isMov ? <source src={src} type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>

      {!hasStarted ? (
        <button
          type="button"
          aria-label="Play Knox Signature preview video"
          onClick={handlePlayClick}
          className="absolute inset-0 cursor-pointer"
        >
          <span
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.18) 46%, rgba(0,0,0,0.38) 100%)",
              backdropFilter: "blur(8px)",
            }}
          />
          <span
            className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.32), rgba(255,255,255,0.08))",
              border: "1px solid rgba(255,255,255,0.38)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.34)",
              backdropFilter: "blur(14px)",
            }}
          >
            <span
              className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-[38%] -translate-y-1/2"
              style={{
                borderLeft: "24px solid rgba(255,255,255,0.96)",
                borderTop: "14px solid transparent",
                borderBottom: "14px solid transparent",
              }}
            />
          </span>
        </button>
      ) : null}
    </div>
  );
}
