import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 25% 42%, rgba(255,255,255,0.16), transparent 22%), radial-gradient(circle at 77% 34%, rgba(255,255,255,0.14), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "72px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 300,
              letterSpacing: "0.18em",
              lineHeight: 1,
            }}
          >
            KNOX SIGNATURE
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 22,
              fontWeight: 300,
              letterSpacing: "0.48em",
              opacity: 0.72,
            }}
          >
            LUXURY SAX · DJ ATMOSPHERES
          </div>
        </div>
      </div>
    ),
    size,
  );
}
