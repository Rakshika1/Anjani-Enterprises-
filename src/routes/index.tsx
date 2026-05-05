import { createFileRoute, Link } from "@tanstack/react-router";
import { EditorialImage } from "@/components/site/EditorialImage";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

import heroImg from "@/assets/hero-mill.jpg";
import studioImg from "@/assets/studio.jpg";
import printingMillImg from "@/assets/printing-mill.jpg";
import stitchingImg from "@/assets/stitching.jpg";
import samplingImg from "@/assets/sampling.jpg";
import dyeingImg from "@/assets/dyeing.jpg";
import blockPrintImg from "@/assets/block-print.jpg";
import digitalPrintImg from "@/assets/digital-print.jpg";
import qualityImg from "@/assets/quality.jpg";
import cuttingImg from "@/assets/cutting.jpg";
import pressingImg from "@/assets/pressing.jpg";

export const Route = createFileRoute("/")(
  {
  head: () => ({
    meta: [
      { title: "Anjani Enterprises — Premium Textile Manufacturing & Sourcing in Jaipur" },
      {
        name: "description",
        content:
          "Anjani Enterprises is Jaipur's premier integrated textile mill. Printing, stitching and sampling for global and domestic fashion brands. Design to delivery, one-stop sourcing.",
      },
      { property: "og:title", content: "Anjani Enterprises — Premium Textile Manufacturing & Sourcing" },
      {
        property: "og:description",
        content:
          "Integrated printing, stitching and sampling for global and domestic clients. Based in Jaipur, India.",
      },
    ],
  }),
  component: HomePage,
});

const collections = [
  { title: "Integrated Printing Mill", caption: "Dyeing · Screen · Block · Digital", src: printingMillImg, alt: "Long table screen-printing inside the Anjani printing mill." },
  { title: "Stitching Units", caption: "50-person capacity · Sanganer & Barkat Nagar", src: stitchingImg, alt: "Industrial sewing machines arranged across the stitching floor." },
  { title: "Sampling Studio", caption: "Design and prototyping", src: samplingImg, alt: "Sampling studio worktable with folded fabric and tailoring tools." },
  { title: "Dyeing & Finishing", caption: "Colour development and after-treatment", src: dyeingImg, alt: "Lengths of dyed cotton hanging above traditional dye vats." },
  { title: "Block & Hand Print", caption: "Heritage techniques, modern tolerances", src: blockPrintImg, alt: "Hand-carved wooden block lifted above a freshly printed cotton length." },
  { title: "Digital Print Line", caption: "Reactive and pigment, in-line", src: digitalPrintImg, alt: "Digital fabric printer carriage moving across cream cotton." },
  { title: "Quality Inspection", caption: "Light box review, end-to-end traceability", src: qualityImg, alt: "Spectra colour-matching light box reviewing fabric swatches." },
  { title: "Cutting Room", caption: "Markers, lay and cut", src: cuttingImg, alt: "Cutting table with paper patterns laid across cream fabric." },
  { title: "Pressing & Pack", caption: "Final finish, fold and despatch", src: pressingImg, alt: "Stack of folded cream and indigo cotton beside a steam iron." },
];

const machinery = [
  { name: "Jumbo Zegger", note: "Wide-format engraved roller printing." },
  { name: "Lopager", note: "High-precision continuous print line." },
  { name: "Digital Printing Systems", note: "Reactive and pigment dyestuff." },
  { name: "Spectra Light Box", note: "ISO-aligned colour assessment." },
];

const compliance = ["Factory License", "Fire NOC", "ISO Certifications", "MSME Registration"];

const stats = [
  { value: 50, suffix: "+", label: "Stitching artisans" },
  { value: 2, suffix: "", label: "Manufacturing units" },
  { value: 4, suffix: "", label: "Print disciplines" },
  { value: 1, suffix: "", label: "Integrated workflow" },
];

function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden" aria-label="Hero">
        <img
          src={heroImg}
          alt="Sun-lit long-table screen-printing operation in an Indian textile mill."
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        {/* Gradient vignette — strong at top for nav, medium at center for hero text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.02 0 0 / 0.65) 0%, oklch(0.05 0 0 / 0.35) 40%, oklch(0.05 0 0 / 0.55) 100%)",
          }}
          aria-hidden
        />
        {/* Subtle grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
          aria-hidden
        />

        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
          data-stagger="160"
        >
          <p className="eyebrow text-white/80 reveal">Established in Jaipur · India</p>
          <h1 className="reveal mt-6 max-w-5xl display-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Anjani Enterprises
          </h1>
          <p className="reveal mt-6 font-serif italic text-white/85 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl">
            A premium one-stop solution for global and domestic design & sourcing.
          </p>
          <div className="reveal mt-10 h-px w-16 bg-white/50 origin-left">
            <div className="draw-rule h-full w-full bg-white/60" />
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 eyebrow text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2"
          aria-label="Scroll to about section"
        >
          <span>Scroll</span>
          <span className="scroll-cue inline-block h-6 w-px bg-white/40" />
        </a>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="bg-background py-20 md:py-32">
        <div
          className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10"
          data-stagger="100"
        >
          <div className="md:col-span-5 reveal">
            <div className="max-h-[250px] md:max-h-[420px] overflow-hidden rounded-sm">
              <EditorialImage
                src={studioImg}
                alt="Sun-lit textile design studio with folded fabric on a wooden worktable."
                ratio="3/2"
                caption="The studio · Barkat Nagar"
                kenBurns
                parallax
                width={1024}
                height={680}
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <p className="eyebrow reveal">A house of integrated capability</p>
            <h2 className="reveal mt-6 display-serif text-3xl md:text-4xl lg:text-5xl">
              Built on minimum margins, long-term partnerships and the discipline of doing every step in-house.
            </h2>
            <p className="reveal mt-8 text-base leading-relaxed text-muted-foreground max-w-xl">
              Anjani Enterprises brings together an integrated printing mill, a 50-person stitching unit and a
              dedicated sampling studio under a single, considered workflow. We exist to be a steady partner to
              both international and domestic brands — accountable from the first sketch to the final fold.
            </p>

            <blockquote className="reveal mt-10 border-l-2 border-foreground/30 pl-6 max-w-lg">
              <p className="font-serif italic text-xl md:text-2xl leading-snug text-foreground/80">
                "We choose fewer clients and longer relationships — and design the business around that choice."
              </p>
            </blockquote>

            <Link
              to="/vision"
              className="eyebrow story-link reveal mt-10 inline-block text-foreground"
            >
              Read our vision
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="bg-secondary border-y border-border" aria-label="Key figures">
        <div
          className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-2 md:grid-cols-4"
          data-stagger="100"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal py-10 md:py-16 ${i !== 0 ? "md:border-l border-border" : ""} ${
                i % 2 === 1 ? "border-l border-border md:border-l" : ""
              } ${i >= 2 ? "border-t border-border md:border-t-0" : ""} px-4 md:px-8`}
            >
              <div className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tabular-nums tracking-tight text-foreground">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <p className="eyebrow mt-3 text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ COLLECTIONS ═══════════════ */}
      <section className="bg-background py-20 md:py-32" aria-label="Our work">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 mb-12 md:mb-20" data-stagger="100">
            <div className="md:col-span-4">
              <p className="eyebrow reveal">Collections</p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <h2 className="reveal display-serif text-3xl md:text-4xl lg:text-5xl">
                Manufacturing as an editorial subject —
                <span className="italic text-muted-foreground"> precise, deliberate, repeatable.</span>
              </h2>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            data-stagger="60"
          >
            {collections.map((c) => (
              <Link to="/capabilities" key={c.title} className="reveal group block">
                <div className="overflow-hidden rounded-sm max-h-[250px] sm:max-h-[350px]">
                  <div className="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]">
                    <EditorialImage
                      src={c.src}
                      alt={c.alt}
                      ratio="3/2"
                      width={1024}
                      height={680}
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg md:text-xl">{c.title}</h3>
                  <span className="eyebrow text-muted-foreground translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    View →
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.caption}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/capabilities" className="eyebrow story-link">
              Explore capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ TECHNICAL SPECS ═══════════════ */}
      <section className="bg-secondary py-20 md:py-32 border-y border-border" aria-label="Machinery">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 mb-12" data-stagger="100">
            <div className="md:col-span-4">
              <p className="eyebrow reveal">Technical specifications</p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <h2 className="reveal display-serif text-3xl md:text-4xl lg:text-5xl">
                Instruments, not equipment.
              </h2>
              <p className="reveal mt-6 text-base text-muted-foreground max-w-lg leading-relaxed">
                Each machine on our floor is selected for the tolerance it holds, the colour it returns and
                the consistency it makes possible across long runs.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border"
            data-stagger="80"
          >
            {machinery.map((m, i) => (
              <div
                key={m.name}
                className={`reveal group border-b border-border py-8 px-6 transition-colors duration-500 hover:bg-background ${
                  i !== 0 ? "lg:border-l" : ""
                } ${i % 2 === 1 ? "sm:border-l" : ""}`}
              >
                <p className="eyebrow text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-xl md:text-2xl">{m.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.note}</p>
                <div className="mt-4 h-px w-8 bg-foreground origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COMPLIANCE MARQUEE ═══════════════ */}
      <section className="bg-background py-12 md:py-16 border-b border-border" aria-label="Credentials">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-6 flex items-center justify-between">
          <p className="eyebrow reveal">Compliance & standards</p>
          <Link to="/compliance" className="eyebrow story-link reveal">
            All credentials →
          </Link>
        </div>
        <div className="marquee" aria-label="Compliance credentials">
          <div className="marquee-track">
            {[...compliance, ...compliance, ...compliance].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-serif text-2xl md:text-4xl text-foreground/80 whitespace-nowrap flex items-center gap-12"
              >
                {item}
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/25" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ VISION ANCHOR ═══════════════ */}
      <section className="bg-foreground py-28 md:py-40 overflow-hidden relative" aria-label="Vision">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
          aria-hidden
        />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center" data-stagger="140">
          <p className="eyebrow reveal text-white/50">Our vision</p>
          <h2 className="reveal mt-8 display-serif text-white text-4xl md:text-5xl lg:text-6xl leading-[1]">
            Realizing client goals
            <span className="block italic">through innovation.</span>
          </h2>
          <div className="reveal mt-12 mx-auto h-px w-12 bg-white/30 origin-center">
            <div className="draw-rule h-full w-full bg-white/50" />
          </div>
          <p className="reveal mt-6 eyebrow text-white/50">— Anjani Enterprises</p>
        </div>
      </section>

      {/* ═══════════════ CONTACT PREVIEW ═══════════════ */}
      <section className="bg-background py-20 md:py-32" aria-label="Contact">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5" data-stagger="100">
            <p className="eyebrow reveal">Begin a conversation</p>
            <h2 className="reveal mt-6 display-serif text-3xl md:text-4xl lg:text-5xl">
              We work best with brands ready to invest in the long view.
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center" data-stagger="100">
            <div className="reveal">
              <p className="eyebrow text-muted-foreground">Contact</p>
              <p className="mt-3 font-serif text-2xl md:text-3xl">Mr. Himanshu Sharma</p>
              <a
                href="tel:+918290477917"
                className="story-link mt-2 inline-block text-base text-foreground"
              >
                +91 82904 77917
              </a>
            </div>

            <div className="reveal h-px w-12 bg-border my-8" />

            <div className="reveal">
              <p className="eyebrow text-muted-foreground">Address</p>
              <address className="not-italic mt-3 font-serif text-xl leading-relaxed">
                Barkat Nagar, Jaipur
                <br />
                Rajasthan, India
              </address>
            </div>

            <Link
              to="/contact"
              className="eyebrow story-link reveal mt-10 inline-block w-fit"
            >
              Send an enquiry →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ MAP ═══════════════ */}
      <section className="bg-secondary border-t border-border" aria-label="Location">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-16">
          <div className="flex items-center justify-between mb-6">
            <p className="eyebrow reveal">Our location</p>
            <a
              href="https://www.google.com/maps/search/Barkat+Nagar,+Jaipur,+Rajasthan,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow story-link reveal"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="reveal overflow-hidden rounded-sm border border-border">
            <iframe
              title="Anjani Enterprises location — Barkat Nagar, Jaipur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14233.5!2d75.82!3d26.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b6e6c6b6a1%3A0x4b87b5a5c5c5c5c5!2sBarkat%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
