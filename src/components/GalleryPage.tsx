import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Camera, Play, Eye, Heart, Download, Share, Filter, Grid3X3, List } from 'lucide-react';

interface GalleryPageProps {
  onPageChange: (page: string) => void;
}

export function GalleryPage({ onPageChange }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1744973124302-92d4cb068084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyYWwlMjBldmVudCUyMHBlcmZvcm1hbmNlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2MDU3MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Fatou Diome - Février 2024',
      category: 'litterature',
      event: 'Rencontre Littéraire',
      photographer: 'Moussa Sène',
      likes: 124,
      date: '24 Février 2024'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1572124013743-1997454e3aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWNpYW5zJTIwY29uY2VydCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjA1NzA3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Ismaël Lô en Concert',
      category: 'musique',
      event: 'Performance Musicale',
      photographer: 'Aminata Fall',
      likes: 201,
      date: '27 Janvier 2024'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1544476613-121ac8adf256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Rvcnl0ZWxsZXIlMjB0cmFkaXRpb25hbCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1NjA1NzA3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Coumba Gawlo - Traditions',
      category: 'tradition',
      event: 'Chant Traditionnel',
      photographer: 'Omar Ndiaye',
      likes: 156,
      date: '25 Novembre 2023'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1620147563676-f94aced565b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGVyZm9ybWFuY2UlMjB0aGVhdGVyJTIwc3RhZ2V8ZW58MXx8fHwxNzU1OTg3MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Performance Théâtrale',
      category: 'theatre',
      event: 'Art Dramatique',
      photographer: 'Awa Diop',
      likes: 89,
      date: '30 Décembre 2023'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1589252854150-a5c502f1e1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Rvcnl0ZWxsZXIlMjBncmlvdCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1NTk4NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Conte Moderne',
      category: 'slam',
      event: 'Slam & Poésie',
      photographer: 'Cheikh Sow',
      likes: 167,
      date: '15 Octobre 2023'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1624695493609-c7cb60e7e583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1OTg3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Moments de Partage',
      category: 'communaute',
      event: 'Échanges Communautaires',
      photographer: 'Fatou Ba',
      likes: 203,
      date: '18 Septembre 2023'
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1572124013743-1997454e3aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWNpYW5zJTIwY29uY2VydCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjA1NzA3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Ismaël Lô - Performance Complète',
      duration: '48:23',
      views: 3521,
      date: '27 Janvier 2024',
      category: 'musique'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1744973124302-92d4cb068084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyYWwlMjBldmVudCUyMHBlcmZvcm1hbmNlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2MDU3MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Fatou Diome - Échanges avec le Public',
      duration: '32:15',
      views: 2804,
      date: '24 Février 2024',
      category: 'litterature'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1544476613-121ac8adf256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Rvcnl0ZWxsZXIlMjB0cmFkaXRpb25hbCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1NjA1NzA3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Coumba Gawlo - Chants Traditionnels',
      duration: '25:41',
      views: 1967,
      date: '25 Novembre 2023',
      category: 'tradition'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1589252854150-a5c502f1e1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3Rvcnl0ZWxsZXIlMjBncmlvdCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1NTk4NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Session Slam et Poésie',
      duration: '19:33',
      views: 1456,
      date: '15 Octobre 2023',
      category: 'slam'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tout voir', count: photos.length + videos.length },
    { id: 'musique', label: 'Musique', count: 4 },
    { id: 'litterature', label: 'Littérature', count: 3 },
    { id: 'theatre', label: 'Théâtre', count: 2 },
    { id: 'tradition', label: 'Traditions', count: 3 },
    { id: 'slam', label: 'Slam & Poésie', count: 2 },
    { id: 'communaute', label: 'Communauté', count: 2 }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
              📸 Galerie Multimédia
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Galerie <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Culture</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Revivez les moments forts de nos rencontres culturelles à travers notre collection 
              de photos et vidéos exclusives.
            </p>
          </div>

          {/* Filtres et contrôles */}
          <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap gap-2">
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

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode(viewMode === 'grid' ? 'masonry' : 'grid')}
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-orange-100">
              <TabsTrigger value="photos" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white">
                <Camera className="mr-2 h-4 w-4" />
                Photos ({filteredPhotos.length})
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white">
                <Play className="mr-2 h-4 w-4" />
                Vidéos ({filteredVideos.length})
              </TabsTrigger>
            </TabsList>

            {/* Photos */}
            <TabsContent value="photos" className="space-y-8">
              <div className={`grid gap-6 ${viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'columns-1 md:columns-2 lg:columns-3'
              }`}>
                {filteredPhotos.map((photo) => (
                  <Dialog key={photo.id}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                        <div className="relative">
                          <ImageWithFallback
                            src={photo.src}
                            alt={photo.title}
                            className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                              viewMode === 'grid' ? 'h-64' : 'h-auto'
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white">
                              <p className="font-semibold">{photo.title}</p>
                              <p className="text-sm opacity-90">{photo.event}</p>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Badge className="bg-white/20 backdrop-blur text-white">
                              <Eye className="w-3 h-3 mr-1" />
                              Voir
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-slate-800 mb-2">{photo.title}</h3>
                          <div className="flex items-center justify-between text-sm text-slate-600">
                            <span>Par {photo.photographer}</span>
                            <span>{photo.date}</span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                              {photo.event}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Heart className="w-4 h-4 text-red-500" />
                              {photo.likes}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full">
                      <div className="space-y-4">
                        <ImageWithFallback
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{photo.title}</h3>
                            <p className="text-slate-600">Photographe : {photo.photographer}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4 mr-2" />
                              Télécharger
                            </Button>
                            <Button size="sm" variant="outline">
                              <Share className="w-4 h-4 mr-2" />
                              Partager
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            {/* Vidéos */}
            <TabsContent value="videos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow border-0 bg-white group">
                    <div className="relative">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="lg" className="bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white/30">
                          <Play className="w-6 h-6 mr-2" />
                          Regarder
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-black/70 text-white">
                          {video.duration}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 text-white">
                          <Play className="w-3 h-3 mr-1" />
                          LIVE
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-800 mb-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                        <span>{video.views.toLocaleString()} vues</span>
                        <span>{video.date}</span>
                      </div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        {video.category}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Notre Archive Culturelle</h2>
            <p className="text-lg text-slate-600">Chiffres de notre documentation visuelle</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800">500+</div>
              <div className="text-slate-600">Photos</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                <Play className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800">25</div>
              <div className="text-slate-600">Vidéos</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800">50K+</div>
              <div className="text-slate-600">Vues totales</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800">2.5K</div>
              <div className="text-slate-600">Likes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Contribuez à Notre Archive
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Vous avez assisté à l'un de nos événements ? Partagez vos photos et vidéos 
            pour enrichir notre galerie communautaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600"
              onClick={() => onPageChange('contact')}
            >
              <Camera className="mr-2 h-5 w-5" />
              Partager mes Photos
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50"
              onClick={() => onPageChange('program')}
            >
              Voir le Programme
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}