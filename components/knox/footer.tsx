import { FadeIn } from "./fade-in"

export function Footer() {
  return (
    <footer
      className="px-9 md:px-[72px] pt-14 pb-20 max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <FadeIn>
        <p
          className="text-[10px] font-semibold uppercase mb-4"
          style={{ letterSpacing: "4px", color: "rgba(255,255,255,0.35)" }}
        >
          Knox Signature
        </p>
        <p
          className="font-light mb-6"
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Live saxophone + DJ atmospheres
        </p>
        <div
          className="text-[14px] flex flex-col gap-1"
          style={{ color: "rgba(255,255,255,0.45)", lineHeight: 2 }}
        >
          <p>Based in Dallas. Available worldwide.</p>
          <p>
            <a
              href="mailto:hello@knoxsignature.com"
              className="footer-link pb-px transition-all duration-200"
            >
              hello@knoxsignature.com
            </a>
          </p>
          <p>
            <a
              href="https://knoxsignature.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link pb-px transition-all duration-200"
            >
              knoxsignature.com
            </a>
          </p>
        </div>
      </FadeIn>
    </footer>
  )
}
