<?php
session_start();

// Configuration EmailJS côté serveur (optionnel)
$config = [
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_username' => '', // À configurer
    'smtp_password' => '', // À configurer
    'from_email' => 'sognanendiaga0@gmail.com',
    'from_name' => 'Vitrine Culture'
];

function sendEmail($to, $subject, $body, $config) {
    // Utiliser PHPMailer ou mail() simple
    $headers = [
        'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>',
        'Reply-To: ' . $config['from_email'],
        'Content-Type: text/html; charset=UTF-8',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    return mail($to, $subject, $body, implode("\r\n", $headers));
}

function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

function validateContactForm($data) {
    $errors = [];
    
    if (empty($data['firstName'])) {
        $errors['firstName'] = 'Le prénom est requis';
    }
    
    if (empty($data['lastName'])) {
        $errors['lastName'] = 'Le nom est requis';
    }
    
    if (empty($data['email'])) {
        $errors['email'] = 'L\'email est requis';
    } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Format d\'email invalide';
    }
    
    if (empty($data['subject'])) {
        $errors['subject'] = 'Le sujet est requis';
    }
    
    if (empty($data['message'])) {
        $errors['message'] = 'Le message est requis';
    }
    
    return $errors;
}

function validateReservationForm($data) {
    $errors = [];
    
    if (empty($data['firstName'])) {
        $errors['firstName'] = 'Le prénom est requis';
    }
    
    if (empty($data['lastName'])) {
        $errors['lastName'] = 'Le nom est requis';
    }
    
    if (empty($data['email'])) {
        $errors['email'] = 'L\'email est requis';
    } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Format d\'email invalide';
    }
    
    if (empty($data['numberOfGuests']) || $data['numberOfGuests'] < 1) {
        $errors['numberOfGuests'] = 'Le nombre de participants est requis';
    }
    
    if (empty($data['eventDate'])) {
        $errors['eventDate'] = 'La date d\'événement est requise';
    }
    
    return $errors;
}

// Traitement du formulaire de contact
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'contact') {
    // Protection CSRF simple
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== ($_SESSION['csrf_token'] ?? '')) {
        $_SESSION['flash_message'] = 'Erreur de sécurité. Veuillez réessayer.';
        $_SESSION['flash_type'] = 'error';
        header('Location: ?page=contact');
        exit;
    }
    
    $data = [
        'firstName' => sanitizeInput($_POST['firstName'] ?? ''),
        'lastName' => sanitizeInput($_POST['lastName'] ?? ''),
        'email' => sanitizeInput($_POST['email'] ?? ''),
        'phone' => sanitizeInput($_POST['phone'] ?? ''),
        'subject' => sanitizeInput($_POST['subject'] ?? ''),
        'message' => sanitizeInput($_POST['message'] ?? ''),
        'type' => sanitizeInput($_POST['type'] ?? '')
    ];
    
    $errors = validateContactForm($data);
    
    if (empty($errors)) {
        // Préparer l'email
        $emailSubject = '[Vitrine Culture] ' . $data['subject'];
        $emailBody = "
        <html>
        <body>
            <h2>Nouveau message depuis Vitrine Culture</h2>
            <p><strong>De:</strong> {$data['firstName']} {$data['lastName']}</p>
            <p><strong>Email:</strong> {$data['email']}</p>
            <p><strong>Téléphone:</strong> {$data['phone']}</p>
            <p><strong>Type de demande:</strong> {$data['type']}</p>
            <p><strong>Sujet:</strong> {$data['subject']}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>" . nl2br($data['message']) . "</p>
            <hr>
            <p><small>Envoyé depuis le site Vitrine Culture</small></p>
        </body>
        </html>";
        
        // Tentative d'envoi
        $sent = sendEmail($config['from_email'], $emailSubject, $emailBody, $config);
        
        if ($sent) {
            $_SESSION['flash_message'] = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
            $_SESSION['flash_type'] = 'success';
        } else {
            $_SESSION['flash_message'] = 'Erreur lors de l\'envoi. Utilisez le lien direct pour nous contacter : ' . $config['from_email'];
            $_SESSION['flash_type'] = 'warning';
        }
        
        // Log pour debug
        error_log("Contact form submission: " . json_encode($data));
        
    } else {
        $_SESSION['form_errors'] = $errors;
        $_SESSION['form_data'] = $data;
        $_SESSION['flash_message'] = 'Veuillez corriger les erreurs dans le formulaire.';
        $_SESSION['flash_type'] = 'error';
    }
    
    header('Location: ?page=contact');
    exit;
}

// Traitement du formulaire de réservation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'reservation') {
    // Protection CSRF simple
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== ($_SESSION['csrf_token'] ?? '')) {
        $_SESSION['flash_message'] = 'Erreur de sécurité. Veuillez réessayer.';
        $_SESSION['flash_type'] = 'error';
        header('Location: ?page=reservation');
        exit;
    }
    
    $data = [
        'firstName' => sanitizeInput($_POST['firstName'] ?? ''),
        'lastName' => sanitizeInput($_POST['lastName'] ?? ''),
        'email' => sanitizeInput($_POST['email'] ?? ''),
        'phone' => sanitizeInput($_POST['phone'] ?? ''),
        'numberOfGuests' => (int)($_POST['numberOfGuests'] ?? 1),
        'eventDate' => sanitizeInput($_POST['eventDate'] ?? ''),
        'specialRequests' => sanitizeInput($_POST['specialRequests'] ?? '')
    ];
    
    $errors = validateReservationForm($data);
    
    if (empty($errors)) {
        // Préparer l'email
        $emailSubject = '[Vitrine Culture] Nouvelle réservation - ' . $data['eventDate'];
        $emailBody = "
        <html>
        <body>
            <h2>Nouvelle réservation pour Vitrine Culture</h2>
            <p><strong>Participant:</strong> {$data['firstName']} {$data['lastName']}</p>
            <p><strong>Email:</strong> {$data['email']}</p>
            <p><strong>Téléphone:</strong> {$data['phone']}</p>
            <p><strong>Événement:</strong> {$data['eventDate']}</p>
            <p><strong>Nombre de personnes:</strong> {$data['numberOfGuests']}</p>
            " . ($data['specialRequests'] ? "<p><strong>Demandes particulières:</strong> {$data['specialRequests']}</p>" : "") . "
            <hr>
            <p><small>Réservation effectuée le " . date('d/m/Y à H:i') . "</small></p>
        </body>
        </html>";
        
        // Tentative d'envoi
        $sent = sendEmail($config['from_email'], $emailSubject, $emailBody, $config);
        
        if ($sent) {
            $_SESSION['flash_message'] = 'Réservation envoyée avec succès ! Nous confirmerons votre participation par email.';
            $_SESSION['flash_type'] = 'success';
        } else {
            $_SESSION['flash_message'] = 'Erreur lors de l\'envoi. Contactez-nous directement : ' . $config['from_email'] . ' ou ' . '+221 XX XXX XX XX';
            $_SESSION['flash_type'] = 'warning';
        }
        
        // Log pour debug
        error_log("Reservation form submission: " . json_encode($data));
        
    } else {
        $_SESSION['form_errors'] = $errors;
        $_SESSION['form_data'] = $data;
        $_SESSION['flash_message'] = 'Veuillez corriger les erreurs dans le formulaire.';
        $_SESSION['flash_type'] = 'error';
    }
    
    header('Location: ?page=reservation');
    exit;
}

// Générer token CSRF
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
?>