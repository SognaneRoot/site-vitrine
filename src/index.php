<?php
session_start();

// Gestion de la navigation
$page = isset($_GET['page']) ? $_GET['page'] : 'home';
$validPages = ['home', 'about', 'program', 'reservation', 'gallery', 'blog', 'contact'];

if (!in_array($page, $validPages)) {
    $page = 'home';
}

// Configuration du site
$siteConfig = [
    'title' => 'Vitrine Culture - Événements Culturels Saint-Louis Sénégal',
    'description' => 'Rencontres culturelles mensuelles à Saint-Louis, Sénégal. Valorisation de la culture sénégalaise et transmission intergénérationnelle.',
    'email' => 'sognanendiaga0@gmail.com',
    'phone' => '+221 XX XXX XX XX',
    'address' => 'Saint-Louis, Sénégal'
];

// Messages flash
$flashMessage = '';
$flashType = '';
if (isset($_SESSION['flash_message'])) {
    $flashMessage = $_SESSION['flash_message'];
    $flashType = $_SESSION['flash_type'];
    unset($_SESSION['flash_message'], $_SESSION['flash_type']);
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $siteConfig['title']; ?></title>
    <meta name="description" content="<?php echo $siteConfig['description']; ?>">
    <meta name="keywords" content="culture sénégalaise, Saint-Louis, événements culturels, artistes sénégalais, tradition, musique, art">
    
    <!-- Styles CSS -->
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/components.css">
    
    <!-- Font Awesome pour les icônes -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
    
    <!-- EmailJS pour les formulaires -->
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
</head>
<body>
    <div class="site-wrapper">
        <!-- Navigation -->
        <?php include 'includes/navigation.php'; ?>
        
        <!-- Message Flash -->
        <?php if ($flashMessage): ?>
        <div class="flash-message flash-<?php echo $flashType; ?>" id="flashMessage">
            <div class="container">
                <span><?php echo htmlspecialchars($flashMessage); ?></span>
                <button onclick="closeFlashMessage()" class="flash-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <?php endif; ?>
        
        <!-- Contenu Principal -->
        <main class="main-content">
            <?php
            switch ($page) {
                case 'home':
                    include 'pages/home.php';
                    break;
                case 'about':
                    include 'pages/about.php';
                    break;
                case 'program':
                    include 'pages/program.php';
                    break;
                case 'reservation':
                    include 'pages/reservation.php';
                    break;
                case 'gallery':
                    include 'pages/gallery.php';
                    break;
                case 'blog':
                    include 'pages/blog.php';
                    break;
                case 'contact':
                    include 'pages/contact.php';
                    break;
                default:
                    include 'pages/home.php';
            }
            ?>
        </main>
        
        <!-- Footer -->
        <?php include 'includes/footer.php'; ?>
    </div>
    
    <!-- Scripts JavaScript -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/components.js"></script>
    
    <?php if ($page === 'contact' || $page === 'reservation'): ?>
    <script src="assets/js/forms.js"></script>
    <?php endif; ?>
    
    <?php if ($page === 'gallery'): ?>
    <script src="assets/js/gallery.js"></script>
    <?php endif; ?>
</body>
</html>