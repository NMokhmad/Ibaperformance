# Guide d'optimisation des images pour améliorer le LCP

## Images à créer

À partir de `Favorite4.webp` (actuellement 1,36 MB), créez 3 versions optimisées :

### 1. Version Mobile (320-640px)
- **Nom**: `Favorite4-mobile.webp`
- **Largeur**: 640px
- **Poids cible**: 50-100 KB
- **Qualité WebP**: 75-80%

### 2. Version Tablet (768-1024px)
- **Nom**: `Favorite4-tablet.webp`
- **Largeur**: 1024px
- **Poids cible**: 150-250 KB
- **Qualité WebP**: 80-85%

### 3. Version Desktop (1920px)
- **Nom**: `Favorite4-desktop.webp`
- **Largeur**: 1920px
- **Poids cible**: 300-400 KB
- **Qualité WebP**: 85%

## Outils recommandés

### Option 1 : Squoosh (En ligne - Recommandé)
1. Allez sur https://squoosh.app/
2. Uploadez `Favorite4.webp`
3. Choisissez WebP comme format de sortie
4. Réglez la largeur et la qualité
5. Téléchargez chaque version

### Option 2 : TinyPNG (En ligne)
1. https://tinypng.com/
2. Upload l'image
3. Téléchargez la version compressée
4. Redimensionnez si nécessaire

### Option 3 : ImageMagick/cwebp (Ligne de commande)

Si vous installez les outils :
```bash
# Installation sur Ubuntu/Debian
sudo apt-get install webp imagemagick

# Créer les 3 versions
cwebp -q 75 -resize 640 0 public/assets/Favorite4.webp -o public/assets/Favorite4-mobile.webp
cwebp -q 82 -resize 1024 0 public/assets/Favorite4.webp -o public/assets/Favorite4-tablet.webp
cwebp -q 85 -resize 1920 0 public/assets/Favorite4.webp -o public/assets/Favorite4-desktop.webp
```

## Emplacement des fichiers

Placez toutes les nouvelles images dans :
```
/public/assets/
  ├── Favorite4-mobile.webp   (50-100 KB)
  ├── Favorite4-tablet.webp   (150-250 KB)
  └── Favorite4-desktop.webp  (300-400 KB)
```

## Impact attendu sur le LCP

- **Avant** : 10,4s (mobile)
- **Après optimisation** : 1,5-2,5s (objectif)

### Améliorations apportées :
1. ✅ Préchargement de l'image LCP dans `<head>`
2. ✅ Utilisation de srcset responsive
3. ✅ Remplacement de Framer Motion par CSS animations
4. ✅ Attributs `fetchPriority="high"` et `decoding="async"`
5. ⏳ Compression et redimensionnement des images (À FAIRE)

## Vérification après déploiement

Testez sur :
- https://pagespeed.web.dev/
- https://web.dev/measure/
- Chrome DevTools > Lighthouse

Cible : LCP < 2,5s sur mobile 3G
