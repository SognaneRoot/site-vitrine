import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Mail, 
  Phone,
  ExternalLink,
  Heart,
  Star,
  Ticket,
  CheckCircle
} from 'lucide-react';

export function ReservationPageStatic() {
  const nextEvents = [
    {
      id: 1,
      title: "Vitrine Culture Mars 2024",
      date: "30 Mars 2024",
      time: "18:00",
      location: "Saint-Louis Théâtre, Saint-Louis",
      description: "Rencontre culturelle mensuelle mettant en lumière les personnalités du monde culturel africain. Au programme : découvertes artistiques, échanges et performances live.",
      maxCapacity: 100,
      guests: ["Amadou Ba", "Griot traditionnel", "Musicien kora"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Vitrine Culture Avril 2024", 
      date: "27 Avril 2024",
      time: "18:00",
      location: "Saint-Louis Théâtre, Saint-Louis",
      description: "Une soirée exceptionnelle dédiée à la poésie et au slam sénégalais avec des artistes de renom.",
      maxCapacity: 100,
      guests: ["Awa Ly", "Poétesse engagée", "Slameur urbain"],
      image: "https://images.unsplash.com/photo-1620147563676-f94aced565b1",
      status: "upcoming"
    }
  ];

  const handleContactReservation = () => {
    const subject = "Réservation Vitrine Culture";
    const body = `Bonjour,

Je souhaiterais réserver des places pour un événement Vitrine Culture.

Détails de ma demande :
- Événement souhaité : 
- Nombre de personnes : 
- Nom et prénom : 
- Téléphone : 
- Demandes particulières : 

Cordialement,`;

    window.location.href = `mailto:sognanendiaga0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handlePhoneContact = () => {
    window.open('tel:+221XXXXXXXXX', '_self');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
              🎫 Réservation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Réservez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">place</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Rejoignez-nous pour une expérience culturelle unique chaque dernier samedi du mois. 
              Réservation gratuite et obligatoire.
            </p>
          </div>
        </div>
      </section>

      {/* Méthodes de Réservation */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Comment réserver ?</h2>
            <p className="text-lg text-slate-600">
              Choisissez la méthode qui vous convient le mieux pour réserver vos places
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Réservation par Email */}
            <Card className="p-8 text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Par Email</h3>
              <p className="text-slate-600 mb-6">
                Envoyez-nous un email avec vos informations de réservation. 
                Nous vous confirmerons votre place rapidement.
              </p>
              <Button 
                onClick={handleContactReservation}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <Mail className="mr-2 h-4 w-4" />
                Réserver par Email
              </Button>
              <p className="text-sm text-slate-500 mt-3">
                sognanendiaga0@gmail.com
              </p>
            </Card>

            {/* Réservation par Téléphone */}
            <Card className="p-8 text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Par Téléphone</h3>
              <p className="text-slate-600 mb-6">
                Appelez-nous directement pour une réservation immédiate. 
                Notre équipe vous accueillera avec plaisir.
              </p>
              <Button 
                onClick={handlePhoneContact}
                variant="outline"
                className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <Phone className="mr-2 h-4 w-4" />
                Appeler Maintenant
              </Button>
              <p className="text-sm text-slate-500 mt-3">
                +221 XX XXX XX XX
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Prochains Événements */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Prochains Événements</h2>
            <p className="text-lg text-slate-600">
              Découvrez notre programmation à venir et réservez dès maintenant
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {nextEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border-0 bg-white shadow-lg">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{event.title}</h3>
                    <Badge className="bg-green-100 text-green-800 border-0">
                      Places disponibles
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>{event.maxCapacity} places maximum</span>
                    </div>
                  </div>
                  
                  {event.guests.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Invités confirmés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.guests.map((guest, index) => (
                          <Badge key={index} variant="outline" className="border-orange-300 text-orange-700">
                            <Star className="w-3 h-3 mr-1" />
                            {guest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      onClick={handleContactReservation}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Réserver
                    </Button>
                    <Button 
                      onClick={handlePhoneContact}
                      variant="outline"
                      className="border-orange-300 text-orange-700 hover:bg-orange-50"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Appeler
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Informations pratiques</h2>
            <p className="text-lg text-slate-600">
              Tout ce que vous devez savoir pour profiter pleinement de votre expérience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-0 bg-white shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Gratuit</h3>
              <p className="text-sm text-slate-600">
                Tous nos événements sont entièrement gratuits
              </p>
            </Card>

            <Card className="p-6 text-center border-0 bg-white shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Ponctualité</h3>
              <p className="text-sm text-slate-600">
                Arrivée recommandée 15min avant le début
              </p>
            </Card>

            <Card className="p-6 text-center border-0 bg-white shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Convivialité</h3>
              <p className="text-sm text-slate-600">
                Ambiance chaleureuse et échanges enrichissants
              </p>
            </Card>

            <Card className="p-6 text-center border-0 bg-white shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Ouvert à tous</h3>
              <p className="text-sm text-slate-600">
                Événements accessibles à tous les âges
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de Réservation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Processus de Réservation</h2>
            <p className="text-lg text-slate-600">
              Simple et rapide en 3 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Contactez-nous</h3>
              <p className="text-slate-600">
                Par email ou téléphone avec vos informations de réservation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Confirmation</h3>
              <p className="text-slate-600">
                Nous confirmons votre réservation dans les 24h
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center text-white">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">C'est prêt !</h3>
              <p className="text-slate-600">
                Présentez-vous le jour J avec votre confirmation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à vivre l'expérience Vitrine Culture ?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Ne manquez pas nos rencontres exceptionnelles. Réservez votre place dès maintenant !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleContactReservation}
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              <Mail className="mr-2 h-5 w-5" />
              Réserver par Email
            </Button>
            <Button 
              size="lg" 
              onClick={handlePhoneContact}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Phone className="mr-2 h-5 w-5" />
              Appeler Maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}