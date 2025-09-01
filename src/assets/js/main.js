// ================================
// NAVIGATION MOBILE
// ================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu && overlay && menuBtn) {
        const isOpen = mobileMenu.classList.contains('open');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu && overlay && menuBtn) {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu && overlay && menuBtn) {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
    }
}

// ================================
// MESSAGES FLASH
// ================================
function closeFlashMessage() {
    const flashMessage = document.getElementById('flashMessage');
    if (flashMessage) {
        flashMessage.style.opacity = '0';
        flashMessage.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            flashMessage.remove();
        }, 300);
    }
}

// Auto-fermeture des messages flash après 5 secondes
document.addEventListener('DOMContentLoaded', function() {
    const flashMessage = document.getElementById('flashMessage');
    if (flashMessage) {
        setTimeout(() => {
            closeFlashMessage();
        }, 5000);
    }
});

// ================================
// SCROLL SMOOTH
// ================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ================================
// ANIMATIONS AU SCROLL
// ================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe .scroll-animate
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// ================================
// UTILITAIRES GÉNÉRAUX
// ================================
function formatDate(dateString) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

function formatDateTime(dateString) {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleString('fr-FR', options);
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copié dans le presse-papiers', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Copié dans le presse-papiers', 'success');
    } catch (err) {
        showNotification('Impossible de copier', 'error');
    }
    
    document.body.removeChild(textArea);
}

function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Ajouter les styles si pas encore définis
    if (!document.querySelector('.notification-styles')) {
        const styles = document.createElement('style');
        styles.className = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 16px;
                border-radius: 8px;
                color: white;
                z-index: 1000;
                animation: slideInRight 0.3s ease-out;
                max-width: 300px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .notification-success { background-color: #10b981; }
            .notification-error { background-color: #ef4444; }
            .notification-warning { background-color: #f59e0b; }
            .notification-info { background-color: #3b82f6; }
            
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 4px;
                opacity: 0.8;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Auto-suppression après 4 secondes
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 4000);
}

// ================================
// GESTION DES IMAGES
// ================================
function handleImageError(img) {
    img.src = 'assets/images/placeholder.jpg';
    img.alt = 'Image non disponible';
    img.classList.add('image-error');
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ================================
// MODAL GÉNÉRIQUE
// ================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Animation d'entrée
        setTimeout(() => {
            modal.classList.add('modal-open');
        }, 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('modal-open');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
}

// Fermer modal en cliquant sur l'overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        const modal = e.target.closest('.modal');
        if (modal) {
            closeModal(modal.id);
        }
    }
});

// Fermer modal avec Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal.modal-open');
        openModals.forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// ================================
// INITIALISATION
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les animations
    initScrollAnimations();
    
    // Initialiser le lazy loading des images
    lazyLoadImages();
    
    // Fermer le menu mobile au redimensionnement
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
    
    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Ajouter la classe scroll-animate aux éléments appropriés
    const animatedElements = document.querySelectorAll('.card, .hero, .section');
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
    });
});

// ================================
// UTILITAIRES POUR FORMULAIRES
// ================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return re.test(phone);
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        // Supprimer l'ancien message d'erreur
        const existingError = field.parentElement.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Ajouter la classe d'erreur
        field.classList.add('error');
        
        // Ajouter le nouveau message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        field.parentElement.appendChild(errorDiv);
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.remove('error');
        const errorDiv = field.parentElement.querySelector('.form-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
}

function clearAllErrors(formId) {
    const form = document.getElementById(formId);
    if (form) {
        const errorFields = form.querySelectorAll('.error');
        const errorMessages = form.querySelectorAll('.form-error');
        
        errorFields.forEach(field => field.classList.remove('error'));
        errorMessages.forEach(message => message.remove());
    }
}

// ================================
// DÉTECTION DU NAVIGATEUR
// ================================
function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = "Unknown";
    
    if (ua.indexOf("Chrome") > -1) browser = "Chrome";
    else if (ua.indexOf("Safari") > -1) browser = "Safari";
    else if (ua.indexOf("Firefox") > -1) browser = "Firefox";
    else if (ua.indexOf("Edge") > -1) browser = "Edge";
    
    return {
        browser: browser,
        mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua),
        userAgent: ua
    };
}

// ================================
// PERFORMANCE ET ANALYTICS
// ================================
function trackEvent(eventName, eventData = {}) {
    // Placeholder pour Google Analytics ou autre
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Log pour développement
    console.log('Event tracked:', eventName, eventData);
}

function measurePageLoadTime() {
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        trackEvent('page_load_time', {
            value: Math.round(loadTime),
            page: window.location.pathname
        });
    });
}

// Initialiser la mesure de performance
measurePageLoadTime();