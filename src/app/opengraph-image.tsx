import { ImageResponse } from "next/og";

export const alt =
  "Dan Feliciano Operational Visibility for owners and operators social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#111827",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "68px 76px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#f59e0b",
            display: "flex",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Operational Visibility · Dan Feliciano
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 900,
              letterSpacing: 0,
              lineHeight: 1.02,
              maxWidth: 980,
            }}
          >
            Fix what is slowing your business down.
          </div>
          <div
            style={{
              color: "#cbd5e1",
              display: "flex",
              fontSize: 34,
              fontWeight: 600,
              lineHeight: 1.35,
              maxWidth: 980,
            }}
          >
            See how work, decisions, information, constraints, risk and cash
            move—then fix the system and automate the right work.
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid #334155",
            color: "#e2e8f0",
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            justifyContent: "space-between",
            paddingTop: 28,
          }}
        >
          <span>Work</span>
          <span>Decisions</span>
          <span>Risk</span>
          <span>Cash</span>
        </div>
      </div>
    ),
    size,
  );
}
