"use client";

import { useEffect } from "react";

/** Enhance only explanatory moments. Content stays visible without JavaScript. */
export default function PageMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const root = document.documentElement;
    const easing = "cubic-bezier(0.23, 1, 0.32, 1)";

    const cancelMovement = () => {
      for (const animation of running) animation.cancel();
      running.clear();
    };
    const keyboard = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      root.dataset.input = "keyboard";
      cancelMovement();
    };
    const pointer = () => { root.dataset.input = "pointer"; };
    const preferenceChanged = () => {
      if (reduced.matches) cancelMovement();
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || seen.has(entry.target)) continue;
        seen.add(entry.target);
        observer.unobserve(entry.target);
        if (reduced.matches || root.dataset.input === "keyboard") continue;

        const isFlow = entry.target.getAttribute("data-motion") === "flow";
        const elements = isFlow
          ? Array.from(entry.target.children)
          : Array.from(entry.target.querySelectorAll("img"));

        elements.forEach((element, index) => {
          const animation = element.animate(
            [
              { opacity: isFlow ? 0.35 : 0.75, transform: isFlow ? "translateY(8px)" : "translateY(12px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: isFlow ? 500 : 650, delay: index * 70, easing, fill: "backwards" },
          );
          running.add(animation);
          animation.addEventListener("finish", () => running.delete(animation), { once: true });
          animation.addEventListener("cancel", () => running.delete(animation), { once: true });
        });
      }
    }, { threshold: 0.2 });

    document.querySelectorAll("[data-motion]").forEach((element) => observer.observe(element));
    document.addEventListener("keydown", keyboard, true);
    document.addEventListener("pointerdown", pointer, true);
    reduced.addEventListener("change", preferenceChanged);

    return () => {
      observer.disconnect();
      cancelMovement();
      document.removeEventListener("keydown", keyboard, true);
      document.removeEventListener("pointerdown", pointer, true);
      reduced.removeEventListener("change", preferenceChanged);
      delete root.dataset.input;
    };
  }, []);

  return null;
}
