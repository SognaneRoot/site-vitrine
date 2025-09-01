// FICHIER SIMPLIFIÉ - Version statique uniquement
// Ce fichier était utilisé pour détecter l'environnement et basculer entre modes
// Maintenant simplifié pour la version statique pure

export interface DeploymentInfo {
  platform: 'vercel' | 'netlify' | 'github' | 'local' | 'other';
  isStatic: true; // Toujours statique maintenant
  optimizations: {
    lazyLoad: boolean;
    prefetch: boolean;
    analytics: boolean;
  };
}

// Détection simple de la plateforme
export const detectPlatform = (): DeploymentInfo['platform'] => {
  if (typeof window === 'undefined') return 'local';
  
  const hostname = window.location.hostname;
  
  if (hostname.includes('vercel.app') || process.env.VERCEL) return 'vercel';
  if (hostname.includes('netlify.app') || hostname.includes('netlify.com')) return 'netlify';
  if (hostname.includes('github.io') || hostname.includes('githubusercontent')) return 'github';
  if (hostname === 'localhost' || hostname.includes('127.0.0.1')) return 'local';
  
  return 'other';
};

// Configuration optimale pour version statique
export const getDeploymentInfo = (): DeploymentInfo => {
  const platform = detectPlatform();

  const optimizations = {
    lazyLoad: platform !== 'local', // Lazy loading sauf en dev
    prefetch: platform === 'vercel' || platform === 'netlify', // Prefetch sur CDN
    analytics: platform !== 'local' && platform !== 'github' // Analytics sauf dev et GitHub
  };

  return {
    platform,
    isStatic: true, // Toujours statique
    optimizations
  };
};

// Messages pour la version statique
export const getEnvironmentMessages = (info: DeploymentInfo) => {
  const messages = {
    reservation: 'Contactez-nous pour réserver (Email/Téléphone)',
    contact: 'Formulaire de contact opérationnel',
    platform: {
      vercel: '⚡ Hébergé sur Vercel - Performance optimale',
      netlify: '🌐 Hébergé sur Netlify - Déploiement continu',
      github: '📦 Hébergé sur GitHub Pages - Open Source',
      local: '💻 Environnement de développement',
      other: '🌍 Site déployé avec succès'
    }[info.platform],
    features: 'Version statique optimisée - Toutes les fonctionnalités préservées'
  };

  return messages;
};

// Services externes pour version statique
export const getExternalServices = (info: DeploymentInfo) => {
  return {
    // EmailJS pour le contact (toujours actif)
    emailjs: {
      enabled: true,
      config: {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY
      }
    },

    // Google Analytics
    analytics: {
      enabled: info.optimizations.analytics,
      measurementId: process.env.REACT_APP_GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID
    },

    // Réservations par contact
    reservations: {
      method: 'contact',
      fallbackEmail: 'sognanendiaga0@gmail.com',
      fallbackPhone: '+221 XX XXX XX XX',
      googleForm: process.env.REACT_APP_GOOGLE_FORM_URL || process.env.VITE_GOOGLE_FORM_URL
    }
  };
};