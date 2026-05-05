import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance & Standards — Anjani Enterprises | Certifications & Credentials" },
      {
        name: "description",
        content:
          "Factory License, Fire NOC, ISO certifications and MSME registration. Full compliance credentials held by Anjani Enterprises, Jaipur.",
      },
      { property: "og:title", content: "Compliance & Standards — Anjani Enterprises" },
      {
        property: "og:description",
        content:
          "Credentials and standards held by Anjani Enterprises — the foundations beneath our work.",
      },
    ],
  }),
  component: CompliancePage,
});

const credentials = [
  {
    name: "Factory License",
    body: "Operating licence under the Factories Act, registered with the Government of Rajasthan.",
  },
  {
    name: "Fire NOC",
    body: "No-objection certificate from the State Fire Service for both manufacturing units.",
  },
  {
    name: "ISO Certifications",
    body: "Quality management aligned with internationally recognised ISO standards.",
  },
  {
    name: "MSME Registration",
    body: "Registered as a Micro, Small and Medium Enterprise under the Government of India.",
  },
];

function CompliancePage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow reveal">Compliance & standards</p>
          <h1 className="reveal mt-6 display-serif text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Rigour, quietly held.
          </h1>
          <p className="reveal mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every credential below is a baseline, not a badge. We treat compliance as a precondition for
            partnership — the foundation beneath the work, not a marketing claim.
          </p>
          <div className="rule-line reveal mt-12 w-12" />
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ol className="border-t border-border">
            {credentials.map((c, i) => (
              <li
                key={c.name}
                className="reveal grid grid-cols-1 gap-4 md:grid-cols-12 border-b border-border py-10 md:py-14"
              >
                <div className="md:col-span-2">
                  <p className="eyebrow text-muted-foreground">0{i + 1}</p>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-serif text-2xl md:text-3xl">{c.name}</h2>
                </div>
                <div className="md:col-span-5 md:col-start-8">
                  <p className="text-base leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
