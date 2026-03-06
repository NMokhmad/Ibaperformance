# Plan d'Action SEO — IBA Performance
**Score actuel : 44/100**
**Objectif : 75+/100 apres corrections**
**Date : 6 mars 2026**

---

## CRITIQUE — A corriger immediatement

### C1. Corriger les Canonical URLs

**Probleme** : Toutes les pages ont un canonical incorrect.
- `/` pointe vers `https://ibaperformance.com/` (sans www)
- `/blog` et `/realisations` pointent vers la homepage

**Action** : Dans le layout global et chaque page, setter le canonical correct :

```html
<!-- Layout global -->
<link rel="canonical" href="https://www.ibaperformance.com/" />

<!-- Page /blog -->
<link rel="canonical" href="https://www.ibaperformance.com/blog" />

<!-- Page /realisations -->
<link rel="canonical" href="https://www.ibaperformance.com/realisations" />

<!-- Page /realisations/[slug] -->
<link rel="canonical" href="https://www.ibaperformance.com/realisations/{slug}" />
```

**Impact SEO** : Tres eleve — resout la duplication de contenu entre toutes les pages.

---

### C2. Supprimer le Schema duplique et corriger les donnees

**Probleme** : Deux blocs AutomotiveBusiness avec des donnees contradictoires et des donnees fictives.

**Action** : Garder UN SEUL schema avec les donnees reelles :

```json
{
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "IBA Performance",
  "description": "Specialiste de la reprogrammation moteur et preparation automobile depuis 15 ans. +500 vehicules prepares a Paris.",
  "url": "https://www.ibaperformance.com",
  "logo": "https://www.ibaperformance.com/assets/Favorite-2-removebg-preview.webp",
  "telephone": "+33664826055",
  "email": "iba.performance@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADRESSE REELLE]",
    "addressLocality": "Paris",
    "postalCode": "[CODE POSTAL REEL]",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [LATITUDE REELLE],
    "longitude": [LONGITUDE REELLE]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "priceRange": "EUR EUR",
  "sameAs": [
    "https://www.instagram.com/iba_performance"
  ]
}
```

**A faire** : Remplacer l'adresse placeholder "123 Rue de la Performance, 75000" par l'adresse reelle.

---

### C3. Supprimer les Meta Tags dupliquees

**Probleme** : Deux composants injectent chacun un bloc complet de meta tags.

**Action** : Identifier les deux composants qui injectent des meta tags (probablement le layout `src/layouts/Layout.astro` ou equivalent ET un composant `SEO.astro`) et ne garder que l'un d'eux, en le rendant configurable par page.

Exemple de structure correcte (Astro) :

```astro
---
// Dans chaque page
const seoProps = {
  title: "Blog - Actualites & Conseils | IBA Performance",
  description: "...",
  canonical: "https://www.ibaperformance.com/blog",
  ogImage: "https://www.ibaperformance.com/assets/og-image.jpg"
}
---
<Layout {...seoProps}>
  ...
</Layout>
```

---

### C4. Creer les Pages Legales

**Probleme** : Mentions legales, CGV, Politique de confidentialite pointent vers `#`.

**Actions** :
1. Creer `/mentions-legales` avec : nom editeur, SIRET, hebergeur, directeur publication
2. Creer `/politique-confidentialite` avec conformite RGPD
3. Creer `/cgv` avec conditions generales de vente
4. Mettre a jour les liens dans le footer

**Note** : En France, les mentions legales sont obligatoires par la LCEN.

---

### C5. Corriger le Rendu JavaScript (SSR/SSG)

**Probleme** : Les pages /blog, /realisations, /realisations/[slug] ont un `<main>` vide sans JavaScript. Le contenu est charge depuis Sanity uniquement cote client.

**Action** : Activer le rendu serveur pour ces pages.

Si Astro :
```js
// astro.config.mjs
export default defineConfig({
  output: 'hybrid', // ou 'server'
  adapter: vercel(),
})
```

Dans chaque page Sanity :
```astro
---
// Fetcher le contenu cote serveur au lieu de cote client
const posts = await client.fetch('*[_type == "post"] | order(publishedAt desc)');
---
```

Si Next.js :
```js
// Utiliser getStaticProps ou generateStaticParams pour les pages dynamiques
export async function generateStaticParams() {
  const slugs = await client.fetch('*[_type == "realisations"].slug.current');
  return slugs.map(slug => ({ slug }));
}
```

---

## HAUTE — A corriger dans la semaine

### H1. Corriger la Navigation

**Probleme** : "Blog" et "Realisations" dans le nav pointent vers des ancres homepage (#blog, #realisations).

**Action** : Mettre a jour le composant Navigation :
```html
<!-- Avant -->
<a href="/#blog">Blog</a>
<a href="/#realisations">Realisations</a>

<!-- Apres -->
<a href="/blog">Blog</a>
<a href="/realisations">Realisations</a>
```

---

### H2. Corriger robots.txt

**Action** : Remplacer le robots.txt actuel par :

```
User-agent: *
Allow: /

# Ne pas indexer les fichiers techniques
Disallow: /*.map$
Disallow: /*.json$

# Sitemap
Sitemap: https://www.ibaperformance.com/sitemap.xml

Crawl-delay: 1
```

Supprimer `Disallow: /assets/` (bloque le rendu) et `Disallow: /*?*` (trop restrictif).

---

### H3. Completer le Sitemap

**Action** : Generer un sitemap dynamique incluant toutes les pages :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.ibaperformance.com/</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.ibaperformance.com/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.ibaperformance.com/realisations</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Genere dynamiquement depuis Sanity -->
  <!-- Pour chaque realisation : -->
  <url>
    <loc>https://www.ibaperformance.com/realisations/bmw-m3-f80</loc>
    <lastmod>2025-10-15</lastmod>
    <priority>0.7</priority>
  </url>
  <!-- Pour chaque article de blog -->
</urlset>
```

Idéalement, generer le sitemap.xml dynamiquement depuis Sanity via une route API.

---

### H4. Corriger l'Image Hero (Alt Text)

**Probleme** : L'image hero `Favorite4-desktop.webp` a `alt=""`.

**Action** :
```html
<!-- Avant -->
<img src="/assets/Favorite4-desktop.webp" alt="" loading="eager" />

<!-- Apres -->
<img
  src="/assets/Favorite4-desktop.webp"
  alt="Atelier IBA Performance - Reprogrammation moteur et preparation automobile a Paris"
  loading="eager"
  fetchpriority="high"
/>
```

---

### H5. Corriger la Meta Description

**Probleme** : Meta description dit "+10 ans" mais le site annonce "15 ans d'experience".

**Action** : Uniformiser sur "15 ans" dans la meta description :

```html
<meta name="description" content="Specialiste de la reprogrammation moteur et preparation automobile depuis 15 ans a Paris. ECU, stage 1/2/3, preparation circuit. +500 vehicules prepares." />
```

---

### H6. Configurer la Redirection www

**Action** : S'assurer que `ibaperformance.com` redirige en 301 vers `www.ibaperformance.com` (ou l'inverse selon la preference).

Dans Vercel, ajouter dans `vercel.json` :
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "ibaperformance.com" }],
      "destination": "https://www.ibaperformance.com/:path*",
      "permanent": true
    }
  ]
}
```

Puis mettre a jour canonical, og:url, og:image, sitemap et schema pour utiliser systematiquement `https://www.ibaperformance.com`.

---

## MOYENNE — A corriger dans le mois

### M1. Ajouter un Schema AggregateRating

Des que vous avez des avis clients, ajouter :

```json
{
  "@type": "AutomotiveBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  }
}
```

### M2. Ajouter Schema Service pour chaque prestation

```json
{
  "@type": "Service",
  "name": "Reprogrammation Moteur Stage 1",
  "provider": { "@type": "AutomotiveBusiness", "name": "IBA Performance" },
  "description": "Optimisation de la cartographie moteur pour gagner en puissance et couple.",
  "areaServed": { "@type": "City", "name": "Paris" }
}
```

### M3. Ajouter BreadcrumbList sur les sous-pages

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.ibaperformance.com/" },
    { "@type": "ListItem", "position": 2, "name": "Realisations", "item": "https://www.ibaperformance.com/realisations" },
    { "@type": "ListItem", "position": 3, "name": "BMW M3 F80", "item": "https://www.ibaperformance.com/realisations/bmw-m3-f80" }
  ]
}
```

### M4. Enrichir le Contenu de la Homepage

Ajouter au moins 500 mots supplementaires sur la homepage (objectif 800+ mots) :
- Description detaillee de chaque service
- Zone d'intervention (Paris, Ile-de-France, regions)
- Marques de vehicules traitees (BMW, Mercedes, Audi, Porsche...)
- Process de travail etape par etape
- FAQ courte (5-8 questions)

### M5. Ameliorer la Page A Propos

- Ajouter le nom du fondateur/technicien
- Photo professionnelle du technicien (pas une photo de stock)
- Certifications et formations
- Histoire de l'atelier

### M6. Remplacer la Photo d'Atelier

La photo "Atelier" provient d'Unsplash (photo generique). Remplacer par une vraie photo de l'atelier IBA Performance pour renforcer l'E-E-A-T.

### M7. Creer un Google Business Profile

Si pas encore fait :
1. Revendiquer/creer la fiche Google Business Profile
2. Ajouter l'adresse reelle, horaires, photos
3. Encourager les premiers avis clients
4. Ajouter le lien GBP dans le `sameAs` du schema

### M8. Sitemap Dynamique depuis Sanity

Creer une route `/sitemap.xml` qui fetche automatiquement tous les slugs depuis Sanity :

```js
// src/pages/sitemap.xml.js (Astro)
export async function GET() {
  const realisations = await client.fetch('*[_type == "realisations"].slug.current');
  const posts = await client.fetch('*[_type == "post"].slug.current');

  const urls = [
    'https://www.ibaperformance.com/',
    'https://www.ibaperformance.com/blog',
    'https://www.ibaperformance.com/realisations',
    ...realisations.map(s => `https://www.ibaperformance.com/realisations/${s}`),
    ...posts.map(s => `https://www.ibaperformance.com/blog/${s}`),
  ];

  return new Response(generateSitemap(urls), {
    headers: { 'Content-Type': 'application/xml' }
  });
}
```

---

## BASSE — Backlog

### B1. Creer llms.txt

```
# IBA Performance
> Garage specialise en preparation moteur et reprogrammation ECU a Paris.
> 15 ans d'experience, +500 vehicules prepares.

## Services
- Reprogrammation moteur (Stage 1, 2, 3)
- Preparation circuit
- Echappement sport
- Admission performance

## Contact
- Tel: +33 6 64 82 60 55
- Email: iba.performance@gmail.com
- Localisation: Paris, France
```

### B2. Ajouter Schema Article sur les Posts de Blog

Quand le blog sera actif, chaque article doit avoir un schema `Article` avec author, datePublished, image.

### B3. Configurer WebSite Schema avec SearchAction

```json
{
  "@type": "WebSite",
  "url": "https://www.ibaperformance.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.ibaperformance.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### B4. Precharger les Polices

```html
<link rel="preload" href="/fonts/votre-police.woff2" as="font" type="font/woff2" crossorigin>
```

### B5. Corriger les Balises Logo

```html
<!-- Logo : utiliser eager et taille explicite -->
<img
  src="/assets/Favorite-2-removebg-preview.webp"
  alt="IBA Performance"
  loading="eager"
  width="587"
  height="247"
/>
```

### B6. Corriger Vercel Speed Insights

Verifier la configuration Vercel Speed Insights dans le code :
```js
import { SpeedInsights } from "@vercel/speed-insights/astro"; // ou /next
```

---

## Recapitulatif Priorites

| Priorite | Nb | Gain SEO estime |
|----------|----|-----------------|
| CRITIQUE (C1-C5) | 5 | +20 points |
| HAUTE (H1-H6) | 6 | +8 points |
| MOYENNE (M1-M8) | 8 | +5 points |
| BASSE (B1-B6) | 6 | +2 points |
| **Score projete** | | **~79/100** |

---

*Plan d'action genere le 6 mars 2026 — IBA Performance SEO Audit*
