"use client";

import { useEffect } from "react";

const TAWK_SRC =
  "https://embed.tawk.to/6a4f9e3c8926201d475f4a7c/1jt3g47c7";

export default function DeferredTawkTo() {
  useEffect(() => {
    if (document.querySelector(`script[src="${TAWK_SRC}"]`)) return;

    let done = false;
    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "pointerdown",
      "pointermove",
      "touchstart",
      "keydown",
    ];

    const load = () => {
      if (done) return;
      done = true;
      events.forEach((name) => window.removeEventListener(name, load));

      const script = document.createElement("script");
      script.src = TAWK_SRC;
      script.async = true;
      document.body.appendChild(script);
    };

    events.forEach((name) =>
      window.addEventListener(name, load, { passive: true }),
    );
    const fallback = window.setTimeout(load, 10000);

    return () => {
      events.forEach((name) => window.removeEventListener(name, load));
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
