<?php
$menuItems = [
    ['id' => 'home', 'label' => 'Accueil', 'icon' => 'fas fa-home'],
    ['id' => 'about', 'label' => 'À propos', 'icon' => 'fas fa-info-circle'],
    ['id' => 'program', 'label' => 'Programme & Invités', 'icon' => 'fas fa-users'],
    ['id' => 'reservation', 'label' => 'Réservation', 'icon' => 'fas fa-ticket-alt'],
    ['id' => 'gallery', 'label' => 'Galerie', 'icon' => 'fas fa-images'],
    ['id' => 'blog', 'label' => 'Blog', 'icon' => 'fas fa-blog'],
    ['id' => 'contact', 'label' => 'Contact', 'icon' => 'fas fa-envelope']
];
?>

<nav class="navbar">
    <div class="container">
        <div class="navbar-content">
            <!-- Logo -->
            <div class="navbar-brand">
                <a href="?page=home" class="brand-link">
                    <div class="logo-container">
                        <div class="logo-icon">
                            <i class="fas fa-theater-masks"></i>
                        </div>
                        <div class="logo-text">
                            <span class="logo-main">Vitrine</span>
                            <span class="logo-accent">Culture</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Menu Desktop -->
            <div class="navbar-menu desktop-menu">
                <?php foreach ($menuItems as $item): ?>
                <a href="?page=<?php echo $item['id']; ?>" 
                   class="nav-link <?php echo ($page === $item['id']) ? 'active' : ''; ?>">
                    <i class="<?php echo $item['icon']; ?>"></i>
                    <span><?php echo $item['label']; ?></span>
                </a>
                <?php endforeach; ?>
            </div>

            <!-- Bouton Menu Mobile -->
            <div class="mobile-menu-toggle">
                <button onclick="toggleMobileMenu()" class="menu-btn" id="mobileMenuBtn">
                    <i class="fas fa-bars"></i>
                    <span class="sr-only">Ouvrir le menu</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Menu Mobile -->
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-header">
            <h3>Menu Navigation</h3>
            <p>Accédez aux différentes sections de Vitrine Culture</p>
            <div class="mobile-logo">
                <div class="logo-container small">
                    <div class="logo-icon">
                        <i class="fas fa-theater-masks"></i>
                    </div>
                    <div class="logo-text">
                        <span class="logo-main">Vitrine</span>
                        <span class="logo-accent">Culture</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mobile-menu-items">
            <?php foreach ($menuItems as $item): ?>
            <a href="?page=<?php echo $item['id']; ?>" 
               class="mobile-nav-link <?php echo ($page === $item['id']) ? 'active' : ''; ?>"
               onclick="closeMobileMenu()">
                <i class="<?php echo $item['icon']; ?>"></i>
                <span><?php echo $item['label']; ?></span>
            </a>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Overlay pour mobile -->
    <div class="mobile-menu-overlay" id="mobileMenuOverlay" onclick="closeMobileMenu()"></div>
</nav>