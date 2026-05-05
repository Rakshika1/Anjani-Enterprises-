import { createFileRoute } from "@tanstack/react-router";
import { EditorialImage } from "@/components/site/EditorialImage";
import printingMillImg from "@/assets/printing-mill.jpg";
import stitchingImg from "@/assets/stitching.jpg";
import samplingImg from "@/assets/sampling.jpg";
import blockPrintImg from "@/assets/block-print.jpg";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Anjani Enterprises | Printing, Stitching & Sampling" },
      {
        name: "description",
        content:
          "Integrated printing mill with Jumbo Zegger and Lopager, 50-person stitching unit, sampling studio and heritage craft. Complete textile manufacturing capabilities in Jaipur.",
      },
      { property: "og:title", content: "Capabilities — Anjani Enterprises" },
      {
        property: "og:description",
        content:
          "Printing, stitching, sampling, heritage craft and the precision machinery that makes consistent, long-run production possible.",
      },
    ],
  }),
  component: CapabilitiesPage,
});

const capabilities = [
  {
    eyebrow: "01 · Print",
    title: "Integrated Printing Mill",
    body: "Dyeing, screen, block and digital printing — co-located so colour, hand-feel and quality stay aligned across techniques.",
    items: ["Reactive & pigment dyeing", "Long-table screen", "Hand block", "Digital reactive & pigment"],
    src: printingMillImg,
    alt: "Long table screen-printing operation in the Anjani printing mill.",
  },
  {
    eyebrow: "02 · Stitch",
    title: "Stitching Units",
    body: "A 50-person stitching capacity across Sanganer and Barkat Nagar — sized for considered runs, not commodity volume.",
    items: ["Lay & cut", "Single-needle and overlock", "In-line QC", "Press, fold, pack"],
    src: stitchingImg,
    alt: "Industrial sewing machines arranged across the stitching floor.",
  },
  {
    eyebrow: "03 · Sample",
    title: "Sampling Studio",
    body: "Design and prototyping in-house. Patterns, strike-offs and lab-dips moved through the same hands that will run bulk.",
    items: ["Pattern making", "Strike-offs", "Lab dips", "Pre-production samples"],
    src: samplingImg,
    alt: "Sampling studio worktable with folded fabric and tailoring tools.",
  },
  {
    eyebrow: "04 · Craft",
    title: "Hand Work & Heritage Craft",
    body: "Traditional Jaipur hand-work techniques integrated into modern production lines. From intricate embroidery to delicate hand-finishing.",
    items: ["Hand embroidery & Aari", "Adda work", "Gota Patti & Zardosi", "Hand-tacking & finishing"],
    src: blockPrintImg,
    alt: "Artisan performing intricate hand-work on a textile frame.",
  },
];

const machinery = [
  { name: "Jumbo Zegger", note: "Wide-format engraved roller printing for repeat patterns at scale." },
  { name: "Lopager", note: "High-precision continuous print line for long uniform runs." },
  { name: "Digital Printing Systems", note: "Reactive and pigment dyestuff with strict colour-management." },
  { name: "Spectra Light Box", note: "ISO-aligned colour assessment under standardised illuminants." },
];

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Four disciplines, deliberately under one roof."
      />

      <section className="bg-background pb-20 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 space-y-24 md:space-y-40">
          {capabilities.map((cap, i) => {
            const isReversed = i % 2 === 1;
            return (
              <article
                key={cap.title}
                className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16 items-center"
              >
                <div
                  className={`reveal ${
                    isReversed ? "md:col-span-6 md:col-start-7 md:order-2" : "md:col-span-6 md:order-1"
                  }`}
                >
                  <div className="max-h-[280px] md:max-h-[500px] overflow-hidden rounded-sm">
                    <EditorialImage src={cap.src} alt={cap.alt} ratio="3/2" parallax width={1024} height={680} />
                  </div>
                </div>
                <div
                  className={`${
                    isReversed ? "md:col-span-5 md:col-start-1 md:order-1" : "md:col-span-5 md:col-start-8 md:order-2"
                  }`}
                >
                  <p className="eyebrow reveal">{cap.eyebrow}</p>
                  <h2 className="reveal mt-4 display-serif text-3xl md:text-4xl">{cap.title}</h2>
                  <p className="reveal mt-4 text-base leading-relaxed text-muted-foreground">{cap.body}</p>
                  <ul className="reveal mt-6 space-y-2 border-t border-border pt-5">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-baseline gap-3 font-serif text-base md:text-lg">
                        <span className="text-muted-foreground text-xs">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 mb-12">
            <div className="md:col-span-4">
              <p className="eyebrow reveal">Machinery</p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <h2 className="reveal display-serif text-3xl md:text-4xl">
                The instruments behind the work.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {machinery.map((m, i) => (
              <div
                key={m.name}
                className={`reveal border-b border-border py-8 px-6 ${
                  i !== 0 ? "lg:border-l" : ""
                } ${i % 2 === 1 ? "sm:border-l" : ""}`}
              >
                <p className="eyebrow text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-xl md:text-2xl">{m.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal mt-6 display-serif text-4xl md:text-5xl lg:text-6xl max-w-4xl">
          {title}
        </h1>
        <div className="rule-line reveal mt-12 w-12" />
      </div>
    </section>
  );
}
