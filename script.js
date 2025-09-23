// JavaScript for LOS PITS Website

document.addEventListener('DOMContentLoaded', function() {
    // Navigation Elements
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Parallax Elements
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    // Form Elements
    const contactForm = document.getElementById('contact-form');
    
    // Animation Elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    // Initialize all functionality
    init();
    
    function init() {
        setupHeaderScroll();
        setupMobileNavigation();
        setupSmoothScrolling();
        setupParallaxEffects();
        setupScrollAnimations();
        setupFormValidation();
        setupIntersectionObserver();
        setupImageCarousel();
    }
    
    // Header Scroll Behavior
    function setupHeaderScroll() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class when user scrolls down
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Mobile Navigation
    function setupMobileNavigation() {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            
            // Toggle icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('show');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth Scrolling for Navigation Links
    function setupSmoothScrolling() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Smooth scrolling for CTA buttons
        const ctaButtons = document.querySelectorAll('a[href^="#"]');
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = button.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Parallax Effects
    function setupParallaxEffects() {
        // Check if device supports parallax (not mobile)
        const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Disable parallax on mobile devices
            parallaxElements.forEach(element => {
                element.style.transform = 'none';
            });
            return;
        }
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * parseFloat(element.dataset.parallax);
                element.style.transform = `translateY(${rate}px)`;
            });
        }
        
        // Use requestAnimationFrame for smooth performance
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    // Scroll Animations
    function setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Add fade-in class to elements that should animate
        const animatedElements = document.querySelectorAll('.about__card, .service__card, .tech__feature, .trust-bar__item');
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
    
    // Form Validation and Submission
    function setupFormValidation() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const submitButton = contactForm.querySelector('.form__submit');
        
        // Real-time validation
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        phoneInput.addEventListener('input', validatePhone);
        messageInput.addEventListener('input', validateMessage);
        
        // Form submission
        contactForm.addEventListener('submit', handleFormSubmission);
        
        function validateName() {
            const name = nameInput.value.trim();
            const isValid = name.length >= 2;
            updateFieldValidation(nameInput, isValid);
            return isValid;
        }
        
        function validateEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(email);
            updateFieldValidation(emailInput, isValid);
            return isValid;
        }
        
        function validatePhone() {
            const phone = phoneInput.value.trim();
            // Phone is optional, but if provided should be valid
            if (phone === '') return true;
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            const isValid = phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
            updateFieldValidation(phoneInput, isValid);
            return isValid;
        }
        
        function validateMessage() {
            const message = messageInput.value.trim();
            const isValid = message.length >= 10;
            updateFieldValidation(messageInput, isValid);
            return isValid;
        }
        
        function updateFieldValidation(field, isValid) {
            if (field.value.trim() === '') {
                field.style.borderColor = '#e2e8f0';
                return;
            }
            
            if (isValid) {
                field.style.borderColor = '#48bb78';
            } else {
                field.style.borderColor = '#f56565';
            }
        }
        
        function handleFormSubmission(e) {
            e.preventDefault();
            
            // Validate all fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isMessageValid = validateMessage();
            
            const isFormValid = isNameValid && isEmailValid && isPhoneValid && isMessageValid;
            
            if (isFormValid) {
                // Show loading state
                const originalText = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitButton.disabled = true;
                
                // Simulate form submission (replace with actual form submission logic)
                setTimeout(() => {
                    // Show success message
                    showNotification('¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset field styles
                    [nameInput, emailInput, phoneInput, messageInput].forEach(field => {
                        field.style.borderColor = '#e2e8f0';
                    });
                    
                    // Reset button
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 2000);
            } else {
                showNotification('Por favor, completa todos los campos requeridos correctamente.', 'error');
            }
        }
    }
    
    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            notification.remove();
        });
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification__close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#48bb78' : '#f56565'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease-out;
        `;
        
        // Add close functionality
        const closeButton = notification.querySelector('.notification__close');
        closeButton.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
        
        document.body.appendChild(notification);
    }
    
    // Intersection Observer for animations
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add staggered animation delay
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                }
            });
        }, observerOptions);
        
        // Observe elements for animations
        const elementsToAnimate = document.querySelectorAll(`
            .trust-bar__item,
            .about__card,
            .service__card,
            .tech__feature,
            .brand__item
        `);
        
        elementsToAnimate.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }
    
    // Counter Animation for Trust Bar
    function animateCounters() {
        const counters = document.querySelectorAll('.trust-bar__number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent.replace(/\D/g, ''));
                    const prefix = counter.textContent.includes('+') ? '+' : '';
                    let current = 0;
                    const increment = target / 100;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        counter.textContent = prefix + Math.floor(current);
                    }, 20);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }
    
    // Initialize counter animation
    animateCounters();
    
    // Active Navigation Link Highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Throttled scroll event for active navigation
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(updateActiveNavLink, 50);
    });
    
    // Initialize active nav link
    updateActiveNavLink();
    
    // Modern Image Carousel with Fade Animation
    function setupImageCarousel() {
        const images = document.querySelectorAll('.carousel-image');
        const dots = document.querySelectorAll('.dot');
        
        if (images.length === 0 || dots.length === 0) return;
        
        let currentIndex = 0;
        let autoSlideInterval;
        
        // Function to show specific slide
        function showSlide(index) {
            // Remove active class from all images and dots
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current image and dot
            images[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentIndex = index;
        }
        
        // Function to go to next slide
        function nextSlide() {
            const nextIndex = (currentIndex + 1) % images.length;
            showSlide(nextIndex);
        }
        
        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (index !== currentIndex) {
                    showSlide(index);
                    // Restart auto-slide timer when user clicks
                    clearInterval(autoSlideInterval);
                    startAutoSlide();
                }
            });
        });
        
        // Auto-slide function
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 3000);
        }
        
        // Initialize carousel
        showSlide(0);
        startAutoSlide();
        
        // Pause auto-slide on hover
        const carousel = document.querySelector('.image-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });
            
            carousel.addEventListener('mouseleave', () => {
                startAutoSlide();
            });
        }
    }
});

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
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
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification__content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification__close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: 1rem;
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }
    
    .notification__close:hover {
        opacity: 1;
    }
    
    .nav__link.active {
        color: var(--accent-color) !important;
    }
    
    .nav__link.active::after {
        width: 100% !important;
    }
`;

document.head.appendChild(notificationStyles);