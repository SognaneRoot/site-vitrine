# Palette de Couleurs - Vitrine Culture

## 🎨 Couleurs Principales (Palette Africaine)

### Couleurs Chaudes Principales

- **Terre Cuite** : `#CD6155` - Couleur signature pour les éléments principaux
- **Rouge Chaleureux** : `#E74C3C` - Pour les accents et call-to-actions
- **Ocre** : `#D68910` - Couleur traditionnelle africaine

### Couleurs Dorées

- **Doré Lumineux** : `#F4D03F` - Pour les highlights et éléments premium
- **Doré Profond** : `#D4AF37` - Pour les contrastes dorés

### Couleurs Neutres

- **Bleu Nuit** : `#1B2631` - Couleur sombre principale pour les textes
- **Blanc** : `#FDFEFE` - Blanc pur pour les arrière-plans

---

## 🌈 Couleurs Tailwind Utilisées

### Orange (Couleur primaire du projet)

- `orange-50` - Arrière-plans très clairs
- `orange-100` - Arrière-plans clairs, badges secondaires
- `orange-200` - Bordures discrètes
- `orange-300` - Bordures normales, hover states
- `orange-400` - Éléments moyennement accentués
- `orange-500` - Couleur principale orange
- `orange-600` - Hover states pour orange-500

### Red (Couleur secondaire)

- `red-50` - Arrière-plans très clairs
- `red-400` - Éléments moyennement accentués
- `red-500` - Couleur principale rouge
- `red-600` - Hover states pour red-500

### Slate (Couleurs neutres)

- `slate-50` - Arrière-plans très clairs
- `slate-300` - Textes secondaires clairs
- `slate-400` - Textes tertiaires, placeholders
- `slate-600` - Textes secondaires
- `slate-700` - Textes normaux
- `slate-800` - Textes principaux, headers

### Couleurs Complémentaires

#### Yellow

- `yellow-400` - Accents dorés, étoiles, highlights

#### Blue

- `blue-400` - Liens, éléments informatifs
- `blue-500` - Actions secondaires
- `blue-600` - Réseaux sociaux (Facebook)

#### Green/Emerald

- `green-400` - Success states, validations
- `green-500` - Boutons de confirmation
- `emerald-400` - Éléments nature, croissance
- `emerald-500` - Actions positives

#### Purple

- `purple-400` - Éléments créatifs, artistiques

#### Pink

- `pink-400` - Éléments affectifs
- `pink-600` - Réseaux sociaux (Instagram)

---

## 🎯 Gradients Principaux

### Gradients Chauds (Signature)

- `from-orange-500 to-red-500` - Gradient principal du site
- `from-orange-400 to-red-400` - Gradient secondaire
- `from-orange-600 to-red-600` - Gradient hover principal
- `from-yellow-400 to-orange-400` - Gradient doré

### Gradients Complémentaires

- `from-blue-400 to-purple-400` - Éléments créatifs
- `from-green-400 to-emerald-400` - Éléments nature
- `from-slate-50 to-orange-50` - Arrière-plans doux

---

## 🎨 Couleurs du Système de Design (CSS Variables)

### Mode Clair

```css
--background: #ffffff --foreground: oklch(0.145 0 0)
  /* Noir doux */ --primary: #030213 /* Bleu très sombre */
  --secondary: oklch(0.95 0.0058 264.53) /* Gris très clair */
  --muted: #ececf0 /* Gris clair */ --accent: #e9ebef
  /* Gris accent */ --destructive: #d4183d
  /* Rouge destructeur */ --border: rgba(0, 0, 0, 0.1)
  /* Bordure transparente */;
```

### Mode Sombre

```css
--background: oklch(0.145 0 0) /* Fond sombre */
  --foreground: oklch(0.985 0 0) /* Texte clair */
  --primary: oklch(0.985 0 0) /* Blanc pour contraste */
  --secondary: oklch(0.269 0 0) /* Gris sombre */
  --muted: oklch(0.269 0 0) /* Gris sourd sombre */;
```

---

## 📋 Utilisation Recommandée

### Actions Principales

- Boutons primaires : `bg-gradient-to-r from-orange-500 to-red-500`
- Hover : `hover:from-orange-600 hover:to-red-600`

### Badges et Labels

- Catégories : `bg-orange-100 text-orange-700`
- Statuts : `bg-green-500 text-white`
- Alertes : `bg-red-500 text-white`

### Textes

- Titres principaux : `text-slate-800`
- Textes secondaires : `text-slate-600`
- Textes tertiaires : `text-slate-400`

### Arrière-plans

- Page principale : `bg-gradient-to-b from-orange-50 via-white to-red-50`
- Sections : `bg-gradient-to-r from-slate-50 to-orange-50`
- Cartes : `bg-white` avec `shadow-xl`

### Bordures

- Normales : `border-orange-200`
- Focus : `focus:border-orange-500`
- Hover : `hover:border-orange-300`

---

## 🎨 Couleurs par Thématique

### Culture & Tradition

- Orange, Rouge, Ocre, Doré - Évoquent la terre africaine et les traditions

### Modernité & Numérique

- Bleu, Slate - Représentent l'innovation et la technologie

### Nature & Croissance

- Green, Emerald - Symbolisent le développement et l'épanouissement

### Créativité & Art

- Purple, Pink - Expriment la créativité artistique

### Communication & Social

- Blue (Facebook), Pink (Instagram), Red (YouTube) - Codes couleurs des réseaux sociaux