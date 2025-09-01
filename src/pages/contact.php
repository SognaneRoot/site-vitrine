<?php
// Inclusion du gestionnaire de contact
include_once 'includes/contact-handler.php';

// Récupération des erreurs et données du formulaire
$formErrors = $_SESSION['form_errors'] ?? [];
$formData = $_SESSION['form_data'] ?? [];

// Nettoyer les données de session après utilisation
unset($_SESSION['form_errors'], $_SESSION['form_data']);

// Informations de contact
$contactInfo = [
    [
        'icon' => 'fas fa-map-marker-alt',
        'title' => 'Adresse',
        'content' => "Espace Culturel Saint-Louis Théâtre\nSaint-Louis, Sénégal",
        'color' => 'from-orange-400 to-red-400'
    ],
    [
        'icon' => 'fas fa-phone',
        'title' => 'Téléphone',
        'content' => "+221 33 961 XX XX\n+221 77 XXX XX XX",
        'color' => 'from-blue-400 to-purple-400'
    ],
    [
        'icon' => 'fas fa-envelope',
        'title' => 'Email',
        'content' => "sognanendiaga0@gmail.com\ncontact@vitrineculture.sn",
        'color' => 'from-green-400 to-emerald-400'
    ],
    [
        'icon' => 'fas fa-clock',
        'title' => 'Horaires',
        'content' => "Événements : Derniers samedis du mois\n18h00 - 21h00",
        'color' => 'from-yellow-400 to-orange-400'
    ]
];

$socialLinks = [
    ['icon' => 'fab fa-facebook', 'name' => 'Facebook', 'url' => '#', 'color' => 'text-blue-600'],
    ['icon' => 'fab fa-instagram', 'name' => 'Instagram', 'url' => '#', 'color' => 'text-pink-600'],
    ['icon' => 'fab fa-youtube', 'name' => 'YouTube', 'url' => '#', 'color' => 'text-red-600'],
    ['icon' => 'fab fa-twitter', 'name' => 'Twitter', 'url' => '#', 'color' => 'text-blue-400']
];

$faqItems = [
    [
        'question' => 'Comment puis-je assister à un événement Vitrine Culture ?',
        'answer' => 'Les événements sont ouverts à tous et gratuits. Il est recommandé de s\'inscrire via notre formulaire de contact ou nos réseaux sociaux pour recevoir les confirmations.'
    ],
    [
        'question' => 'Puis-je proposer un artiste ou intervenant ?',
        'answer' => 'Absolument ! Nous sommes toujours à la recherche de nouvelles personnalités culturelles. Contactez-nous avec une présentation de l\'artiste et de son travail.'
    ],
    [
        'question' => 'Comment devenir partenaire de Vitrine Culture ?',
        'answer' => 'Nous cherchons des partenaires partageant notre vision de valorisation culturelle. Contactez-nous pour discuter des possibilités de collaboration.'
    ],
    [
        'question' => 'Les événements sont-ils filmés ?',
        'answer' => 'Oui, tous nos événements sont diffusés en direct et enregistrés. Les vidéos sont disponibles sur notre site et nos réseaux sociaux.'
    ]
];

// Générer le lien mailto avec les données du formulaire
function generateMailtoLink($formData) {
    $subject = urlencode('[Vitrine Culture] ' . ($formData['subject'] ?? 'Nouvelle demande'));
    $body = urlencode("
Bonjour,

Nom: " . ($formData['firstName'] ?? '') . " " . ($formData['lastName'] ?? '') . "
Email: " . ($formData['email'] ?? '') . "
Téléphone: " . ($formData['phone'] ?? '') . "
Type de demande: " . ($formData['type'] ?? '') . "

Sujet: " . ($formData['subject'] ?? '') . "

Message:
" . ($formData['message'] ?? '') . "

---
Envoyé depuis le site Vitrine Culture
    ");
    
    return "mailto:sognanendiaga0@gmail.com?subject={$subject}&body={$body}";
}
?>

<div class="contact-page" style="min-height: 100vh; background: var(--gradient-bg);">
    <!-- Hero Section -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <div class="badge badge-primary mb-6">
                    📞 Nous Contacter
                </div>
                <h1 style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-6);">
                    Contactez <span style="background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Vitrine Culture</span>
                </h1>
                <p class="section-subtitle" style="font-size: var(--font-size-xl);">
                    Une question, une suggestion, ou envie de rejoindre notre communauté ? 
                    Nous sommes là pour vous écouter et vous accompagner.
                </p>
            </div>
        </div>
    </section>

    <!-- Informations de contact -->
    <section style="padding: var(--spacing-16) 0;">
        <div class="container">
            <div class="content-grid cols-4" style="margin-bottom: var(--spacing-16);">
                <?php foreach ($contactInfo as $index => $info): ?>
                <div class="card card-shadow text-center">
                    <div class="card-body">
                        <div style="width: 64px; height: 64px; margin: 0 auto var(--spacing-4) auto; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--color-<?php echo str_replace(['from-', 'to-', '-400'], ['', '', ''], $info['color']); ?>)); display: flex; align-items: center; justify-content: center;">
                            <i class="<?php echo $info['icon']; ?>" style="font-size: 2rem; color: var(--color-white);"></i>
                        </div>
                        <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">
                            <?php echo $info['title']; ?>
                        </h3>
                        <p style="color: var(--color-slate-600); font-size: var(--font-size-sm); line-height: var(--line-height-relaxed); white-space: pre-line;">
                            <?php echo $info['content']; ?>
                        </p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Formulaire de contact et informations -->
    <section style="padding: var(--spacing-16) 0;">
        <div class="container">
            <div class="content-grid cols-2 gap-12">
                <!-- Formulaire -->
                <div class="card card-shadow">
                    <div class="card-body">
                        <h2 style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-6);">
                            Envoyez-nous un message
                        </h2>
                        
                        <form method="POST" action="?page=contact" id="contactForm">
                            <input type="hidden" name="action" value="contact">
                            <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
                            
                            <div class="content-grid cols-2">
                                <div class="form-group">
                                    <label for="firstName" class="form-label required">Prénom</label>
                                    <input type="text" 
                                           id="firstName" 
                                           name="firstName" 
                                           class="form-input <?php echo isset($formErrors['firstName']) ? 'error' : ''; ?>"
                                           value="<?php echo htmlspecialchars($formData['firstName'] ?? ''); ?>"
                                           required>
                                    <?php if (isset($formErrors['firstName'])): ?>
                                    <div class="form-error"><?php echo $formErrors['firstName']; ?></div>
                                    <?php endif; ?>
                                </div>
                                
                                <div class="form-group">
                                    <label for="lastName" class="form-label required">Nom</label>
                                    <input type="text" 
                                           id="lastName" 
                                           name="lastName" 
                                           class="form-input <?php echo isset($formErrors['lastName']) ? 'error' : ''; ?>"
                                           value="<?php echo htmlspecialchars($formData['lastName'] ?? ''); ?>"
                                           required>
                                    <?php if (isset($formErrors['lastName'])): ?>
                                    <div class="form-error"><?php echo $formErrors['lastName']; ?></div>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="email" class="form-label required">Email</label>
                                <input type="email" 
                                       id="email" 
                                       name="email" 
                                       class="form-input <?php echo isset($formErrors['email']) ? 'error' : ''; ?>"
                                       value="<?php echo htmlspecialchars($formData['email'] ?? ''); ?>"
                                       required>
                                <?php if (isset($formErrors['email'])): ?>
                                <div class="form-error"><?php echo $formErrors['email']; ?></div>
                                <?php endif; ?>
                            </div>

                            <div class="form-group">
                                <label for="phone" class="form-label">Téléphone</label>
                                <input type="tel" 
                                       id="phone" 
                                       name="phone" 
                                       class="form-input"
                                       value="<?php echo htmlspecialchars($formData['phone'] ?? ''); ?>"
                                       placeholder="+221 XX XXX XX XX">
                            </div>

                            <div class="form-group">
                                <label for="type" class="form-label">Type de demande</label>
                                <select id="type" name="type" class="form-select">
                                    <option value="">Sélectionnez le type de demande</option>
                                    <option value="participation" <?php echo ($formData['type'] ?? '') === 'participation' ? 'selected' : ''; ?>>Participation à un événement</option>
                                    <option value="artiste" <?php echo ($formData['type'] ?? '') === 'artiste' ? 'selected' : ''; ?>>Proposition d'artiste</option>
                                    <option value="partenariat" <?php echo ($formData['type'] ?? '') === 'partenariat' ? 'selected' : ''; ?>>Partenariat</option>
                                    <option value="media" <?php echo ($formData['type'] ?? '') === 'media' ? 'selected' : ''; ?>>Demande média</option>
                                    <option value="autre" <?php echo ($formData['type'] ?? '') === 'autre' ? 'selected' : ''; ?>>Autre</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="subject" class="form-label required">Sujet</label>
                                <input type="text" 
                                       id="subject" 
                                       name="subject" 
                                       class="form-input <?php echo isset($formErrors['subject']) ? 'error' : ''; ?>"
                                       value="<?php echo htmlspecialchars($formData['subject'] ?? ''); ?>"
                                       required>
                                <?php if (isset($formErrors['subject'])): ?>
                                <div class="form-error"><?php echo $formErrors['subject']; ?></div>
                                <?php endif; ?>
                            </div>

                            <div class="form-group">
                                <label for="message" class="form-label required">Message</label>
                                <textarea id="message" 
                                          name="message" 
                                          class="form-textarea <?php echo isset($formErrors['message']) ? 'error' : ''; ?>"
                                          placeholder="Décrivez votre demande en détail..."
                                          required><?php echo htmlspecialchars($formData['message'] ?? ''); ?></textarea>
                                <?php if (isset($formErrors['message'])): ?>
                                <div class="form-error"><?php echo $formErrors['message']; ?></div>
                                <?php endif; ?>
                            </div>

                            <div style="margin-bottom: var(--spacing-3);">
                                <button type="submit" class="btn btn-primary" style="width: 100%;">
                                    <i class="fas fa-paper-plane"></i>
                                    Envoyer le message
                                </button>
                            </div>
                            
                            <div class="text-center">
                                <span style="color: var(--color-slate-500); font-size: var(--font-size-sm);">ou</span>
                            </div>
                            
                            <div style="margin-top: var(--spacing-3);">
                                <a href="<?php echo generateMailtoLink($formData); ?>" 
                                   class="btn btn-outline" 
                                   style="width: 100%;">
                                    <i class="fas fa-envelope"></i>
                                    Envoyer par email direct
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Informations supplémentaires -->
                <div style="display: flex; flex-direction: column; gap: var(--spacing-8);">
                    <!-- Image et description -->
                    <div class="card card-shadow" style="overflow: hidden;">
                        <img src="https://images.unsplash.com/photo-1745683512464-3d20bf25eff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWludCUyMGxvdWlzJTIwc2VuZWdhbCUyMGFyY2hpdGVjdHVyZSUyMGNvbnRhY3R8ZW58MXx8fHwxNzU2MDU3MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                             alt="Saint-Louis Sénégal" 
                             class="img-cover" 
                             style="width: 100%; height: 192px;">
                        <div class="card-body">
                            <h3 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-3);">
                                Venez nous rencontrer
                            </h3>
                            <p style="color: var(--color-slate-600); margin-bottom: var(--spacing-4);">
                                Nos événements se déroulent dans le cadre exceptionnel de Saint-Louis, 
                                ville classée au patrimoine mondial de l'UNESCO. Un lieu chargé d'histoire 
                                pour des rencontres culturelles authentiques.
                            </p>
                            <a href="?page=about" class="btn btn-outline">
                                En savoir plus sur nous
                            </a>
                        </div>
                    </div>

                    <!-- Réseaux sociaux -->
                    <div class="card card-shadow">
                        <div class="card-body">
                            <h3 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-4);">
                                Suivez-nous
                            </h3>
                            <p style="color: var(--color-slate-600); margin-bottom: var(--spacing-6);">
                                Restez connecté avec notre communauté sur les réseaux sociaux pour ne rien manquer 
                                de nos actualités et événements.
                            </p>
                            <div class="content-grid cols-2">
                                <?php foreach ($socialLinks as $social): ?>
                                <a href="<?php echo $social['url']; ?>" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="btn btn-outline" 
                                   style="justify-content: flex-start;">
                                    <i class="<?php echo $social['icon']; ?>" style="color: var(--color-primary);"></i>
                                    <?php echo $social['name']; ?>
                                </a>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>

                    <!-- Actions rapides -->
                    <div class="card card-shadow">
                        <div class="card-body">
                            <h3 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-4);">
                                Actions rapides
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: var(--spacing-3);">
                                <a href="?page=program" class="btn btn-outline" style="justify-content: flex-start;">
                                    <i class="fas fa-calendar"></i>
                                    Voir le programme des événements
                                </a>
                                <button class="btn btn-outline" style="justify-content: flex-start;">
                                    <i class="fas fa-users"></i>
                                    Rejoindre notre newsletter
                                </button>
                                <a href="?page=gallery" class="btn btn-outline" style="justify-content: flex-start;">
                                    <i class="fas fa-comments"></i>
                                    Voir notre galerie
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="section" style="background: linear-gradient(135deg, var(--color-slate-50) 0%, #fed7aa 100%);">
        <div class="container" style="max-width: 1024px;">
            <div class="section-header">
                <h2 class="section-title">Questions Fréquentes</h2>
                <p class="section-subtitle">
                    Trouvez rapidement les réponses aux questions les plus courantes
                </p>
            </div>

            <div style="display: flex; flex-direction: column; gap: var(--spacing-6);">
                <?php foreach ($faqItems as $index => $item): ?>
                <div class="card card-shadow">
                    <div class="card-body">
                        <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-3);">
                            <?php echo $item['question']; ?>
                        </h3>
                        <p style="color: var(--color-slate-600); line-height: var(--line-height-relaxed);">
                            <?php echo $item['answer']; ?>
                        </p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center mt-8">
                <p style="color: var(--color-slate-600); margin-bottom: var(--spacing-4);">
                    Vous ne trouvez pas la réponse à votre question ?
                </p>
                <button onclick="document.getElementById('contactForm').scrollIntoView()" class="btn btn-primary">
                    <i class="fas fa-envelope"></i>
                    Posez votre question
                </button>
            </div>
        </div>
    </section>

    <!-- Partenaires -->
    <section class="section">
        <div class="container text-center">
            <h2 class="section-title">Nos Partenaires</h2>
            <div class="content-grid cols-3">
                <div class="card card-shadow">
                    <div class="card-body">
                        <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">
                            Association E'leuk
                        </h3>
                        <p style="color: var(--color-slate-600); font-size: var(--font-size-sm);">
                            Partenaire principal et organisateur
                        </p>
                    </div>
                </div>
                <div class="card card-shadow">
                    <div class="card-body">
                        <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">
                            Saint-Louis Théâtre
                        </h3>
                        <p style="color: var(--color-slate-600); font-size: var(--font-size-sm);">
                            Lieu d'accueil de nos événements
                        </p>
                    </div>
                </div>
                <div class="card card-shadow">
                    <div class="card-body">
                        <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">
                            Ministère de la Culture
                        </h3>
                        <p style="color: var(--color-slate-600); font-size: var(--font-size-sm);">
                            Soutien institutionnel
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
.form-input.error,
.form-textarea.error,
.form-select.error {
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

@media (max-width: 1024px) {
    .content-grid.cols-2.gap-12 {
        grid-template-columns: 1fr;
        gap: var(--spacing-8);
    }
}

@media (max-width: 640px) {
    .content-grid.cols-2 {
        grid-template-columns: 1fr;
    }
    
    .content-grid.cols-3 {
        grid-template-columns: 1fr;
    }
    
    .content-grid.cols-4 {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>