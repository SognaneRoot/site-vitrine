<?php
// Inclusion du gestionnaire de contact pour les réservations
include_once 'includes/contact-handler.php';

// Récupération des erreurs et données du formulaire
$formErrors = $_SESSION['form_errors'] ?? [];
$formData = $_SESSION['form_data'] ?? [];

// Nettoyer les données de session après utilisation
unset($_SESSION['form_errors'], $_SESSION['form_data']);

// Événements disponibles (données statiques pour l'exemple)
$upcomingEvents = [
    [
        'id' => '1',
        'title' => 'Rencontre avec Amadou Ba',
        'date' => '30 Mars 2024',
        'time' => '18h00 - 21h00',
        'location' => 'Espace Culturel Saint-Louis Théâtre',
        'description' => 'Une soirée exceptionnelle avec Amadou Ba, gardien des traditions orales sénégalaises, qui nous transportera dans l\'univers fascinant des griots.',
        'guests' => ['Amadou Ba - Griot et Conteur'],
        'maxCapacity' => 80,
        'reservedSeats' => 45,
        'image' => 'https://images.unsplash.com/photo-1620147563676-f94aced565b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGVyZm9ybWFuY2UlMjB0aGVhdGVyJTIwc3RhZ2V8ZW58MXx8fHwxNzU1OTg3MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    [
        'id' => '2',
        'title' => 'Soirée avec Awa Ly',
        'date' => '27 Avril 2024',
        'time' => '18h00 - 21h00',
        'location' => 'Espace Culturel Saint-Louis Théâtre',
        'description' => 'Découvrez l\'univers musical d\'Awa Ly, artiste franco-sénégalaise qui mélange tradition et modernité dans ses créations.',
        'guests' => ['Awa Ly - Chanteuse'],
        'maxCapacity' => 80,
        'reservedSeats' => 12,
        'image' => 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBlcmZvcm1hbmNlJTIwYWZyaWNhbiUyMHdvbWFufGVufDF8fHx8MTc1NjEzMzY4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
];

function getAvailableSeats($event) {
    return $event['maxCapacity'] - $event['reservedSeats'];
}

function getCapacityStatus($event) {
    $available = getAvailableSeats($event);
    $percentage = ($available / $event['maxCapacity']) * 100;
    
    if ($percentage > 50) return ['color' => 'success', 'text' => 'Nombreuses places'];
    if ($percentage > 20) return ['color' => 'warning', 'text' => 'Places limitées'];
    if ($percentage > 0) return ['color' => 'error', 'text' => 'Dernières places'];
    return ['color' => 'secondary', 'text' => 'Complet'];
}

// Générer le lien mailto pour réservation
function generateReservationMailto($formData, $eventTitle = '') {
    $subject = urlencode('[Vitrine Culture] Réservation - ' . $eventTitle);
    $body = urlencode("
Bonjour,

Je souhaite réserver pour l'événement Vitrine Culture :

Participant: " . ($formData['firstName'] ?? '') . " " . ($formData['lastName'] ?? '') . "
Email: " . ($formData['email'] ?? '') . "
Téléphone: " . ($formData['phone'] ?? '') . "
Événement: " . $eventTitle . "
Nombre de personnes: " . ($formData['numberOfGuests'] ?? '1') . "

Demandes particulières:
" . ($formData['specialRequests'] ?? 'Aucune') . "

Merci de confirmer ma réservation.

Cordialement,
" . ($formData['firstName'] ?? '') . " " . ($formData['lastName'] ?? '') . "

---
Demande de réservation envoyée depuis le site Vitrine Culture
    ");
    
    return "mailto:sognanendiaga0@gmail.com?subject={$subject}&body={$body}";
}
?>

<div class="reservation-page" style="min-height: 100vh; background: var(--gradient-bg);">
    <!-- Hero Section -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <div class="badge badge-primary mb-6">
                    🎫 Réservation
                </div>
                <h1 style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-6);">
                    Réservez votre <span style="background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">place</span>
                </h1>
                <p class="section-subtitle" style="font-size: var(--font-size-xl);">
                    Rejoignez-nous pour une expérience culturelle unique chaque dernier samedi du mois. 
                    Réservation gratuite par email ou téléphone.
                </p>
            </div>
        </div>
    </section>

    <!-- Contenu principal -->
    <section style="padding: 0 var(--spacing-4) var(--spacing-16) var(--spacing-4);">
        <div class="container">
            <?php if (empty($upcomingEvents)): ?>
            <div class="card card-shadow text-center" style="padding: var(--spacing-12);">
                <i class="fas fa-calendar" style="font-size: 4rem; color: var(--color-slate-400); margin-bottom: var(--spacing-4);"></i>
                <h2 style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-4);">
                    Aucun événement disponible
                </h2>
                <p style="color: var(--color-slate-600); margin-bottom: var(--spacing-6);">
                    Il n'y a actuellement aucun événement ouvert à la réservation. 
                    Les nouveaux événements sont généralement annoncés au début de chaque mois.
                </p>
                <a href="?page=contact" class="btn btn-primary">
                    Être notifié des prochains événements
                </a>
            </div>
            <?php else: ?>
            <div class="content-grid cols-2 gap-12">
                <!-- Liste des événements -->
                <div>
                    <h2 style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-6);">
                        Événements disponibles
                    </h2>
                    
                    <div style="display: flex; flex-direction: column; gap: var(--spacing-6);">
                        <?php foreach ($upcomingEvents as $event): ?>
                        <?php 
                        $available = getAvailableSeats($event);
                        $status = getCapacityStatus($event);
                        ?>
                        <div class="card card-shadow event-card" 
                             data-event-id="<?php echo $event['id']; ?>"
                             data-event-title="<?php echo htmlspecialchars($event['title']); ?>"
                             style="overflow: hidden; cursor: pointer; transition: all var(--transition-normal);">
                            <div class="flex">
                                <div style="width: 96px; height: 96px; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <i class="fas fa-calendar" style="font-size: 2rem; color: var(--color-white);"></i>
                                </div>
                                
                                <div style="flex: 1; padding: var(--spacing-4);">
                                    <div class="flex items-start justify-between mb-2">
                                        <h3 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); font-size: var(--font-size-lg);">
                                            <?php echo $event['title']; ?>
                                        </h3>
                                        <span class="badge badge-<?php echo $status['color']; ?>" style="margin-left: var(--spacing-2);">
                                            <?php echo $status['text']; ?>
                                        </span>
                                    </div>
                                    
                                    <div style="margin-bottom: var(--spacing-3); font-size: var(--font-size-sm); color: var(--color-slate-600);">
                                        <div class="flex items-center gap-2 mb-1">
                                            <i class="fas fa-calendar" style="width: 16px; color: var(--color-primary);"></i>
                                            <span><?php echo $event['date']; ?></span>
                                        </div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <i class="fas fa-clock" style="width: 16px; color: var(--color-primary);"></i>
                                            <span><?php echo $event['time']; ?></span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <i class="fas fa-map-marker-alt" style="width: 16px; color: var(--color-primary);"></i>
                                            <span><?php echo $event['location']; ?></span>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2" style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                                            <i class="fas fa-users" style="width: 16px;"></i>
                                            <span><?php echo $available; ?>/<?php echo $event['maxCapacity']; ?> places</span>
                                        </div>
                                        <i class="fas fa-check-circle event-selected-icon" style="color: var(--color-primary); font-size: 1.25rem; display: none;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Section de réservation -->
                <div>
                    <div id="eventDetails" style="display: none;">
                        <!-- Détails de l'événement sélectionné -->
                        <div class="card card-shadow" style="overflow: hidden; margin-bottom: var(--spacing-6);">
                            <img id="eventImage" 
                                 alt="Événement sélectionné" 
                                 class="img-cover" 
                                 style="width: 100%; height: 192px;">
                            <div class="card-body">
                                <h3 id="eventTitle" style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-3);">
                                </h3>
                                <p id="eventDescription" style="color: var(--color-slate-600); margin-bottom: var(--spacing-4); line-height: var(--line-height-relaxed);">
                                </p>
                                
                                <div id="eventGuests" style="margin-bottom: var(--spacing-4);"></div>
                                
                                <div class="content-grid cols-2">
                                    <div style="background-color: #fed7aa; padding: var(--spacing-3); border-radius: var(--radius-lg);">
                                        <div class="flex items-center gap-2 mb-1" style="color: var(--color-primary);">
                                            <i class="fas fa-users" style="width: 16px;"></i>
                                            <span style="font-weight: var(--font-weight-semibold);">Places restantes</span>
                                        </div>
                                        <span id="availableSeats" style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-primary);">
                                        </span>
                                    </div>
                                    <div style="background-color: #dbeafe; padding: var(--spacing-3); border-radius: var(--radius-lg);">
                                        <div class="flex items-center gap-2 mb-1" style="color: var(--color-info);">
                                            <i class="fas fa-ticket-alt" style="width: 16px;"></i>
                                            <span style="font-weight: var(--font-weight-semibold);">Participation</span>
                                        </div>
                                        <span style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-info);">Gratuite</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Formulaire de réservation simplifié -->
                        <div class="card card-shadow">
                            <div class="card-body">
                                <h3 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-slate-800); margin-bottom: var(--spacing-6);">
                                    Réserver par contact direct
                                </h3>
                                
                                <!-- Processus en 3 étapes -->
                                <div style="margin-bottom: var(--spacing-8);">
                                    <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-4);">
                                        Comment réserver en 3 étapes :
                                    </h4>
                                    
                                    <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
                                        <div class="flex items-start gap-3">
                                            <div style="width: 32px; height: 32px; background: var(--gradient-primary); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--color-white); font-weight: var(--font-weight-bold); flex-shrink: 0;">1</div>
                                            <div>
                                                <h5 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-1);">
                                                    Remplissez vos informations
                                                </h5>
                                                <p style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                                                    Complétez le formulaire ci-dessous avec vos coordonnées
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start gap-3">
                                            <div style="width: 32px; height: 32px; background: var(--gradient-primary); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--color-white); font-weight: var(--font-weight-bold); flex-shrink: 0;">2</div>
                                            <div>
                                                <h5 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-1);">
                                                    Envoyez votre demande
                                                </h5>
                                                <p style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                                                    Utilisez le bouton email ou appelez-nous directement
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start gap-3">
                                            <div style="width: 32px; height: 32px; background: var(--gradient-primary); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--color-white); font-weight: var(--font-weight-bold); flex-shrink: 0;">3</div>
                                            <div>
                                                <h5 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-1);">
                                                    Recevez la confirmation
                                                </h5>
                                                <p style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                                                    Nous confirmons votre participation sous 24h
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Formulaire simple -->
                                <form id="reservationForm">
                                    <input type="hidden" id="selectedEventId" name="eventId">
                                    <input type="hidden" id="selectedEventTitle" name="eventTitle">
                                    
                                    <div class="content-grid cols-2">
                                        <div class="form-group">
                                            <label for="firstName" class="form-label required">Prénom</label>
                                            <input type="text" 
                                                   id="firstName" 
                                                   name="firstName" 
                                                   class="form-input"
                                                   value="<?php echo htmlspecialchars($formData['firstName'] ?? ''); ?>"
                                                   required>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="lastName" class="form-label required">Nom</label>
                                            <input type="text" 
                                                   id="lastName" 
                                                   name="lastName" 
                                                   class="form-input"
                                                   value="<?php echo htmlspecialchars($formData['lastName'] ?? ''); ?>"
                                                   required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="email" class="form-label required">Email</label>
                                        <input type="email" 
                                               id="email" 
                                               name="email" 
                                               class="form-input"
                                               value="<?php echo htmlspecialchars($formData['email'] ?? ''); ?>"
                                               required>
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
                                        <label for="numberOfGuests" class="form-label required">Nombre de personnes</label>
                                        <select id="numberOfGuests" name="numberOfGuests" class="form-select" required>
                                            <?php for ($i = 1; $i <= 10; $i++): ?>
                                            <option value="<?php echo $i; ?>" <?php echo ($formData['numberOfGuests'] ?? 1) == $i ? 'selected' : ''; ?>>
                                                <?php echo $i; ?> personne<?php echo $i > 1 ? 's' : ''; ?>
                                            </option>
                                            <?php endfor; ?>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="specialRequests" class="form-label">Demandes particulières</label>
                                        <textarea id="specialRequests" 
                                                  name="specialRequests" 
                                                  class="form-textarea"
                                                  placeholder="Accessibilité, allergies, questions..."><?php echo htmlspecialchars($formData['specialRequests'] ?? ''); ?></textarea>
                                    </div>

                                    <!-- Boutons d'action -->
                                    <div style="display: flex; flex-direction: column; gap: var(--spacing-3);">
                                        <button type="button" 
                                                onclick="sendReservationEmail()" 
                                                class="btn btn-primary" 
                                                style="width: 100%;">
                                            <i class="fas fa-envelope"></i>
                                            Envoyer la réservation par email
                                        </button>
                                        
                                        <div class="content-grid cols-2">
                                            <a href="tel:+221XXXXXXXX" class="btn btn-outline">
                                                <i class="fas fa-phone"></i>
                                                Appeler
                                            </a>
                                            <a href="https://wa.me/221XXXXXXXX" 
                                               target="_blank" 
                                               class="btn btn-outline">
                                                <i class="fab fa-whatsapp"></i>
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <p style="font-size: var(--font-size-sm); color: var(--color-slate-500); text-align: center; margin-top: var(--spacing-4);">
                                        En réservant, vous acceptez de recevoir des informations sur l'événement.
                                        La réservation est gratuite et peut être annulée jusqu'à 24h avant l'événement.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Message d'instruction initial -->
                    <div id="selectEventMessage" class="card card-shadow">
                        <div class="card-body text-center">
                            <i class="fas fa-hand-pointer" style="font-size: 3rem; color: var(--color-slate-400); margin-bottom: var(--spacing-4);"></i>
                            <h3 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">
                                Sélectionnez un événement
                            </h3>
                            <p style="color: var(--color-slate-600);">
                                Cliquez sur l'un des événements à gauche pour commencer votre réservation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- Section informations pratiques -->
    <section class="section" style="background: linear-gradient(135deg, var(--color-slate-50) 0%, #fed7aa 100%);">
        <div class="container" style="max-width: 1024px;">
            <div class="section-header">
                <h2 class="section-title">Informations pratiques</h2>
                <p class="section-subtitle">
                    Tout ce que vous devez savoir pour profiter pleinement de votre expérience
                </p>
            </div>

            <div class="content-grid cols-4">
                <div class="card card-shadow text-center">
                    <div class="card-body">
                        <div style="width: 48px; height: 48px; margin: 0 auto var(--spacing-4) auto; border-radius: var(--radius-full); background: var(--gradient-primary); display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-ticket-alt" style="color: var(--color-white); font-size: 1.5rem;"></i>
                        </div>
                        <h3 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">Gratuit</h3>
                        <p style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                            Tous nos événements sont entièrement gratuits
                        </p>
                    </div>
                </div>

                <div class="card card-shadow text-center">
                    <div class="card-body">
                        <div style="width: 48px; height: 48px; margin: 0 auto var(--spacing-4) auto; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--color-info) 0%, #8b5cf6 100%); display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-clock" style="color: var(--color-white); font-size: 1.5rem;"></i>
                        </div>
                        <h3 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">Ponctualité</h3>
                        <p style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                            Arrivée recommandée 15min avant le début
                        </p>
                    </div>
                </div>

                <div class="card card-shadow text-center">
                    <div class="card-body">
                        <div style="width: 48px; height: 48px; margin: 0 auto var(--spacing-4) auto; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--color-success) 0%, #10b981 100%); display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-heart" style="color: var(--color-white); font-size: 1.5rem;"></i>
                        </div>
                        <h3 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">Convivialité</h3>
                        <p style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                            Ambiance chaleureuse et échanges enrichissants
                        </p>
                    </div>
                </div>

                <div class="card card-shadow text-center">
                    <div class="card-body">
                        <div style="width: 48px; height: 48px; margin: 0 auto var(--spacing-4) auto; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--color-warning) 0%, var(--color-primary) 100%); display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-user" style="color: var(--color-white); font-size: 1.5rem;"></i>
                        </div>
                        <h3 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">Ouvert à tous</h3>
                        <p style="font-size: var(--font-size-sm); color: var(--color-slate-600);">
                            Événements accessibles à tous les âges
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
.event-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.event-card.selected {
    border: 2px solid var(--color-primary);
    box-shadow: 0 0 0 3px rgba(234, 90, 44, 0.1);
}

.event-card.selected .event-selected-icon {
    display: block !important;
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
    
    .content-grid.cols-4 {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

<script>
// Gestion de la sélection d'événement
document.addEventListener('DOMContentLoaded', function() {
    const eventCards = document.querySelectorAll('.event-card');
    const eventDetails = document.getElementById('eventDetails');
    const selectMessage = document.getElementById('selectEventMessage');
    
    const upcomingEvents = <?php echo json_encode($upcomingEvents); ?>;
    
    eventCards.forEach(card => {
        card.addEventListener('click', function() {
            // Retirer la sélection précédente
            eventCards.forEach(c => c.classList.remove('selected'));
            
            // Sélectionner le nouvel événement
            this.classList.add('selected');
            
            // Récupérer les données de l'événement
            const eventId = this.dataset.eventId;
            const event = upcomingEvents.find(e => e.id === eventId);
            
            if (event) {
                // Mettre à jour les détails
                document.getElementById('eventImage').src = event.image;
                document.getElementById('eventTitle').textContent = event.title;
                document.getElementById('eventDescription').textContent = event.description;
                document.getElementById('availableSeats').textContent = (event.maxCapacity - event.reservedSeats);
                
                // Mettre à jour les invités
                const guestsList = document.getElementById('eventGuests');
                if (event.guests && event.guests.length > 0) {
                    guestsList.innerHTML = `
                        <h4 style="font-weight: var(--font-weight-semibold); color: var(--color-slate-800); margin-bottom: var(--spacing-2);">Invités confirmés :</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-2);">
                            ${event.guests.map(guest => `
                                <span class="badge badge-outline">
                                    <i class="fas fa-star" style="margin-right: var(--spacing-1);"></i>
                                    ${guest}
                                </span>
                            `).join('')}
                        </div>
                    `;
                } else {
                    guestsList.innerHTML = '';
                }
                
                // Mettre à jour le formulaire
                document.getElementById('selectedEventId').value = event.id;
                document.getElementById('selectedEventTitle').value = event.title;
                
                // Afficher les détails et masquer le message
                selectMessage.style.display = 'none';
                eventDetails.style.display = 'block';
            }
        });
    });
});

function sendReservationEmail() {
    const form = document.getElementById('reservationForm');
    const formData = new FormData(form);
    
    // Validation simple
    if (!formData.get('firstName') || !formData.get('lastName') || !formData.get('email')) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }
    
    // Construire le lien mailto
    const eventTitle = formData.get('eventTitle');
    const subject = encodeURIComponent(`[Vitrine Culture] Réservation - ${eventTitle}`);
    const body = encodeURIComponent(`
Bonjour,

Je souhaite réserver pour l'événement Vitrine Culture :

Participant: ${formData.get('firstName')} ${formData.get('lastName')}
Email: ${formData.get('email')}
Téléphone: ${formData.get('phone')}
Événement: ${eventTitle}
Nombre de personnes: ${formData.get('numberOfGuests')}

Demandes particulières:
${formData.get('specialRequests') || 'Aucune'}

Merci de confirmer ma réservation.

Cordialement,
${formData.get('firstName')} ${formData.get('lastName')}

---
Demande de réservation envoyée depuis le site Vitrine Culture
    `);
    
    const mailtoLink = `mailto:sognanendiaga0@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    // Feedback utilisateur
    showNotification('Email de réservation ouvert ! Envoyez-le pour confirmer votre place.', 'success');
}
</script>