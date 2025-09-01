import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CalendarDays, Clock, User, BookOpen, Search, Tag, ArrowRight, Heart, MessageCircle, Share2 } from 'lucide-react';

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

export function BlogPage({ onPageChange }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'L\'héritage musical de Saint-Louis : Entre tradition et modernité',
      excerpt: 'Découvrez comment Saint-Louis continue de préserver et de réinventer son patrimoine musical exceptionnel à travers les générations...',
      content: 'Saint-Louis, ancienne capitale du Sénégal, demeure un creuset musical où se mélangent harmonieusement les sonorités traditionnelles et les influences contemporaines.',
      image: 'https://images.unsplash.com/photo-1572124013743-1997454e3aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWNpYW5zJTIwY29uY2VydCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjA1NzA3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Aminata Diallo',
      date: '15 Mars 2024',
      readTime: '5 min',
      category: 'musique',
      tags: ['Tradition', 'Saint-Louis', 'Patrimoine'],
      likes: 127,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Portrait : Fatou Diome, la plume de l\'exil et du retour',
      excerpt: 'Retour sur l\'œuvre et le parcours de l\'écrivaine franco-sénégalaise, invitée d\'honneur de notre dernière rencontre...',
      content: 'Fatou Diome incarne cette littérature de l\'entre-deux, qui puise ses forces dans la dualité des cultures et des langues.',
      image: 'https://images.unsplash.com/photo-1669079344621-eb4059164f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYm9va3MlMjBsaXRlcmF0dXJlJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTYwNTcxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Moussa Sène',
      date: '8 Mars 2024',
      readTime: '7 min',
      category: 'litterature',
      tags: ['Portrait', 'Littérature', 'Diaspora'],
      likes: 89,
      comments: 15,
      featured: false
    },
    {
      id: 3,
      title: 'Les griots d\'aujourd\'hui : Gardiens de la mémoire collective',
      excerpt: 'Comment les griots modernes adaptent leur art ancestral aux défis contemporains tout en préservant l\'authenticité...',
      content: 'Dans un monde en mutation, les griots continuent de jouer leur rôle de gardiens de la mémoire et de conteurs de l\'histoire.',
      image: 'https://images.unsplash.com/photo-1544476613-121ac8adf256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Rvcnl0ZWxsZXIlMjB0cmFkaXRpb25hbCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1NjA1NzA3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Cheikh Sow',
      date: '2 Mars 2024',
      readTime: '6 min',
      category: 'tradition',
      tags: ['Griots', 'Tradition orale', 'Patrimoine'],
      likes: 156,
      comments: 31,
      featured: false
    },
    {
      id: 4,
      title: 'Le slam au Sénégal : Une nouvelle forme de poésie urbaine',
      excerpt: 'Exploration de ce mouvement artistique qui séduit la jeunesse sénégalaise et renouvelle l\'expression poétique...',
      content: 'Le slam représente une forme moderne de la tradition orale africaine, adaptée aux réalités urbaines contemporaines.',
      image: 'https://images.unsplash.com/photo-1622884004005-772c7dcf0742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwY3VsdHVyZSUyMHdyaXRpbmclMjBqb3VybmFsaXNtfGVufDF8fHx8MTc1NjA1NzE1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Awa Ndiaye',
      date: '25 Février 2024',
      readTime: '4 min',
      category: 'slam',
      tags: ['Slam', 'Jeunesse', 'Poésie urbaine'],
      likes: 94,
      comments: 18,
      featured: false
    },
    {
      id: 5,
      title: 'Vitrine Culture : Un an de rencontres exceptionnelles',
      excerpt: 'Bilan de notre première année d\'existence et perspectives pour l\'avenir de nos rencontres culturelles...',
      content: 'Retour sur une année riche en échanges, découvertes et partages avec les personnalités de la culture sénégalaise.',
      image: 'https://images.unsplash.com/photo-1624695493609-c7cb60e7e583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1OTg3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Équipe Vitrine Culture',
      date: '20 Février 2024',
      readTime: '8 min',
      category: 'vitrine-culture',
      tags: ['Bilan', 'Anniversaire', 'Communauté'],
      likes: 203,
      comments: 47,
      featured: false
    },
    {
      id: 6,
      title: 'L\'art contemporain sénégalais : Entre local et international',
      excerpt: 'Comment les artistes sénégalais naviguent entre identité locale et reconnaissance internationale...',
      content: 'L\'art contemporain sénégalais trouve sa force dans sa capacité à dialoguer avec le monde tout en gardant ses racines.',
      image: 'https://images.unsplash.com/photo-1620147563676-f94aced565b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGVyZm9ybWFuY2UlMjB0aGVhdGVyJTIwc3RhZ2V8ZW58MXx8fHwxNzU1OTg3MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Omar Ba',
      date: '12 Février 2024',
      readTime: '6 min',
      category: 'art',
      tags: ['Art contemporain', 'International', 'Identité'],
      likes: 71,
      comments: 12,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les articles', count: articles.length },
    { id: 'musique', label: 'Musique', count: 1 },
    { id: 'litterature', label: 'Littérature', count: 1 },
    { id: 'tradition', label: 'Traditions', count: 1 },
    { id: 'slam', label: 'Slam & Poésie', count: 1 },
    { id: 'art', label: 'Arts', count: 1 },
    { id: 'vitrine-culture', label: 'Vitrine Culture', count: 1 }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const filteredArticles = selectedCategory === 'all' 
    ? regularArticles 
    : regularArticles.filter(article => article.category === selectedCategory);

  const searchedArticles = searchTerm 
    ? filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredArticles;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
              📝 Blog & Actualités
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Culture</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos analyses, portraits d'artistes et réflexions sur la culture sénégalaise 
              et africaine contemporaine.
            </p>
          </div>

          {/* Barre de recherche et filtres */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Rechercher un article, un thème..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" 
                    : "border-orange-300 text-orange-600 hover:bg-orange-50"
                  }
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article à la une */}
      {featuredArticle && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                ⭐ Article à la une
              </Badge>
            </div>
            <Card className="overflow-hidden shadow-2xl border-0 bg-white">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      {featuredArticle.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>{featuredArticle.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4 text-blue-500" />
                        <span>{featuredArticle.comments}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-orange-300 text-orange-600">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Lire l'article
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles réguliers */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Derniers articles</h2>
            <p className="text-slate-600">
              {searchedArticles.length} article{searchedArticles.length > 1 ? 's' : ''} trouvé{searchedArticles.length > 1 ? 's' : ''}
              {searchTerm && ` pour "${searchTerm}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white group cursor-pointer">
                <div className="relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{article.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3 text-red-500" />
                        <span>{article.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3 text-blue-500" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-orange-300 text-orange-600 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                    Lire la suite
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {searchedArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">Aucun article trouvé</h3>
                <p className="text-slate-600 mb-6">
                  Essayez de modifier vos critères de recherche ou explorez nos autres catégories.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Voir tous les articles
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Restez Informé de nos Publications
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Recevez nos derniers articles et analyses culturelles directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Votre adresse email"
              className="bg-white/90 border-white/50 text-slate-800 placeholder:text-slate-500"
            />
            <Button 
              className="bg-white text-orange-600 hover:bg-orange-50 whitespace-nowrap"
            >
              S'abonner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}