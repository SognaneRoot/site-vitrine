import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProgramPage } from './components/ProgramPage';
import { ReservationPageStatic } from './components/ReservationPageStatic';
import { GalleryPage } from './components/GalleryPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'program':
        return <ProgramPage onPageChange={setCurrentPage} />;
      case 'reservation':
        return <ReservationPageStatic />;
      case 'gallery':
        return <GalleryPage onPageChange={setCurrentPage} />;
      case 'blog':
        return <BlogPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      case 'dashboard':
        return <HomePage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Vitrine Culture</h3>
              <p className="text-slate-300 mb-4">
                Rencontres culturelles mensuelles à Saint-Louis, Sénégal. 
                Valorisation de la culture sénégalaise et transmission intergénérationnelle.
              </p>
              <p className="text-slate-400 text-sm">
                En partenariat avec l'association E'leuk
              </p>
              <p className="text-slate-500 text-xs mt-2">
                🌍 Version statique optimisée - Hébergement gratuit
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Prochains Événements</h3>
              <div className="space-y-2 text-slate-300">
                <p>📅 30 Mars 2024 - Amadou Ba</p>
                <p>📅 27 Avril 2024 - Awa Ly</p>
                <p className="text-sm text-slate-400">
                  Chaque dernier samedi du mois
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  À propos
                </button>
                <button 
                  onClick={() => setCurrentPage('program')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Programme
                </button>
                <button 
                  onClick={() => setCurrentPage('reservation')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Réservation
                </button>
                <button 
                  onClick={() => setCurrentPage('gallery')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Galerie
                </button>
                <button 
                  onClick={() => setCurrentPage('blog')}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Blog
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-slate-300">
                <p>📍 Saint-Louis, Sénégal</p>
                <p>📧 sognanendiaga0@gmail.com</p>
                <p>📧 contact@vitrineculture.sn</p>
                <p>📱 +221 XX XXX XX XX</p>
                <div className="flex gap-4 mt-4">
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Facebook</span>
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Instagram</span>
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">YouTube</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Vitrine Culture. Tous droits réservés. Créé avec ❤️ pour la culture sénégalaise.</p>

          </div>
        </div>
      </footer>
    </div>
  );
}