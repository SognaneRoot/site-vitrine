<?php
// Données pour la page d'accueil
$nextEvent = [
    'date' => '30 Mars 2024',
    'time' => '18h00 - 21h00',
    'guest' => 'Amadou Ba',
    'guestTitle' => 'Griot et Conteur Traditionnel',
    'venue' => 'Espace Culturel Saint-Louis Théâtre',
    'description' => 'Une soirée exceptionnelle avec Amadou Ba, gardien des traditions orales sénégalaises, qui nous transportera dans l\'univers fascinant des griots.',
    'speciality' => 'Tradition orale, Kora, Contes ancestraux'
];

$highlights = [
    [
        'title' => 'Rencontres Mensuelles',
        'description' => 'Chaque dernier samedi du mois',
        'icon' => 'fas fa-calendar',
        'color' => 'from-orange-400 to-red-400'
    ],
    [
        'title' => 'Artistes Inspirants',
        'description' => 'Personnalités du monde culturel sénégalais',
        'icon' => 'fas fa-users',
        'color' => 'from-yellow-400 to-orange-400'
    ],
    [
        'title' => 'Échanges Vivants',
        'description' => 'Témoignages et moments artistiques',
        'icon' => 'fas fa-heart',
        'color' => 'from-red-400 to-pink-400'
    ],
    [
        'title' => 'Diffusion Live',
        'description' => 'En direct sur nos réseaux sociaux',
        'icon' => 'fas fa-play',
        'color' => 'from-blue-400 to-purple-400'
    ]
];

$pastGuests = [
    ['name' => 'Fatou Diome', 'specialty' => 'Écrivaine', 'month' => 'Février 2024'],
    ['name' => 'Ismaël Lô', 'specialty' => 'Musicien', 'month' => 'Janvier 2024'],
    ['name' => 'Ousmane Sow', 'specialty' => 'Sculpteur', 'month' => 'Décembre 2023'],
    ['name' => 'Coumba Gawlo', 'specialty' => 'Chanteuse', 'month' => 'Novembre 2023']
];
?>

<div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-background" style="background-image: url('https://images.unsplash.com/photo-1730635335549-09bd47b1a5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5lZ2FsJTIwc2FpbnQlMjBsb3VpcyUyMGN1bHR1cmUlMjB0cmFkaXRpb25hbCUyMG11c2ljfGVufDF8fHx8MTc1NTk4NzM1OXww&ixlib=rb-4.1.0&q=80&w=1080');"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="container">
                <div style="max-width: 768px;">
                    <div class="badge badge-primary mb-6">
                        ✨ Événement Culturel Mensuel
                    </div>
                    <h1 class="hero-title">
                        Vitrine <span style="background: linear-gradient(135deg, #f59e0b 0%, #ea5a2c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Culture</span>
                    </h1>
                    <p class="hero-subtitle">
                        Un rendez-vous culturel exceptionnel à Saint-Louis, où les artistes sénégalais partagent leur passion 
                        et transmettent leur savoir aux nouvelles générations.
                    </p>
                    <div class="hero-actions">
                        <a href="?page=program" class="btn btn-primary btn-lg">
                            <i class="fas fa-calendar"></i>
                            Découvrir le Programme
                        </a>
                        <a href="?page=about" class="btn btn-secondary btn-lg">
                            En savoir plus
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Prochaine Rencontre -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Prochaine Rencontre</h2>
                <p class="section-subtitle">
                    Ne manquez pas notre prochain rendez-vous culturel avec une personnalité exceptionnelle
                </p>
            </div>

            <div class="card card-shadow" style="max-width: 1024px; margin: 0 auto; overflow: hidden;">
                <div class="content-grid cols-2" style="gap: 0;">
                    <div>
                        <img src="https://images.unsplash.com/photo-1620147563676-f94aced565b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGVyZm9ybWFuY2UlMjB0aGVhdGVyJTIwc3RhZ2V8ZW58MXx8fHwxNzU1OTg3MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                             alt="Performance artistique" 
                             class="img-cover" 
                             style="height: 400px;">
                    </div>
                    <div class="card-body" style="background: linear-gradient(135deg, #fed7aa 0%, #fee2e2 100%);">
                        <div class="badge badge-success mb-4">Prochainement</div>
                        <h3 style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">
                            <?php echo $nextEvent['guest']; ?>
                        </h3>
                        <p style="font-size: var(--font-size-lg); color: var(--color-primary); margin-bottom: var(--spacing-4);">
                            <?php echo $nextEvent['guestTitle']; ?>
                        </p>
                        <p style="color: var(--color-slate-600); margin-bottom: var(--spacing-6);">
                            <?php echo $nextEvent['description']; ?>
                        </p>
                        
                        <div style="margin-bottom: var(--spacing-6);">
                            <div class="flex items-center gap-3 mb-3" style="color: var(--color-slate-700);">
                                <i class="fas fa-calendar" style="color: var(--color-primary);"></i>
                                <span><?php echo $nextEvent['date']; ?></span>
                            </div>
                            <div class="flex items-center gap-3 mb-3" style="color: var(--color-slate-700);">
                                <i class="fas fa-clock" style="color: var(--color-primary);"></i>
                                <span><?php echo $nextEvent['time']; ?></span>
                            </div>
                            <div class="flex items-center gap-3" style="color: var(--color-slate-700);">
                                <i class="fas fa-map-marker-alt" style="color: var(--color-primary);"></i>
                                <span><?php echo $nextEvent['venue']; ?></span>
                            </div>
                        </div>

                        <div class="mb-6">
                            <p style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-slate-700); margin-bottom: var(--spacing-2);">
                                Spécialités :
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <?php foreach (explode(', ', $nextEvent['speciality']) as $item): ?>
                                <span class="badge badge-outline">
                                    <?php echo htmlspecialchars($item); ?>
                                </span>
                                <?php endforeach; ?>
                            </div>
                        </div>

                        <a href="?page=program" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-star"></i>
                            Réserver ma place
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Points Forts -->
    <section class="section" style="background: linear-gradient(135deg, var(--color-slate-50) 0%, #fed7aa 100%);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">L'Esprit Vitrine Culture</h2>
                <p class="section-subtitle">
                    Découvrez ce qui rend nos rencontres si spéciales et uniques
                </p>
            </div>

            <div class="content-grid cols-4">
                <?php foreach ($highlights as $highlight): ?>
                <div class="card card-shadow text-center" style="background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);">
                    <div class="card-body">
                        <div style="width: 64px; height: 64px; margin: 0 auto var(--spacing-4) auto; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--color-<?php echo str_replace(['from-', 'to-', '-400'], ['', '', ''], $highlight['color']); ?>)); display: flex; align-items: center; justify-content: center;">
                            <i class="<?php echo $highlight['icon']; ?>" style="font-size: 2rem; color: var(--color-white);"></i>
                        </div>
                        <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">
                            <?php echo $highlight['title']; ?>
                        </h3>
                        <p style="color: var(--color-slate-600);">
                            <?php echo $highlight['description']; ?>
                        </p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Invités Récents -->
    <section class="section">
        <div class="container">
            <div class="content-grid cols-2">
                <div>
                    <h2 class="section-title text-left">Nos Invités Récents</h2>
                    <p style="font-size: var(--font-size-lg); color: var(--color-slate-600); margin-bottom: var(--spacing-8);">
                        Depuis février 2023, nous avons eu l'honneur d'accueillir des personnalités 
                        remarquables de la culture sénégalaise qui ont marqué notre communauté.
                    </p>
                    
                    <div style="margin-bottom: var(--spacing-8);">
                        <?php foreach ($pastGuests as $guest): ?>
                        <div class="flex items-center gap-4 p-4 mb-4" style="background-color: #fed7aa; border-radius: var(--radius-lg);">
                            <div style="width: 48px; height: 48px; background: var(--gradient-primary); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-users" style="color: var(--color-white); font-size: 1.5rem;"></i>
                            </div>
                            <div>
                                <h4 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800);">
                                    <?php echo $guest['name']; ?>
                                </h4>
                                <p style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                                    <?php echo $guest['specialty']; ?> • <?php echo $guest['month']; ?>
                                </p>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>

                    <a href="?page=program" class="btn btn-primary">
                        Voir tous nos invités
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div>
                    <div style="position: relative;">
                        <img src="https://images.unsplash.com/photo-1624695493609-c7cb60e7e583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1OTg3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                             alt="Communauté culturelle africaine" 
                             class="img-cover rounded-2xl shadow-2xl" 
                             style="width: 100%; height: 384px;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%); border-radius: var(--radius-2xl);"></div>
                        <div style="position: absolute; bottom: var(--spacing-6); left: var(--spacing-6); color: var(--color-white);">
                            <p style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold);">Communauté unie</p>
                            <p style="font-size: var(--font-size-sm); opacity: 0.9;">Transmission intergénérationnelle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="section" style="background: var(--gradient-primary);">
        <div class="container text-center" style="max-width: 1024px;">
            <h2 class="section-title" style="color: var(--color-white); margin-bottom: var(--spacing-6);">
                Rejoignez Notre Communauté Culturelle
            </h2>
            <p style="font-size: var(--font-size-xl); color: rgba(255, 255, 255, 0.9); margin-bottom: var(--spacing-8);">
                Ne manquez aucune de nos rencontres exceptionnelles. Inscrivez-vous à notre newsletter 
                et soyez les premiers informés de nos prochains événements.
            </p>
            <div class="flex flex-col gap-4 justify-center">
                <a href="?page=contact" class="btn btn-secondary btn-lg">
                    <i class="fas fa-envelope"></i>
                    S'inscrire à la Newsletter
                </a>
                <a href="?page=gallery" class="btn btn-lg" style="background-color: var(--color-white); color: var(--color-primary);">
                    <i class="fas fa-images"></i>
                    Voir la Galerie
                </a>
            </div>
        </div>
    </section>
</div>

<style>
@media (min-width: 640px) {
    .hero-actions {
        flex-direction: row;
    }
}

@media (max-width: 640px) {
    .content-grid.cols-2 {
        grid-template-columns: 1fr;
    }
    
    .hero-title {
        font-size: var(--font-size-3xl);
    }
    
    .card .content-grid.cols-2 {
        grid-template-columns: 1fr;
    }
}
</style>