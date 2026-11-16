import { ImageResponse } from "next/og";
import { palette, projects } from "@/content/projects";

// Imagem de prévia mostrada quando o link do site é compartilhado.
export const alt = "Henrique Godoy: aplicações web, segurança e estudos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const cards = projects.slice(0, 3);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        color: "#f1eee7",
        backgroundColor: "#0e1524",
        backgroundImage:
          "radial-gradient(circle at 50% 120%, rgba(47, 91, 234, 0.75), rgba(14, 21, 36, 0) 60%)",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 5, opacity: 0.6 }}>
        PORTFÓLIO
      </div>

      <div style={{ display: "flex", gap: 24 }}>
        {cards.map((project, i) => (
          <div
            key={project.slug}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 230,
              height: 190,
              padding: 22,
              borderRadius: 24,
              background: palette[project.category].bg,
              color: palette[project.category].fg,
            }}
          >
            <div style={{ display: "flex", fontSize: 18, letterSpacing: 3 }}>0{i + 1}</div>
            <div style={{ display: "flex", fontSize: 30, lineHeight: 1.05 }}>{project.name}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 104, lineHeight: 1 }}>Henrique Godoy.</div>
        <div style={{ display: "flex", marginTop: 18, fontSize: 34, opacity: 0.8 }}>
          Aplicações web, segurança e estudos.
        </div>
      </div>
    </div>,
    size,
  );
}
