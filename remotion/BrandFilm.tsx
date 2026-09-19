import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/fonts";

loadFont({
  family: "Playfair Display",
  url: staticFile("fonts/playfair-display-latin.woff2"),
  weight: "400",
});
loadFont({
  family: "Montserrat",
  url: staticFile("fonts/montserrat-latin.woff2"),
  weight: "400",
});

const scenes = [
  {
    image: "clube",
    title: "Mais informação.",
    caption: "Clareza para acompanhar.",
  },
  {
    image: "alameda",
    title: "Mais participação.",
    caption: "Proximidade para construir.",
  },
  {
    image: "jardins",
    title: "Mais JCB.",
    caption: "Um olhar para o que nos conecta.",
  },
];

export function BrandFilm() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ease = {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  } as const;
  const brandEnter = interpolate(frame, [0, 0.9 * fps], [0, 1], ease);
  return (
    <AbsoluteFill
      style={{ background: "#314732", color: "#fff", fontFamily: "Montserrat" }}
    >
      {scenes.map((scene, index) => {
        const start = index * 3 * fps;
        const visible =
          index === 0
            ? 1
            : interpolate(frame, [start, start + 0.7 * fps], [0, 1], ease);
        const scale = interpolate(
          frame,
          [start, start + 3.7 * fps],
          [1.035, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        return (
          <AbsoluteFill key={scene.image} style={{ opacity: visible }}>
            <Img
              src={staticFile("images/" + scene.image + ".webp")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scale(" + scale + ")",
              }}
            />
          </AbsoluteFill>
        );
      })}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(25,39,24,.46) 0%, rgba(25,39,24,.02) 44%, rgba(25,39,24,.82) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 72,
          left: 66,
          width: 405,
          opacity: brandEnter,
          transform: "translateY(" + (1 - brandEnter) * 15 + "px)",
        }}
      >
        <Img
          src={staticFile("brand/plus-jcb-white.svg")}
          style={{ width: "100%" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 86,
          right: 66,
          fontSize: 15,
          lineHeight: 1.7,
          letterSpacing: 3,
          textAlign: "right",
        }}
      >
        JARDIM CLUBE
        <br />
        DA BARRA
      </div>
      {scenes.map((scene, index) => {
        const start = index * 3 * fps;
        const enter = interpolate(
          frame,
          [start + 0.25 * fps, start + 1 * fps],
          [0, 1],
          ease,
        );
        const exit =
          index === 2
            ? 1
            : interpolate(
                frame,
                [start + 2.65 * fps, start + 3 * fps],
                [1, 0],
                ease,
              );
        return (
          <div
            key={scene.title}
            style={{
              position: "absolute",
              left: 70,
              right: 65,
              bottom: 142,
              opacity: enter * exit,
              transform: "translateY(" + 18 * (1 - enter) + "px)",
            }}
          >
            <div
              style={{
                fontSize: 74,
                lineHeight: 1.14,
                letterSpacing: -2,
                fontFamily: "Playfair Display",
              }}
            >
              {scene.title}
            </div>
            <div
              style={{
                fontSize: 22,
                lineHeight: 1.5,
                marginTop: 24,
                color: "#efefe5",
              }}
            >
              {scene.caption}
            </div>
          </div>
        );
      })}
      <div
        style={{
          position: "absolute",
          left: 70,
          right: 65,
          bottom: 48,
          borderTop: "1px solid rgba(255,255,255,.4)",
          paddingTop: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 16, letterSpacing: 1 }}>
          Uma iniciativa AERA para o JCB.
        </span>
        <Img
          src={staticFile("brand/aera-white.webp")}
          style={{ width: 155, height: "auto" }}
        />
      </div>
    </AbsoluteFill>
  );
}
