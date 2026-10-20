"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button, input, select, textarea, [contenteditable]';

export function useInertSlickClones(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const applyInert = () => {
      root.querySelectorAll<HTMLElement>("div.slick-slide").forEach((el) => {
        const hidden = el.getAttribute("aria-hidden") === "true";

        if (hidden !== el.inert) {
          el.inert = hidden;
        }

        el.querySelectorAll<HTMLElement>(FOCUSABLE).forEach((node) => {
          if (hidden) {
            if (node.dataset.inertTabindex !== "1") {
              if (node.getAttribute("tabindex") !== "-1") {
                node.setAttribute("tabindex", "-1");
              }
              node.dataset.inertTabindex = "1";
            }
          } else if (node.dataset.inertTabindex === "1") {
            if (node.getAttribute("tabindex") === "-1") {
              node.removeAttribute("tabindex");
            }
            delete node.dataset.inertTabindex;
          }
        });
      });
    };

    applyInert();

    const observer = new MutationObserver(applyInert);
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["tabindex", "aria-hidden"],
    });

    return () => observer.disconnect();
  }, [ref]);
}
