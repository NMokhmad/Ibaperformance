import { Helmet } from "react-helmet-async";
import { seoConfig } from "../../config/seo.config";

export function SEO({ 
  title = "IBA Performance - Préparation Moteur & Reprogrammation Automobile",
  description = "Spécialiste de la reprogrammation moteur et préparation automobile depuis 15 ans. Optimisation de performances, préparation circuit et stage personnalisé. +500 véhicules préparés en Île-de-France.",
  keywords = "reprogrammation moteur, préparation automobile, optimisation performance, stage moteur, préparation circuit, chiptuning, garage performance",
  ogImage = "/assets/og-image.jpg",
  canonical,
  type = "website",
}) {
  const siteUrl = seoConfig.siteUrl;
  const brandLogo = `${siteUrl}/android-chrome-512x512.png`;
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="IBA Performance" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="IBA Performance" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          "name": "IBA Performance",
          "description": description,
          "url": siteUrl,
          "logo": brandLogo,
          "image": `${siteUrl}${ogImage}`,
          "telephone": "+33664826055",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 Rue de la Grande Haie",
            "addressLocality": "Montereau-Fault-Yonne",
            "postalCode": "77130",
            "addressCountry": "FR",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.3858222,
            "longitude": 2.9690468,
          },
          "sameAs": [
            "https://www.instagram.com/iba_performance",
          ],
          "priceRange": "€€",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00",
            },
          ],
        })}
      </script>
    </Helmet>
  );
}
