import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Users, MessageSquare, Globe, Facebook, Instagram, Youtube, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Configuration EmailJS - Remplacez ces valeurs par vos propres identifiants
      const serviceId = 'YOUR_SERVICE_ID'; // À remplacer par votre Service ID EmailJS
      const templateId = 'YOUR_TEMPLATE_ID'; // À remplacer par votre Template ID EmailJS
      const publicKey = 'YOUR_PUBLIC_KEY'; // À remplacer par votre Public Key EmailJS
      
      // Vérifier si EmailJS est configuré
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS non configuré');
      }
      
      // Préparer les données pour EmailJS
      const templateParams = {
        to_email: 'sognanendiaga0@gmail.com', // Email de réception mis à jour
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        type: formData.type,
        reply_to: formData.email
      };
      
      // Envoyer l'email via EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          type: ''
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      
      // Message d'erreur plus informatif
      if (error instanceof Error && error.message === 'EmailJS non configuré') {
        setErrorMessage('Le service d\'envoi d\'emails n\'est pas encore configuré. Utilisez le bouton "Envoyer par email" ci-dessous pour nous contacter directement.');
      } else {
        setErrorMessage('Une erreur est survenue lors de l\'envoi. Utilisez le bouton "Envoyer par email" ci-dessous pour nous contacter directement.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour générer un lien mailto avec toutes les informations
  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[Vitrine Culture] ${formData.subject || 'Nouvelle demande'}`);
    const body = encodeURIComponent(`
Bonjour,

Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}
Type de demande: ${formData.type}

Sujet: ${formData.subject}

Message:
${formData.message}

---
Envoyé depuis le site Vitrine Culture
    `.trim());
    
    return `mailto:sognanendiaga0@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Espace Culturel Saint-Louis Théâtre\nSaint-Louis, Sénégal',
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+221 33 961 XX XX\n+221 77 XXX XX XX',
      color: 'from-blue-400 to-purple-400'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'sognanendiaga0@gmail.com\ncontact@vitrineculture.sn',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Événements : Derniers samedis du mois\n18h00 - 21h00',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'text-blue-600' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'text-pink-600' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'text-red-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'text-blue-400' }
  ];

  const faqItems = [
    {
      question: 'Comment puis-je assister à un événement Vitrine Culture ?',
      answer: 'Les événements sont ouverts à tous et gratuits. Il est recommandé de s\'inscrire via notre formulaire de contact ou nos réseaux sociaux pour recevoir les confirmations.'
    },
    {
      question: 'Puis-je proposer un artiste ou intervenant ?',
      answer: 'Absolument ! Nous sommes toujours à la recherche de nouvelles personnalités culturelles. Contactez-nous avec une présentation de l\'artiste et de son travail.'
    },
    {
      question: 'Comment devenir partenaire de Vitrine Culture ?',
      answer: 'Nous cherchons des partenaires partageant notre vision de valorisation culturelle. Contactez-nous pour discuter des possibilités de collaboration.'
    },
    {
      question: 'Les événements sont-ils filmés ?',
      answer: 'Oui, tous nos événements sont diffusés en direct et enregistrés. Les vidéos sont disponibles sur notre site et nos réseaux sociaux.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
              📞 Nous Contacter
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Contactez <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Vitrine Culture</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Une question, une suggestion, ou envie de rejoindre notre communauté ? 
              Nous sommes là pour vous écouter et vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {info.content}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire de contact et informations */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <Card className="p-8 border-0 bg-white shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>

                <div>
                  <Label htmlFor="type">Type de demande</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                    <SelectTrigger className="border-orange-200 focus:border-orange-500 focus:ring-orange-500">
                      <SelectValue placeholder="Sélectionnez le type de demande" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="participation">Participation à un événement</SelectItem>
                      <SelectItem value="artiste">Proposition d'artiste</SelectItem>
                      <SelectItem value="partenariat">Partenariat</SelectItem>
                      <SelectItem value="media">Demande média</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 min-h-[120px]"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  />
                </div>

                {/* Messages de statut */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <span>Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="h-5 w-5" />
                      <span>{errorMessage}</span>
                    </div>
                    <Button 
                      type="button"
                      variant="outline"
                      className="w-full border-red-300 text-red-600 hover:bg-red-50"
                      asChild
                    >
                      <a href={generateMailtoLink()}>
                        <Mail className="mr-2 h-4 w-4" />
                        Envoyer par email direct
                      </a>
                    </Button>
                  </div>
                )}

                <div className="space-y-3">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                  
                  <div className="text-center">
                    <span className="text-slate-500 text-sm">ou</span>
                  </div>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                    asChild
                  >
                    <a href={generateMailtoLink()}>
                      <Mail className="mr-2 h-4 w-4" />
                      Envoyer par email direct
                    </a>
                  </Button>
                </div>
              </form>
            </Card>

            {/* Informations supplémentaires */}
            <div className="space-y-8">
              {/* Image et description */}
              <Card className="overflow-hidden border-0 bg-white shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745683512464-3d20bf25eff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWludCUyMGxvdWlzJTIwc2VuZWdhbCUyMGFyY2hpdGVjdHVyZSUyMGNvbnRhY3R8ZW58MXx8fHwxNzU2MDU3MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Saint-Louis Sénégal"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Venez nous rencontrer</h3>
                  <p className="text-slate-600 mb-4">
                    Nos événements se déroulent dans le cadre exceptionnel de Saint-Louis, 
                    ville classée au patrimoine mondial de l'UNESCO. Un lieu chargé d'histoire 
                    pour des rencontres culturelles authentiques.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                    onClick={() => onPageChange('about')}
                  >
                    En savoir plus sur nous
                  </Button>
                </div>
              </Card>

              {/* Réseaux sociaux */}
              <Card className="p-6 border-0 bg-white shadow-xl">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Suivez-nous</h3>
                <p className="text-slate-600 mb-6">
                  Restez connecté avec notre communauté sur les réseaux sociaux pour ne rien manquer 
                  de nos actualités et événements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="border-slate-200 hover:bg-slate-50 justify-start"
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <Icon className={`h-4 w-4 mr-2 ${social.color}`} />
                          {social.name}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </Card>

              {/* Actions rapides */}
              <Card className="p-6 border-0 bg-white shadow-xl">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Actions rapides</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-orange-300 text-orange-600 hover:bg-orange-50"
                    onClick={() => onPageChange('program')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Voir le programme des événements
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-blue-300 text-blue-600 hover:bg-blue-50"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Rejoindre notre newsletter
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-green-300 text-green-600 hover:bg-green-50"
                    onClick={() => onPageChange('gallery')}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Voir notre galerie
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-slate-600">
              Trouvez rapidement les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="p-6 border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{item.question}</h3>
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Mail className="mr-2 h-4 w-4" />
              Posez votre question
            </Button>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Nos Partenaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Association E'leuk</h3>
              <p className="text-slate-600 text-sm">Partenaire principal et organisateur</p>
            </Card>
            <Card className="p-6 border-0 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Saint-Louis Théâtre</h3>
              <p className="text-slate-600 text-sm">Lieu d'accueil de nos événements</p>
            </Card>
            <Card className="p-6 border-0 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Ministère de la Culture</h3>
              <p className="text-slate-600 text-sm">Soutien institutionnel</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}