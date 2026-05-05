import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/units", label: "Units" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/compliance", label: "Compliance" },
  { to: "/vision", label: "Vision" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <>
      {/* Top scrim — soft gradient for nav legibility on hero */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-40 h-28 transition-opacity duration-700",
          transparent ? "opacity-100" : "opacity-0"
        )}
        style={{
          background:
            "linear-gradient(180deg, oklch(0.02 0 0 / 0.75) 0%, oklch(0.02 0 0 / 0.45) 50%, transparent 100%)",
        }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-out",
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-background/90 backdrop-blur-xl border-b border-border"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-[72px] md:px-10">
          {/* Wordmark */}
          <Link
            to="/"
            aria-label="Anjani Enterprises — Home"
            className={cn(
              "group relative font-serif text-xl md:text-2xl tracking-tight transition-colors duration-500",
              transparent
                ? "text-white [text-shadow:0_1px_12px_oklch(0_0_0/0.6),0_0_4px_oklch(0_0_0/0.4)]"
                : "text-foreground"
            )}
          >
            <span className="inline-flex overflow-hidden align-baseline">
              {"Anjani".split("").map((ch, i) => (
                <span
                  key={`a-${i}`}
                  className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: mounted ? "translateY(0)" : "translateY(110%)",
                    transitionDelay: `${120 + i * 45}ms`,
                  }}
                >
                  {ch}
                </span>
              ))}
            </span>
            <span className="mx-1.5 inline-block" />
            <span className="inline-flex overflow-hidden align-baseline italic font-light">
              {"Enterprises".split("").map((ch, i) => (
                <span
                  key={`e-${i}`}
                  className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: mounted ? "translateY(0)" : "translateY(110%)",
                    transitionDelay: `${420 + i * 35}ms`,
                  }}
                >
                  {ch}
                </span>
              ))}
            </span>
            {/* Underline flourish on hover */}
            <span
              aria-hidden
              className={cn(
                "absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100",
                transparent ? "bg-white/70" : "bg-foreground"
              )}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map((item, i) => {
              const active = location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "group relative px-3 py-2 eyebrow transition-colors duration-300",
                    transparent
                      ? "text-white hover:text-white [text-shadow:0_1px_12px_oklch(0_0_0/0.6),0_0_4px_oklch(0_0_0/0.4)]"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                  style={{
                    transform: mounted ? "translateY(0)" : "translateY(-10px)",
                    opacity: mounted ? 1 : 0,
                    transition:
                      "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 700ms cubic-bezier(0.22,1,0.36,1), color 300ms ease",
                    transitionDelay: `${300 + i * 60}ms`,
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Hover underline */}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute left-3 right-3 bottom-1 h-px origin-right scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100",
                      transparent ? "bg-white" : "bg-foreground"
                    )}
                  />
                  {/* Active dot */}
                  {active && (
                    <span
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full",
                        transparent ? "bg-white" : "bg-foreground"
                      )}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className={cn(
                "ml-4 group relative inline-flex items-center gap-2 overflow-hidden border px-5 py-2 eyebrow transition-colors duration-500",
                transparent
                  ? "border-white text-white hover:text-foreground [text-shadow:0_1px_12px_oklch(0_0_0/0.6),0_0_4px_oklch(0_0_0/0.4)]"
                  : "border-foreground text-foreground hover:text-background"
              )}
              style={{
                transform: mounted ? "translateY(0)" : "translateY(-10px)",
                opacity: mounted ? 1 : 0,
                transition:
                  "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 700ms cubic-bezier(0.22,1,0.36,1), color 500ms ease, border-color 500ms ease",
                transitionDelay: `${300 + navItems.length * 60}ms`,
              }}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute inset-0 -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0",
                  transparent ? "bg-white" : "bg-foreground"
                )}
              />
              <span className="relative z-10">Enquire</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "md:hidden relative inline-flex h-11 w-11 items-center justify-center -mr-2 transition-colors",
              transparent ? "text-white" : "text-foreground"
            )}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 right-0 h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  transparent ? "bg-white" : "bg-foreground",
                  open ? "top-1.5 rotate-45" : "top-0 rotate-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 right-0 h-px bottom-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  transparent ? "bg-white" : "bg-foreground",
                  open ? "bottom-1.5 -rotate-45" : "bottom-0 rotate-0"
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 bg-background transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-start gap-6 px-8 pt-12" aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="overflow-hidden font-serif text-3xl text-foreground"
            >
              <span
                className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: open ? "translateY(0)" : "translateY(110%)",
                  transitionDelay: `${open ? 100 + i * 60 : 0}ms`,
                }}
              >
                {item.label}
              </span>
            </Link>
          ))}
          <div className="rule-line w-12 mt-4" />
          <a
            href="tel:+918290477917"
            className="eyebrow text-muted-foreground"
          >
            +91 82904 77917
          </a>
          <a
            href="mailto:rakshikas40@gmail.com"
            className="eyebrow text-muted-foreground"
          >
            rakshikas40@gmail.com
          </a>
        </nav>
      </div>
    </>
  );
}
