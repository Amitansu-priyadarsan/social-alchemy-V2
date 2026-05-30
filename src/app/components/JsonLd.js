import { SITE } from "../lib/seo";

// Site-wide structured data (schema.org JSON-LD) so search engines and AI
// answer engines understand the entity, its services, and its location.
// Rendered once in the root layout. FAQPage schema lives in Faq.js.
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        email: SITE.email,
        founder: {
          "@type": "Person",
          name: SITE.founder,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.location.city,
          addressRegion: SITE.location.region,
          addressCountry: SITE.location.country,
        },
        areaServed: "Worldwide",
        knowsAbout: SITE.keywords,
        sameAs: SITE.sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Content & creative engines",
          itemListElement: SITE.services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
