import { createFileRoute } from "@tanstack/react-router";
import { EditorialImage } from "@/components/site/EditorialImage";
import barkatNagarImg from "@/assets/unit-barkat-nagar.jpg";
import sanganerImg from "@/assets/unit-sanganer.jpg";

export const Route = createFileRoute("/units")({
  head: () => ({
    meta: [
      { title: "Units — Anjani Enterprises | Manufacturing Facilities in Jaipur" },
      {
        name: "description",
        content:
          "Two facilities in Jaipur: an integrated office and manufacturing unit at Barkat Nagar, and a 50-person stitching unit at Sanganer. Complete textile infrastructure.",
      },
      { property: "og:title", content: "Units — Anjani Enterprises" },
      {
        property: "og:description",
        content:
          "Office and manufacturing at Barkat Nagar, stitching at Sanganer. The infrastructure behind a one-stop sourcing solution.",
      },
    ],
  }),
  component: UnitsPage,
});

const units = [
  {
    eyebrow: "Unit 01",
    name: "Barkat Nagar",
    role: "Office · Manufacturing · Sampling",
    body: "Our headquarters and the heart of design and printing. Houses the integrated mill, sampling studio and operations.",
    src: barkatNagarImg,
    alt: "Sandstone exterior of the Barkat Nagar manufacturing unit at golden hour.",
  },
  {
    eyebrow: "Unit 02",
    name: "Sanganer",
    role: "Stitching · 50-person capacity",
    body: "A purpose-built stitching floor in Jaipur's traditional textile district. Bulk production, quality control and finishing.",
    src: sanganerImg,
    alt: "Long view of the Sanganer stitching floor with rows of industrial machines.",
  },
];

function UnitsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow reveal">Our units</p>
          <h1 className="reveal mt-6 display-serif text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Two facilities, one workflow.
          </h1>
          <div className="rule-line reveal mt-12 w-12" />
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 space-y-24 md:space-y-40">
          {units.map((u, i) => {
            const isReversed = i % 2 === 1;
            return (
              <article
                key={u.name}
                className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16 items-center"
              >
                <div
                  className={`reveal ${
                    isReversed ? "md:col-span-7 md:col-start-6 md:order-2" : "md:col-span-7 md:order-1"
                  }`}
                >
                  <div className="max-h-[250px] md:max-h-[400px] overflow-hidden rounded-sm">
                    <EditorialImage src={u.src} alt={u.alt} ratio="16/10" kenBurns parallax width={1600} height={1000} />
                  </div>
                </div>
                <div
                  className={`${
                    isReversed ? "md:col-span-4 md:col-start-1 md:order-1" : "md:col-span-4 md:col-start-9 md:order-2"
                  }`}
                >
                  <p className="eyebrow reveal">{u.eyebrow}</p>
                  <h2 className="reveal mt-4 display-serif text-3xl md:text-4xl">{u.name}</h2>
                  <p className="reveal mt-3 font-serif italic text-base text-muted-foreground">{u.role}</p>
                  <div className="rule-line reveal my-6 w-12" />
                  <p className="reveal text-base leading-relaxed text-muted-foreground">{u.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
