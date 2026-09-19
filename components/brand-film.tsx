"use client";

import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandFilmPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [error, setError] = useState(false);

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

  async function play() {
    const video = videoRef.current;
    if (!video) return;
    setError(false);
    if (ended) video.currentTime = 0;
    setStarted(true);
    setEnded(false);
    try {
      await video.play();
    } catch {
      setError(true);
      setStarted(false);
    }
  }

  return (
    <div className="brand-film" data-started={started}>
      <img
        className="film-poster"
        src="/images/clube.webp"
        alt="Imagem fornecida do clube, com palmeiras, paisagismo e caminho de pedra"
        width="1448"
        height="1086"
        fetchPriority="high"
      />
      <video
        ref={videoRef}
        className="film-video"
        controls={started}
        preload="none"
        playsInline
        muted
        poster="/images/clube.webp"
        aria-label="Apresentação da identidade +JCB, com duração de nove segundos"
        onEnded={() => setEnded(true)}
        onError={() => {
          setError(true);
          setStarted(false);
        }}
      >
        <source src="/video/plus-jcb.mp4" type="video/mp4" />
        <track
          kind="captions"
          src="/video/plus-jcb.vtt"
          srcLang="pt-BR"
          label="Português"
        />
      </video>
      {(!started || ended) && (
        <Button className="film-play" variant="outline" onClick={play}>
          {ended ? (
            <RotateCcw size={15} aria-hidden="true" />
          ) : (
            <Play size={15} aria-hidden="true" />
          )}
          {ended ? "Rever apresentação" : "Ver a marca em movimento"}{" "}
          <span>9s</span>
        </Button>
      )}
      {error && (
        <p className="film-error" role="status">
          Não foi possível reproduzir o vídeo. Tente novamente.
        </p>
      )}
    </div>
  );
}
