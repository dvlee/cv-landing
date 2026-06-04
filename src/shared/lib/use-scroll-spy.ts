"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently in view and returns its id.
 * Used by the navigation to highlight the active anchor (scroll-spy).
 */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    for (const s of sections) io.observe(s);
    return () => io.disconnect();
  }, [ids]);

  return active;
}
