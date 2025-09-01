import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, MapPin, Clock, Users, Play, Star, Eye, Heart, Share, Mail, Image } from 'lucide-react';

interface ProgramPageProps {
  onPageChange: (page: string) => void;
}

export function ProgramPage({ onPageChange }: ProgramPageProps) {
  const [selectedGuest, setSelectedGuest] = useState<string | null>(null);

  const upcomingEvents = [
    {
      id: '2024-03',
      date: '30 Mars 2024',
      time: '18h00 - 21h00',
      guest: 'Amadou Ba',
      guestTitle: 'Griot et Conteur Traditionnel',
      venue: 'Espace Culturel Saint-Louis Théâtre',
      description: 'Une soirée exceptionnelle avec Amadou Ba, gardien des traditions orales sénégalaises, qui nous transportera dans l\'univers fascinant des griots.',
      specialties: ['Tradition orale', 'Kora', 'Contes ancestraux'],
      image: 'https://images.unsplash.com/photo-1604556146443-be9ba3a1f064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWNpYW4lMjB0cmFkaXRpb25hbCUyMGluc3RydW1lbnRzJTIwa29yYXxlbnwxfHx8fDE3NTU5ODc0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'upcoming',
      bookingOpen: true
    },
    {
      id: '2024-04',
      date: '27 Avril 2024',
      time: '18h00 - 21h00',
      guest: 'Awa Ly',
      guestTitle: 'Chanteuse et Compositrice',
      venue: 'Espace Culturel Saint-Louis Théâtre',
      description: 'Rencontre avec Awa Ly, voix montante de la musique sénégalaise, qui mélange tradition et modernité.',
      specialties: ['Musique moderne', 'Composition', 'Fusion traditionnelle'],
      image: 'https://images.unsplash.com/photo-1589252854150-a5c502f1e1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Rvcnl0ZWxsZXIlMjBncmlvdCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1NTk4NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'announced',
      bookingOpen: false
    }
  ];

  const pastEvents = [
    {
      id: '2024-02',
      date: '24 Février 2024',
      guest: 'Fatou Diome',
      guestTitle: 'Écrivaine Franco-Sénégalaise',
      description: 'Une soirée mémorable avec l\'auteure du "Ventre de l\'Atlantique", explorant les thèmes de l\'immigration et l\'identité.',
      specialties: ['Littérature', 'Immigration', 'Identité culturelle'],
      highlights: ['150 participants', '2000 vues en direct', 'Échanges passionnés'],
      videoAvailable: true,
      photosCount: 45
    },
    {
      id: '2024-01',
      date: '27 Janvier 2024',
      guest: 'Ismaël Lô',
      guestTitle: 'Musicien et Compositeur',
      description: 'Le légendaire musicien sénégalais a partagé 40 ans de carrière et ses secrets de composition.',
      specialties: ['Musique', 'Composition', 'Tradition musicale'],
      highlights: ['200 participants', '3500 vues en direct', 'Performance live'],
      videoAvailable: true,
      photosCount: 62
    },
    {
      id: '2023-12',
      date: '30 Décembre 2023',
      guest: 'Ousmane Sow',
      guestTitle: 'Sculpteur Renommé',
      description: 'L\'artiste sculpteur a exposé sa vision de l\'art africain contemporain et ses techniques uniques.',
      specialties: ['Sculpture', 'Art contemporain', 'Vision artistique'],
      highlights: ['120 participants', '1800 vues en direct', 'Démonstration artistique'],
      videoAvailable: true,
      photosCount: 38
    },
    {
      id: '2023-11',
      date: '25 Novembre 2023',
      guest: 'Coumba Gawlo',
      guestTitle: 'Chanteuse Traditionnelle',
      description: 'La reine de la musique traditionnelle sénégalaise nous a fait vibrer avec ses mélodies ancestrales.',
      specialties: ['Chant traditionnel', 'Patrimoine musical', 'Transmission'],
      highlights: ['180 participants', '2800 vues en direct', 'Concert acoustique'],
      videoAvailable: true,
      photosCount: 55
    }
  ];

  const handleReservation = (eventId: string) => {
    // Ici on pourrait intégrer un système de réservation
    alert('Réservation pour l\'événement ' + eventId + ' - Fonctionnalité à venir !');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
              🎭 Programme Culturel
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Programme & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Invités</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos rencontres passées et futures avec les personnalités qui font rayonner 
              la culture sénégalaise dans le monde entier.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-orange-100">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white">
                Prochaines Rencontres
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white">
                Éditions Passées
              </TabsTrigger>
            </TabsList>

            {/* Prochaines Rencontres */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden shadow-xl border-0 bg-white">
                    <div className="relative h-64">
                      <ImageWithFallback
                        src={event.image}
                        alt={`${event.guest} - ${event.guestTitle}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${
                          event.status === 'upcoming' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-500'
                        } text-white`}>
                          {event.status === 'upcoming' ? 'Prochainement' : 'Annoncé'}
                        </Badge>
                      </div>
                      {event.bookingOpen && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse">
                            Réservations ouvertes
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{event.guest}</h3>
                      <p className="text-lg text-orange-600 mb-4">{event.guestTitle}</p>
                      <p className="text-slate-600 mb-6">{event.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-slate-700">
                          <Calendar className="h-5 w-5 text-orange-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <MapPin className="h-5 w-5 text-orange-500" />
                          <span>{event.venue}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm font-medium text-slate-700 mb-2">Spécialités :</p>
                        <div className="flex flex-wrap gap-2">
                          {event.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                          onClick={() => handleReservation(event.id)}
                          disabled={!event.bookingOpen}
                        >
                          <Star className="mr-2 h-4 w-4" />
                          {event.bookingOpen ? 'Réserver ma place' : 'Bientôt disponible'}
                        </Button>
                        <Button variant="outline" size="icon" className="border-orange-300">
                          <Share className="h-4 w-4 text-orange-600" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Éditions Passées */}
            <TabsContent value="past" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden shadow-lg border-0 bg-white hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-slate-600 border-slate-300">
                          {event.date}
                        </Badge>
                        <div className="flex gap-2">
                          {event.videoAvailable && (
                            <Badge className="bg-red-100 text-red-700">
                              <Play className="w-3 h-3 mr-1" />
                              Vidéo
                            </Badge>
                          )}
                          <Badge className="bg-blue-100 text-blue-700">
                            <Eye className="w-3 h-3 mr-1" />
                            {event.photosCount} photos
                          </Badge>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-1">{event.guest}</h3>
                      <p className="text-lg text-orange-600 mb-3">{event.guestTitle}</p>
                      <p className="text-slate-600 mb-4 text-sm">{event.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-xs font-medium text-slate-700 mb-2">Spécialités :</p>
                        <div className="flex flex-wrap gap-1">
                          {event.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="bg-orange-50 text-orange-600 text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs font-medium text-slate-700 mb-2">Points forts :</p>
                        <div className="space-y-1">
                          {event.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                              <Star className="w-3 h-3 text-yellow-500" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 border-orange-300 text-orange-600 hover:bg-orange-50">
                          <Play className="mr-2 h-3 w-3" />
                          Voir la vidéo
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50">
                          <Eye className="mr-2 h-3 w-3" />
                          Photos
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-orange-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">L'Impact de Vitrine Culture</h2>
            <p className="text-lg text-slate-600">Quelques chiffres qui témoignent de notre engagement</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800">15+</div>
              <div className="text-slate-600">Invités d'exception</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800">25K+</div>
              <div className="text-slate-600">Vues cumulées</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800">1500+</div>
              <div className="text-slate-600">Participants</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800">15</div>
              <div className="text-slate-600">Éditions réalisées</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ne Manquez Aucune Rencontre
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Inscrivez-vous à notre newsletter pour être informé en priorité de nos prochains événements 
            et recevoir des contenus exclusifs.
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