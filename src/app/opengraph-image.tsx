import { ImageResponse } from "next/og";

export const alt = "Denis Lee — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background:
          "linear-gradient(135deg, #07070f 0%, #0b0b1a 55%, #11112a 100%)",
        color: "#e7e9ff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -140,
          right: -90,
          width: 440,
          height: 440,
          borderRadius: "50%",
          background: "rgba(0, 212, 255, 0.18)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -170,
          left: -110,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "rgba(168, 85, 247, 0.18)",
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 8,
          color: "#22e0ff",
          textTransform: "uppercase",
        }}
      >
        {"// senior frontend engineer"}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 110,
          fontWeight: 800,
          marginTop: 16,
          lineHeight: 1.05,
        }}
      >
        Denis Lee
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 42,
          marginTop: 18,
          color: "#9aa0c7",
        }}
      >
        React · Next.js · TypeScript
      </div>
      <div style={{ display: "flex", marginTop: 44 }}>
        {["15+ years", "fintech & enterprise", "Tashkent, UZ"].map((t) => (
          <div
            key={t}
            style={{
              display: "flex",
              border: "1px solid rgba(124, 92, 246, 0.5)",
              borderRadius: 14,
              padding: "12px 24px",
              marginRight: 16,
              fontSize: 26,
              color: "#e7e9ff",
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
