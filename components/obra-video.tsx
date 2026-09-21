"use client";

import { useEffect, useRef } from "react";

/** Plays only on user action; pauses when scrolled away or the tab is hidden. */
export default function ObraVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.15) video.pause();
      },
      { threshold: 0.15 },
    );
    const pauseWhenHidden = () => {
      if (document.hidden) video.pause();
    };
    observer.observe(video);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", pauseWhenHidden);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="obra-video"
      controls
      muted
      playsInline
      preload="none"
      poster="/images/parquinho-obra-poster.webp"
      width="1600"
      height="900"
      aria-label="Timelapse ilustrativo: a equipe retira o parquinho antigo, instala o piso emborrachado e monta os brinquedos novos"
    >
      <source src="/video/parquinho-obra.mp4" type="video/mp4" />
    </video>
  );
}
