import { useLocation } from "@tanstack/react-router";

export function StructuredData() {
  const location = useLocation();
  
  const businessData = {
    "@context": "https://schema.org",
    "@type": "TextileMill",
    "name": "Anjani Enterprises",
    "description": "Integrated textile manufacturing unit in Jaipur, India. Specialized in printing, stitching, and sampling for global fashion brands.",
    "url": "https://anjanienterprises.com",
    "telephone": "+91-8290477917",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barkat Nagar",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.8839",
      "longitude": "75.8006"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/anjani_enterprises_jaipur"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Textile Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integrated Textile Printing",
            "description": "Dyeing, screen, block, and digital printing services."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Garment Stitching",
            "description": "Precision stitching and manufacturing for global brands."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sampling & Prototyping",
            "description": "Design and development of textile samples and prototypes."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
