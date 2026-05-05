import { useEffect } from "react";

/**
 * Adds `is-visible` to elements with the `.reveal` or `.reveal-clip` class
 * as they enter the viewport. Mounted once at the layout level.
 *
 * Optional: a parent with `data-stagger` will assign incremental
 * `--reveal-delay` to each `.reveal`/`.reveal-clip` child for a graceful
 * cascade. Default step is 90ms; override with `data-stagger="120"`.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SELECTOR = ".reveal, .reveal-clip";

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const applyStagger = (root: ParentNode | Document) => {
      root.querySelectorAll<HTMLElement>("[data-stagger]").forEach((parent) => {
        if (parent.dataset.staggerApplied === "1") return;
        const step = Number(parent.dataset.stagger) || 90;
        const children = parent.querySelectorAll<HTMLElement>(SELECTOR);
        children.forEach((child, i) => {
          if (!child.style.getPropertyValue("--reveal-delay")) {
            child.style.setProperty("--reveal-delay", `${i * step}ms`);
          }
        });
        parent.dataset.staggerApplied = "1";
      });
    };

    applyStagger(document);

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR)
    );

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    const mutation = new MutationObserver(() => {
      applyStagger(document);
      document
        .querySelectorAll<HTMLElement>(`${SELECTOR}`)
        .forEach((el) => {
          if (!el.classList.contains("is-visible")) observer.observe(el);
        });
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
