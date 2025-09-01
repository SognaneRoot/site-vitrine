# Guide de Déploiement - Vitrine Culture

## 🚀 Déploiement Frontend Statique (RECOMMANDÉ)

### ✅ **Option 1 : Vercel (Le plus simple)**

#### **Préparation**
1. **Activer le mode statique**
   ```typescript
   // Dans /config/deployment.ts
   export const DEPLOYMENT_CONFIG = {
     MODE: 'static',
     BACKEND_ENABLED: false,
     // ...
   };
   ```

2. **Utiliser la version adaptative**
   ```bash
   # Renommer les fichiers
   mv App.tsx AppWithBackend.tsx
   mv AppAdaptive.tsx App.tsx
   ```

3. **Build local (optionnel pour tester)**
   ```bash
   npm run build
   npm run preview  # Tester en local
   ```

#### **Déploiement sur Vercel**
1. **Créer compte** : [vercel.com](https://vercel.com)
2. **Connecter GitHub** : Import repository
3. **Configuration automatique** : Vercel détecte React
4. **Deploy** : Déploiement automatique
5. **URL générée** : `https://vitrine-culture.vercel.app`

#### **Configuration Domaine Personnalisé** (Optionnel)
```bash
# Dans Vercel Dashboard > Settings > Domains
# Ajouter : vitrineculture.sn
# Suivre les instructions DNS
```

---

### ✅ **Option 2 : Netlify**

#### **Méthode A : Interface Web**
1. **Compte** : [netlify.com](https://netlify.com)
2. **Drag & Drop** : Glisser le dossier `dist/` après build
3. **URL immédiate** : Site live instantanément

#### **Méthode B : Git Integration**
1. **Connect Git** : Lier repository GitHub
2. **Build Settings** :
   ```
   Build command: npm run build
   Publish directory: dist
   ```
3. **Deploy** : Automatique à chaque push

#### **Configuration Redirections**
```toml
# Créer fichier netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### ✅ **Option 3 : GitHub Pages**

#### **Configuration Repository**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### **Activation**
1. **Repository Settings** > Pages
2. **Source** : GitHub Actions
3. **URL** : `https://username.github.io/vitrine-culture`

---

## 🔧 **Configuration Pre-Déploiement**

### **1. Mise à jour des imports**
```typescript
// Vérifier tous les imports de Supabase
// Les désactiver en mode statique
import { DEPLOYMENT_CONFIG } from './config/deployment';

if (DEPLOYMENT_CONFIG.BACKEND_ENABLED) {
  // Code avec backend
} else {
  // Version statique
}
```

### **2. Optimisation des images**
```typescript
// Utiliser ImageWithFallback partout
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Optimiser les URLs Unsplash
const imageUrl = "https://images.unsplash.com/photo-xxx?w=800&q=80";
```

### **3. Configuration EmailJS (pour contact)**
```typescript
// Dans ContactPage.tsx - garder la configuration existante
const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxx',
  templateId: 'template_xxxxx',
  publicKey: 'your_public_key'
};
```

---

## 📦 **Fichiers de Build**

### **Structure après build**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── images/
└── favicon.ico
```

### **Optimisations automatiques**
- ✅ **Minification** JS/CSS
- ✅ **Tree shaking** (code inutilisé retiré)
- ✅ **Image optimization** 
- ✅ **Lazy loading** components
- ✅ **Gzip compression**

---

## 🌐 **Configuration Domaine**

### **DNS Records à configurer**
```dns
# Pour domaine principal
CNAME www.vitrineculture.sn -> vercel-dns.com
A     vitrineculture.sn      -> 76.76.19.61

# Pour sous-domaine (optionnel)
CNAME reservation.vitrineculture.sn -> vercel-dns.com
```

### **Certificat SSL**
- ✅ **Automatique** sur Vercel/Netlify
- ✅ **Let's Encrypt** gratuit
- ✅ **Renouvellement** automatique

---

## 📊 **Monitoring & Analytics**

### **Google Analytics (Gratuit)**
```html
<!-- Dans index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **Performance Monitoring**
- **Vercel Analytics** : Intégré gratuit
- **Netlify Analytics** : Gratuit avec limitations
- **Google PageSpeed** : Insights gratuits

---

## 🔄 **Processus de Mise à Jour**

### **Déploiement Continu**
```bash
# Workflow typique
git add .
git commit -m "Update content"
git push origin main
# → Déploiement automatique
```

### **Rollback si problème**
```bash
# Sur Vercel
vercel --prod --rollback

# Sur Netlify  
# Via interface : Site deploys > Restore
```

---

## ⚡ **Optimisations Performance**

### **Lighthouse Score Attendu**
- 🎯 **Performance** : 95+
- 🎯 **Accessibility** : 95+
- 🎯 **Best Practices** : 100
- 🎯 **SEO** : 95+

### **Optimisations appliquées**
```typescript
// Lazy loading automatique
const ReservationPage = lazy(() => import('./components/ReservationPage'));

// Optimisation images
<ImageWithFallback
  src={imageUrl}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Code splitting par route
const routes = {
  home: () => import('./components/HomePage'),
  about: () => import('./components/AboutPage'),
  // ...
};
```

---

## 💰 **Comparaison Coûts**

| Hébergeur | Gratuit | Limite Bande Passante | Limite Builds | SSL | Domaine |
|-----------|---------|----------------------|---------------|-----|---------|
| **Vercel** | ✅ | 100 GB/mois | Illimité | ✅ | ✅ |
| **Netlify** | ✅ | 100 GB/mois | 300 min/mois | ✅ | ✅ |
| **GitHub Pages** | ✅ | 1 GB site | Illimité | ✅ | ✅ |
| **Surge.sh** | ✅ | Illimité | Manuel | ✅ | ✅ |

---

## 🛠️ **Checklist de Déploiement**

### **Avant déploiement**
- [ ] Mode statique activé dans config
- [ ] App.tsx adaptatif utilisé
- [ ] Images optimisées
- [ ] EmailJS configuré pour contact
- [ ] Build local testé
- [ ] Liens internes vérifiés

### **Après déploiement**
- [ ] Site accessible sur URL
- [ ] Toutes les pages fonctionnent
- [ ] Formulaire contact opérationnel
- [ ] Images chargent correctement
- [ ] Design responsive vérifié
- [ ] Performance testée (Lighthouse)

### **Configuration DNS (si domaine personnalisé)**
- [ ] Records DNS configurés
- [ ] SSL certificate actif
- [ ] Redirection www → non-www
- [ ] Emails routing configuré

---

## 🆘 **Résolution de Problèmes**

### **Erreur 404 sur routes**
```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **Images ne chargent pas**
```typescript
// Vérifier ImageWithFallback usage
<ImageWithFallback
  src={imageUrl}
  alt="Description"
  className="..."
/>
```

### **Build fail**
```bash
# Vérifier les imports
npm run type-check
npm run lint
npm run build --verbose
```

---

## 🎉 **Site Déployé !**

Une fois déployé, votre site Vitrine Culture sera :

- ✅ **100% Gratuit** sans limitation de temps
- ✅ **Ultra Rapide** avec CDN mondial
- ✅ **Sécurisé** avec HTTPS automatique
- ✅ **Responsive** sur tous appareils
- ✅ **SEO Optimisé** pour Google
- ✅ **Maintenance Zéro** infrastructures gérées

**🔗 Partagez votre site :** `https://vitrine-culture.vercel.app`

**Prochaines étapes possibles :**
- Configurer Google Analytics
- Ajouter domaine personnalisé
- Intégrer newsletter MailChimp
- Optimiser référencement local