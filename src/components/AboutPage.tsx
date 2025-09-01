import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Target, Heart, Users, Mic, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: 'Transmission Culturelle',
      description: 'Préserver et transmettre la richesse de notre patrimoine culturel sénégalais aux nouvelles générations.',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: Users,
      title: 'Échange Intergénérationnel',
      description: 'Créer des ponts entre les générations pour un partage authentique des savoirs et expériences.',
      color: 'from-blue-400 to-purple-400'
    },
    {
      icon: Mic,
      title: 'Valorisation Artistique',
      description: 'Mettre en lumière les talents locaux et encourager l\'expression artistique sous toutes ses formes.',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: BookOpen,
      title: 'Éducation Populaire',
      description: 'Rendre accessible la culture à tous, dans un esprit d\'apprentissage mutuel et de convivialité.',
      color: 'from-orange-400 to-yellow-400'
    }
  ];

  const objectives = [
    'Créer un espace de dialogue entre artistes confirmés et jeunes talents',
    'Valoriser la diversité culturelle sénégalaise (art, musique, théâtre, poésie, slam)',
    'Documenter et archiver les témoignages artistiques pour les générations futures',
    'Développer une communauté engagée autour des valeurs culturelles',
    'Offrir une visibilité nationale et internationale aux artistes locaux'
  ];

  const timeline = [
    {
      date: 'Février 2023',
      title: 'Première édition',
      description: 'Lancement de Vitrine Culture avec notre premier invité',
      achievement: 'Plus de 100 participants'
    },
    {
      date: 'Juin 2023',
      title: 'Expansion numérique',
      description: 'Début des diffusions en direct sur les réseaux sociaux',
      achievement: '500+ vues en direct'
    },
    {
      date: 'Octobre 2023',
      title: 'Partenariats locaux',
      description: 'Collaboration avec l\'association E\'leuk et les institutions culturelles',
      achievement: '5 partenaires officiels'
    },
    {
      date: 'Mars 2024',
      title: 'Reconnaissance',
      description: 'Vitrine Culture devient un événement culturel de référence à Saint-Louis',
      achievement: '1000+ membres communauté'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
              🏛️ Notre Histoire
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              À Propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Vitrine Culture</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Depuis février 2023, Vitrine Culture illumine le paysage culturel de Saint-Louis en créant 
              des rencontres authentiques entre artistes établis et jeunes talents passionnés.
            </p>
          </div>
        </div>
      </section>

      {/* Mission et Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Notre Mission</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Valoriser la Culture Sénégalaise</h3>
                    <p className="text-slate-600">
                      Mettre en lumière la richesse et la diversité de notre patrimoine culturel à travers 
                      des rencontres mensuelles exceptionnelles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Créer du Lien Social</h3>
                    <p className="text-slate-600">
                      Favoriser les échanges intergénérationnels et créer une communauté unie 
                      autour des valeurs culturelles partagées.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Encourager les Talents</h3>
                    <p className="text-slate-600">
                      Offrir une plateforme d'expression aux jeunes artistes et créer des opportunités 
                      de mentorat avec des personnalités établies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-2xl transform rotate-3"></div>
              <Card className="relative p-8 bg-white shadow-xl border-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Le Concept</h3>
                <p className="text-slate-600 mb-6">
                  Chaque dernier samedi du mois, Vitrine Culture accueille une personnalité 
                  du monde culturel sénégalais pour une soirée riche en échanges, témoignages 
                  et performances artistiques.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span className="text-slate-700">Rendez-vous mensuel régulier</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span className="text-slate-700">Saint-Louis Théâtre et lieux partenaires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mic className="h-5 w-5 text-orange-500" />
                    <span className="text-slate-700">Diffusion en direct sur les réseaux</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Les principes qui guident notre action et donnent du sens à nos rencontres culturelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur group">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Nos Objectifs</h2>
              <p className="text-lg text-slate-600 mb-8">
                Vitrine Culture s'engage à atteindre des objectifs concrets pour le développement 
                culturel de Saint-Louis et du Sénégal.
              </p>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Notre Parcours</h3>
              <div className="space-y-6">
                {timeline.map((event, index) => (
                  <div key={index} className="relative">
                    {index < timeline.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-12 bg-gradient-to-b from-orange-400 to-red-400"></div>
                    )}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-orange-600 border-orange-300">
                            {event.date}
                          </Badge>
                          <Badge className="bg-green-100 text-green-700">
                            {event.achievement}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-slate-800 mb-1">{event.title}</h4>
                        <p className="text-slate-600 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Participez à l'Aventure Culturelle
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Vitrine Culture grandit grâce à votre participation. Rejoignez-nous pour célébrer 
            et transmettre la richesse de notre patrimoine culturel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600"
              onClick={() => onPageChange('program')}
            >
              Voir le Programme
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50"
              onClick={() => onPageChange('contact')}
            >
              Nous Contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}