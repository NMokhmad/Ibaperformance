# Rapport d'Audit SEO Complet — IBA Performance
**URL auditée** : https://www.ibaperformance.com/
**Date** : 6 mars 2026
**Auditeur** : Claude SEO Agent

---

## Resume Executif

| Metrique | Valeur |
|----------|--------|
| **Score SEO Global** | **44 / 100** |
| Type de business | Garage performance automobile — Local Service, Paris |
| CMS / Stack | Sanity.io + Vercel (Astro ou Next.js) |
| Langue | Francais (fr_FR) |
| Pages indexables detectees | 4 (/, /blog, /realisations, /realisations/bmw-m3-f80) |
| Pages dans le sitemap | 3 (/, /realisations, /blog) |

### Score par Categorie

| Categorie | Poids | Score | Contribution |
|-----------|-------|-------|-------------|
| SEO Technique | 25% | 35/100 | 8.75 |
| Qualite du Contenu | 25% | 40/100 | 10.00 |
| On-Page SEO | 20% | 40/100 | 8.00 |
| Schema / Donnees Structurees | 10% | 30/100 | 3.00 |
| Performance (CWV) | 10% | 90/100 | 9.00 |
| Images | 5% | 70/100 | 3.50 |
| Readiness IA (GEO) | 5% | 35/100 | 1.75 |
| **TOTAL** | **100%** | **44/100** | |

### Top 5 Problemes Critiques
1. CRITIQUE — Canonical URLs incorrectes : www vs non-www + sous-pages pointent vers la homepage
2. CRITIQUE — Deux blocs Schema AutomotiveBusiness en conflit avec un numero de telephone placeholder (+33123456789) et une adresse fictive
3. CRITIQUE — Balises meta dupliquees (description, og:title, og:image, twitter:*, etc. en double)
4. CRITIQUE — Contenu JavaScript non rendu : Services et Realisations affichent "Chargement..." sans JS
5. CRITIQUE — Pages legales brisees (Mentions legales, CGV, Politique de confidentialite pointent vers `#`)

### Top 5 Quick Wins
1. Unifier le canonical en `https://www.ibaperformance.com/` sur toutes les pages
2. Supprimer le Schema duplique et corriger l'adresse placeholder
3. Supprimer les balises meta dupliquees
4. Creer les pages legales (Mentions legales, CGV, Politique de confidentialite)
5. Completer le sitemap avec les articles de blog et realisations individuels

---

## 1. SEO Technique — Score : 35/100

### 1.1 Canonical URLs — CRITIQUE

| Page | Canonical actuel | Attendu |
|------|-----------------|---------|
| `/` | `https://ibaperformance.com/` | `https://www.ibaperformance.com/` |
| `/blog` | `https://ibaperformance.com/` | `https://www.ibaperformance.com/blog` |
| `/realisations` | `https://ibaperformance.com/` | `https://www.ibaperformance.com/realisations` |

Problemes identifies :
- Le canonical pointe vers `ibaperformance.com` (sans www) alors que le site repond sur `www.ibaperformance.com` -> duplication de contenu
- `/blog` et `/realisations` ont le meme canonical que la homepage -> Google considere ces pages comme des doublons de l'accueil et ne les indexera pas independamment
- Impact : impossible pour Google de comprendre quelle est la page canonique, dilution du PageRank

### 1.2 robots.txt — HAUTE

```
Disallow: /assets/          <- Bloque le rendu CSS/images par Googlebot
Disallow: /*?*              <- Bloque TOUS les parametres URL
Allow: /$                   <- Redondant
Allow: /realisations
Allow: /blog
```

Problemes :
- `Disallow: /assets/` empeche Google de charger les feuilles de style et images necessaires au rendu — affecte le Mobile Friendly Test et le CWV
- `Disallow: /*?*` bloque tous les URLs avec parametres

### 1.3 Sitemap XML — HAUTE

Etat actuel : 3 URLs seulement (/, /realisations, /blog)
- Les articles de blog individuels sont commentes dans le fichier
- Les realisations individuelles sont commentees
- Date `lastmod` de 2025-10-20 pour toutes les pages (non dynamique)
- Le sitemap declare `https://ibaperformance.com/` (sans www) — incoherent avec le domaine principal

Pages manquantes dans le sitemap :
- `/realisations/bmw-m3-f80` (et toutes autres realisations)
- Tous les articles de blog
- Pages legales (une fois creees)

### 1.4 Www vs Non-www — HAUTE

Le site repond sur www.ibaperformance.com mais canonical, og:url, twitter:url, sitemap et schema url pointent tous vers ibaperformance.com (sans www).

Action : choisir un seul domaine et configurer la redirection 301 permanente pour l'autre.

### 1.5 Contenu JavaScript-Dependant — CRITIQUE

Sections chargees uniquement via JavaScript (appels API Sanity) :
- Section "Services" -> affiche "Chargement des services..." avant hydratation
- Section "Realisations" (homepage) -> affiche "Chargement des realisations..."
- Page `/blog` -> `<main>` vide sans JavaScript (107 mots seulement)
- Page `/realisations` -> `<main>` vide sans JavaScript
- Page `/realisations/bmw-m3-f80` -> `<main>` vide sans JavaScript

Si le site n'est pas en SSR/SSG complet, ce contenu n'est pas indexe. Googlebot peut manquer le contenu charge apres le rendu initial.

Recommandation : implémenter Server-Side Rendering (SSR) ou Static Site Generation (SSG) pour toutes ces pages.

### 1.6 Vercel Speed Insights — MOYENNE

Les appels `/_vercel/speed-insights/vitals` retournent tous `ERR_ABORTED` -> les Core Web Vitals reels ne sont pas remontes a Vercel Analytics.

---

## 2. Qualite du Contenu — Score : 40/100

### 2.1 Nombre de Mots par Page

| Page | Mots | Seuil Recommande | Statut |
|------|------|-----------------|--------|
| Homepage (`/`) | ~350 | 800+ | Insuffisant |
| `/blog` | ~107 | 300+ (listing) | Tres faible |
| `/realisations` | ~125 | 300+ (listing) | Tres faible |

Note : le contenu charge dynamiquement (services, realisations) n'est pas compte car absent du DOM initial.

### 2.2 Incoherences de Contenu — HAUTE

| Element | Valeur 1 | Valeur 2 |
|---------|----------|----------|
| Experience | "+10 ans" (meta description) | "15 ans" (hero, About) |
| Telephone Schema 1 | +33664826055 | — |
| Telephone Schema 2 | +33123456789 (PLACEHOLDER) | — |
| Prix Schema 1 | EUR EUR | — |
| Prix Schema 2 | EUR EUR EUR | — |

L'incoherence "+10 ans" vs "15 ans" nuit a la credibilite E-E-A-T.

### 2.3 Pages Legales Manquantes — CRITIQUE

Les liens footer "Mentions legales", "Politique de confidentialite" et "CGV" pointent vers `#`.
En France, les mentions legales sont obligatoires legalement (LCEN). Leur absence :
- Nuit a la confiance utilisateur (signal E-E-A-T negatif)
- Expose a des risques legaux
- Signale aux bots SEO un site incomplet

### 2.4 E-E-A-T

| Signal | Etat |
|--------|------|
| Nom/identite du proprietaire | Absent |
| Diplomes/certifications | Absent |
| Temoignages clients | Absent |
| Avis Google / Trustpilot | Absent |
| Presence sur les reseaux | Instagram uniquement |
| Adresse physique verifiable | "Paris, France" + schema placeholder |
| Numero de telephone | Present (+33 6 64 82 60 55) |
| Historique documente (15 ans) | Mentionne mais non prouve |

### 2.5 Blog

La section blog propose un encart mais aucun article n'est publie ni visible. Le blog n'alimente pas le SEO actuellement.

---

## 3. On-Page SEO — Score : 40/100

### 3.1 Balises Title

| Page | Title | Longueur | Statut |
|------|-------|----------|--------|
| `/` | "IBA Performance - Reprogrammation Moteur & Preparation Automobile" | 64 car. | OK |
| `/blog` | "Blog - Actualites & Conseils Performance Automobile - IBA Performance" | 70 car. | Leger |
| `/realisations` | "Nos Realisations - Portfolio Preparation Automobile - IBA Performance" | 70 car. | Leger |

### 3.2 Balises Meta Dupliquees — CRITIQUE

La page d'accueil contient DEUX jeux complets de meta tags :
- description x2
- og:type, og:url, og:title, og:description, og:image x2
- twitter:card, twitter:url, twitter:title, twitter:description, twitter:image x2
- robots x2, keywords x2, author x2

Google prend la derniere declaree ou les ignore — resultat imprévisible dans les SERPs.
Cause probable : deux composants injectent des metadonnees sans deduplication.

### 3.3 Navigation — HAUTE

| Lien nav | Destination actuelle | Attendu |
|----------|---------------------|---------|
| "Blog" | `/#blog` (ancre homepage) | `/blog` |
| "Realisations" | `/#realisations` (ancre) | `/realisations` |

Ceci empeche Google d'attribuer du PageRank aux pages /blog et /realisations.

### 3.4 Liens Internes

| Lien | Destination | Statut |
|------|------------|--------|
| Decouvrir le blog | `/blog` | OK |
| Voir toutes les realisations | `/realisations` | OK |
| BMW M3 F80 | `/realisations/bmw-m3-f80` | OK |
| Mentions legales | `#` | BRISE |
| Politique de confidentialite | `#` | BRISE |
| CGV | `#` | BRISE |

---

## 4. Schema / Donnees Structurees — Score : 30/100

### 4.1 Deux schemas AutomotiveBusiness en conflit — CRITIQUE

Schema 1 (probablement layout global) :
- telephone: "+33664826055"  (correct)
- streetAddress: "123 Rue de la Performance"  (PLACEHOLDER)
- postalCode: "75000"  (invalide — Paris = 750XX avec 2 chiffres)
- priceRange: "EUR EUR"
- Horaires: Lun-Ven + Sam matin

Schema 2 (probablement composant page) :
- telephone: "+33123456789"  (PLACEHOLDER generique)
- address: { addressLocality: "Paris" }  (incomplet)
- priceRange: "EUR EUR EUR"
- Horaires: Lun-Ven uniquement (samedi manquant)

Google Search Console rejettera ces donnees incoherentes.

### 4.2 Erreurs specifiques dans le Schema

- `image: "https://ibaperformance.com/logo.jpg"` -> fichier probablement inexistant
- Adresse "123 Rue de la Performance, 75000 Paris" est fictive
- Les deux schemas utilisent des URLs sans www alors que le site est sur www

### 4.3 Schemas Manquants

| Schema | Interet | Priorite |
|--------|---------|----------|
| AggregateRating | Etoiles dans les SERPs | Haute |
| Service pour chaque prestation | Rich results | Haute |
| BreadcrumbList sur sous-pages | Fil d'Ariane SERPs | Moyenne |
| Article sur les posts de blog | Rich results articles | Haute |

---

## 5. Performance — Score : 90/100

### 5.1 Core Web Vitals (mesures lab / Playwright)

| Metrique | Valeur | Seuil Bon | Statut |
|----------|--------|-----------|--------|
| LCP | 128 ms | < 2 500 ms | Excellent |
| CLS | 0.00 | < 0.10 | Parfait |
| TTFB | 10 ms | < 800 ms | Excellent |
| DOM Content Loaded | 49 ms | — | Excellent |
| INP | Non mesure | < 200 ms | — |

Note : mesures en environnement lab. Les CWV reels (champ) peuvent differer selon connexion et charge Sanity API.

### 5.2 Recommandations Performance

- Ajouter `fetchpriority="high"` sur l'image hero (Favorite4-desktop.webp)
- Remplacer `loading="auto"` par `loading="eager"` sur le logo
- Precharger la police principale avec `<link rel="preload">`

---

## 6. Images — Score : 70/100

| Image | Alt Text | Format | Lazy Load | Probleme |
|-------|----------|--------|-----------|---------|
| Logo header | "IBA Performance" | WebP | auto | loading="auto" -> utiliser eager |
| Hero image (Favorite4-desktop.webp) | VIDE | WebP | eager | Alt manquant |
| Realisation BMW M3 | "BMW M3 F80" | WebP (Sanity CDN) | lazy | OK |
| Atelier (Unsplash) | "Atelier IbaPerformance..." | JPEG | lazy | Photo de stock, non authentique |
| Logo footer | "IBA Performance" | WebP | auto | loading="auto" |

Problemes principaux :
- Image hero sans alt text : manque de mots-cles et probleme d'accessibilite
- Photo d'atelier provenant d'Unsplash : signal E-E-A-T negatif, remplacer par une vraie photo

---

## 7. AI Search Readiness (GEO) — Score : 35/100

| Signal | Etat |
|--------|------|
| Contenu structure et factuel | Faible (peu de contenu textuel) |
| Donnees verifiables (adresse, telephone) | Adresse placeholder |
| Auteur/expert identifie | Absent |
| Sources et preuves sociales | Aucun avis client |
| Blog avec guides techniques | Vide actuellement |
| llms.txt | Absent |

Recommandations :
1. Creer un blog actif avec guides techniques sur reprogrammation moteur, stage 1/2/3, marques compatibles
2. Ajouter une page FAQ avec questions/reponses sur les services
3. Documenter l'expertise : biographie du technicien, certifications, equipements
4. Creer `llms.txt` a la racine pour controler l'acces des IA
5. Collecter des avis Google Business Profile

---

## Informations Techniques Complementaires

### Meta Tags

| Tag | Valeur | Probleme |
|-----|--------|---------|
| `lang` | `fr` | OK |
| `charset` | UTF-8 | OK |
| `viewport` | width=device-width, initial-scale=1.0 | OK |
| `geo.region` | FR-75 | OK (bonus local SEO) |
| `revisit-after` | 7 days | Depreciee, ignoree par Google |
| `keywords` | Present | Ignore par Google depuis 2009 |

### Hreflang
- Absent (acceptable pour un site uniquement en francais ciblant la France)

### Open Graph
- Deux jeux de balises OG en conflit
- og:image pointe vers deux URLs differentes

---

*Rapport genere le 6 mars 2026 — IBA Performance SEO Audit*
