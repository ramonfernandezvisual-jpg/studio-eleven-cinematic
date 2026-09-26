import { useState } from "react";
import { youtubeId } from "@/config/videos";
import { t } from "@/i18n";

const SERIF = "Georgia, 'Times New Roman', serif";

interface VideoSlotProps {
  code: string;
  title: string;
  youtube: string;
  format: "horizontal" | "vertical";
}

function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={t.sectores.play}
      onClick={onClick}
      style={{
        position: "absolute",
        left: "50%",
        bottom: "28px",
        transform: "translateX(-50%)",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        border: "1px solid rgba(242, 239, 232, 0.5)",
        background: "rgba(5, 5, 5, 0.3)",
        color: "#f2efe8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M2 1.5 L12.5 8 L2 14.5 Z"></path>
      </svg>
    </button>
  );
}

export function VideoSlot({ code, title, youtube, format }: VideoSlotProps) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeId(youtube);
  const isH = format === "horizontal";

  const frameStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio: isH ? "16 / 9" : "9 / 16",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    background: "#0b0b0b",
  };

  if (!id) {
    return (
      <div style={frameStyle}>
        <div
          style={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            padding: isH ? 0 : "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: isH ? "14px" : "12px",
            textAlign: isH ? undefined : "center",
            background: "radial-gradient(circle, #171717, #050505 60%, #020202)",
          }}
        >
          <span
            style={{
              fontFamily: SERIF,
              fontSize: isH ? "38px" : "20px",
              lineHeight: isH ? undefined : 1.3,
              letterSpacing: isH ? "-0.02em" : undefined,
              color: "#aaa59b",
              textAlign: isH ? "center" : undefined,
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#716d66",
            }}
          >
            {code} · {isH ? t.sectores.horizontalMeta : t.sectores.verticalMeta}
          </span>
        </div>
        {isH && <PlayButton onClick={() => {}} />}
      </div>
    );
  }

  if (!playing) {
    return (
      <div style={frameStyle}>
        <img
          src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <PlayButton onClick={() => setPlaying(true)} />
      </div>
    );
  }

  return (
    <div style={frameStyle}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
    </div>
  );
}
