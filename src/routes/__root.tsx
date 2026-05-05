import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/site/Layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-6">Error 404</p>
        <h1 className="display-serif text-6xl text-foreground">Not found</h1>
        <p className="mt-6 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <a
            href="/"
            className="eyebrow story-link text-foreground"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Anjani Enterprises — Premium Textile Manufacturing & Sourcing in Jaipur" },
      {
        name: "description",
        content:
          "Anjani Enterprises: Jaipur's premier integrated textile mill. Specialized in high-quality printing, stitching, and sampling for global and domestic fashion brands. One-stop solution for design to delivery.",
      },
      {
        name: "keywords",
        content: "Anjani Enterprises, Jaipur textile manufacturer, garment production India, textile printing mill Jaipur, stitching unit Sanganer, fashion sourcing India, sustainable textile manufacturing, custom apparel Jaipur, global design sourcing",
      },
      { name: "author", content: "Anjani Enterprises" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:title", content: "Anjani Enterprises — Premium Global Design & Sourcing Solution" },
      {
        property: "og:description",
        content:
          "Integrated textile printing, stitching and sampling in Jaipur, India. Excellence in craftsmanship for discerning global and domestic clients.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://anjanienterprises.com" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:site_name", content: "Anjani Enterprises" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Anjani Enterprises — Premium Textile Manufacturing" },
      { name: "twitter:description", content: "A one-stop solution for global design & sourcing based in Jaipur, India." },
    ],
    links: [
      { rel: "canonical", href: "https://anjanienterprises.com" },
      { rel: "sitemap", type: "application/xml", title: "Sitemap", href: "/sitemap.xml" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

import { StructuredData } from "@/components/site/StructuredData";

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <StructuredData />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <SiteLayout />;
}
