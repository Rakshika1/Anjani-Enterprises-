import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  /** Image URL — typically an imported asset. */
  src: string;
  /** Required alt text (a11y + SEO). */
  alt: string;
  /** Optional fallback label shown while the image fades in. */
  label?: string;
  /** Short caption shown beneath the image well, like a print-magazine credit. */
  caption?: string;
  /** Aspect ratio of the image well, e.g. "3/4", "4/5", "16/9". */
  ratio?: string;
  className?: string;
  /** Slow ken-burns zoom on the image. */
  kenBurns?: boolean;
  /** Subtle parallax translate on scroll. */
  parallax?: boolean;
  /** Loading strategy — set "eager" for above-the-fold images. */
  loading?: "lazy" | "eager";
  /** Decoded async by default for non-blocking paint. */
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
}

/**
 * Editorial image with smooth fade-in on load, optional ken-burns zoom,
 * and optional vertical parallax on scroll.
 */
export function EditorialImage({
  src,
  alt,
  label,
  caption,
  ratio = "4/5",
  className,
  kenBurns = false,
  parallax = false,
  loading = "lazy",
  fetchPriority = "auto",
  width,
  height,
}: EditorialImageProps) {
  const [loaded, setLoaded] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!parallax || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    let rafId = 0;
    let inView = false;

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1..1 progress through viewport
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const translate = -progress * 32; // up to 32px movement
      img.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0) scale(${kenBurns ? 1.06 : 1.04})`;
    };

    const onScroll = () => {
      if (!inView) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false;
        if (inView) update();
      },
      { threshold: 0 }
    );
    io.observe(wrap);

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [parallax, kenBurns]);

  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden bg-muted"
        style={{ aspectRatio: ratio }}
      >
        {/* Soft warm placeholder behind the image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 30%, oklch(0.94 0.01 80) 0%, oklch(0.88 0.012 80) 55%, oklch(0.78 0.015 80) 100%)",
          }}
          aria-hidden
        />
        {label && !loaded && (
          <span
            className="absolute inset-0 flex items-center justify-center eyebrow text-ink-soft/60 select-none"
            aria-hidden
          >
            {label}
          </span>
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          fetchPriority={fetchPriority}
          width={width}
          height={height}
          onLoad={() => setLoaded(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out will-change-transform",
            kenBurns && "ken-burns",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Subtle film grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
          aria-hidden
        />
      </div>
      {caption && (
        <figcaption className="eyebrow text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
