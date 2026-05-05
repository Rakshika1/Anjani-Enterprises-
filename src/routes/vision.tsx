import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — Anjani Enterprises | Our Philosophy & Values" },
      {
        name: "description",
        content:
          "Realizing client goals through innovation. A manifesto on partnership, precision, long-term thinking and the values behind Anjani Enterprises.",
      },
      { property: "og:title", content: "Vision — Anjani Enterprises" },
      {
        property: "og:description",
        content:
          "A manifesto on partnership and precision — the values behind Anjani Enterprises.",
      },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <>
      <section className="bg-foreground text-white min-h-[70svh] flex items-center pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <p className="eyebrow reveal text-white/50">Our vision</p>
          <h1 className="reveal mt-8 display-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Realizing client goals
            <span className="block italic">through innovation.</span>
          </h1>
          <div className="rule-line reveal mt-12 mx-auto w-12 bg-white/30" />
          <p className="reveal mt-6 eyebrow text-white/50">— Anjani Enterprises</p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow reveal">A manifesto</p>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            <p className="reveal font-serif text-xl md:text-2xl leading-snug">
              We were not built to be the largest. We were built to be the most considered partner a global
              brand can have in this region.
            </p>
            <p className="reveal text-base leading-relaxed text-muted-foreground">
              That conviction shapes everything: the decision to keep printing, stitching and sampling under
              one roof; the choice to size our stitching floor at fifty thoughtful hands rather than
              hundreds; the discipline of operating on minimum margins so a relationship can survive a
              difficult season.
            </p>
            <p className="reveal text-base leading-relaxed text-muted-foreground">
              Innovation, to us, is the slow refinement of tolerance — colour after colour, run after run —
              until a client can rely on us the way they rely on their best in-house team.
            </p>
            <div className="rule-line reveal w-12" />
            <Link to="/contact" className="eyebrow story-link reveal inline-block">
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
