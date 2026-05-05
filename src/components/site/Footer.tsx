import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Anjani Enterprises</p>
            <p className="font-serif text-2xl leading-snug md:text-3xl max-w-md">
              Integrated textile printing, stitching and sampling — built for
              partnership with discerning global and domestic clients.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow mb-4">Visit</p>
            <address className="not-italic font-serif text-lg leading-relaxed text-foreground">
              Barkat Nagar, Jaipur
              <br />
              Rajasthan, India
            </address>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Contact</p>
            <p className="font-serif text-lg text-foreground">
              Mr. Himanshu Sharma
            </p>
            <div className="mt-1 flex flex-col gap-1">
              <a
                href="tel:+918290477917"
                className="story-link w-fit text-sm text-muted-foreground"
              >
                +91 82904 77917
              </a>
              <a
                href="mailto:rakshikas40@gmail.com"
                className="story-link w-fit text-sm text-muted-foreground"
              >
                rakshikas40@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="rule-line mt-16 mb-6" />

        <div className="flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Anjani Enterprises. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/units" className="story-link">Units</Link>
            <Link to="/capabilities" className="story-link">Capabilities</Link>
            <Link to="/compliance" className="story-link">Compliance</Link>
            <Link to="/vision" className="story-link">Vision</Link>
            <Link to="/contact" className="story-link">Contact</Link>
            <a href="/sitemap.xml" className="story-link" target="_blank" rel="noopener noreferrer">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
