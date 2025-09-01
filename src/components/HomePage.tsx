import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Clock, Users, ArrowRight, Play, Heart, Star, Mail, Image } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const nextEvent = {
    date: '30 Mars 2024',
    time: '18h00 - 21h00',
    guest: 'Amadou Ba',
    guestTitle: 'Griot et Conteur Traditionnel',
    venue: 'Espace Culturel Saint-Louis Théâtre',
    description: 'Une soirée exceptionnelle avec Amadou Ba, gardien des traditions orales sénégalaises, qui nous transportera dans l\'univers fascinant des griots.',
    speciality: 'Tradition orale, Kora, Contes ancestraux'
  };

  const highlights = [
    {
      title: 'Rencontres Mensuelles',
      description: 'Chaque dernier samedi du mois',
      icon: Calendar,
      color: 'from-orange-400 to-red-400'
    },
    {
      title: 'Artistes Inspirants',
      description: 'Personnalités du monde culturel sénégalais',
      icon: Users,
      color: 'from-yellow-400 to-orange-400'
    },
    {
      title: 'Échanges Vivants',
      description: 'Témoignages et moments artistiques',
      icon: Heart,
      color: 'from-red-400 to-pink-400'
    },
    {
      title: 'Diffusion Live',
      description: 'En direct sur nos réseaux sociaux',
      icon: Play,
      color: 'from-blue-400 to-purple-400'
    }
  ];

  const pastGuests = [
    { name: 'Fatou Diome', specialty: 'Écrivaine', month: 'Février 2024' },
    { name: 'Ismaël Lô', specialty: 'Musicien', month: 'Janvier 2024' },
    { name: 'Ousmane Sow', specialty: 'Sculpteur', month: 'Décembre 2023' },
    { name: 'Coumba Gawlo', specialty: 'Chanteuse', month: 'Novembre 2023' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-transparent z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1730635335549-09bd47b1a5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwc2FpbnQlMjBsb3VpcyUyMGN1bHR1cmUlMjB0cmFkaXRpb25hbCUyMG11c2ljfGVufDF8fHx8MTc1NTk4NzM1OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Culture sénégalaise Saint-Louis"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
              ✨ Événement Culturel Mensuel
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Vitrine <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Culture</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Un rendez-vous culturel exceptionnel à Saint-Louis, où les artistes sénégalais partagent leur passion 
              et transmettent leur savoir aux nouvelles générations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 border-0"
                onClick={() => onPageChange('program')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Découvrir le Programme
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-slate-800"
                onClick={() => onPageChange('about')}
              >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prochaine Rencontre */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Prochaine Rencontre
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ne manquez pas notre prochain rendez-vous culturel avec une personnalité exceptionnelle
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-0">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620147563676-f94aced565b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGVyZm9ybWFuY2UlMjB0aGVhdGVyJTIwc3RhZ2V8ZW58MXx8fHwxNzU1OTg3MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Performance artistique"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-orange-50 to-red-50">
                <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  Prochainement
                </Badge>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{nextEvent.guest}</h3>
                <p className="text-lg text-orange-600 mb-4">{nextEvent.guestTitle}</p>
                <p className="text-slate-600 mb-6">{nextEvent.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span>{nextEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span>{nextEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span>{nextEvent.venue}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-slate-700 mb-2">Spécialités :</p>
                  <div className="flex flex-wrap gap-2">
                    {nextEvent.speciality.split(', ').map((item, index) => (
                      <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  onClick={() => onPageChange('program')}
                >
                  <Star className="mr-2 h-4 w-4" />
                  Réserver ma place
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Points Forts */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              L'Esprit Vitrine Culture
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Découvrez ce qui rend nos rencontres si spéciales et uniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600">
                    {highlight.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Invités Récents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Nos Invités Récents
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Depuis février 2023, nous avons eu l'honneur d'accueillir des personnalités 
                remarquables de la culture sénégalaise qui ont marqué notre communauté.
              </p>
              
              <div className="space-y-4 mb-8">
                {pastGuests.map((guest, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{guest.name}</h4>
                      <p className="text-sm text-slate-600">{guest.specialty} • {guest.month}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => onPageChange('program')} 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Voir tous nos invités
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624695493609-c7cb60e7e583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1OTg3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Communauté culturelle africaine"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Communauté unie</p>
                  <p className="text-sm opacity-90">Transmission intergénérationnelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Rejoignez Notre Communauté Culturelle
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Ne manquez aucune de nos rencontres exceptionnelles. Inscrivez-vous à notre newsletter 
            et soyez les premiers informés de nos prochains événements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600"
              onClick={() => onPageChange('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              S'inscrire à la Newsletter
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50"
              onClick={() => onPageChange('gallery')}
            >
              <Image className="mr-2 h-5 w-5" />
              Voir la Galerie
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}