import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Soroosh Esmaeilian — Applied AI & Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, opacity: 0.85, marginBottom: 24 }}>
          www.sorooshes98.com
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>
          Soroosh Esmaeilian
        </div>
        <div style={{ fontSize: 42, marginTop: 20, color: "#fbbf24" }}>
          Applied AI & Full-Stack Engineer
        </div>
        <div style={{ fontSize: 28, marginTop: 40, opacity: 0.8, maxWidth: 900 }}>
          I build AI systems that work on real data, not just demos.
        </div>
      </div>
    ),
    { ...size },
  );
}
