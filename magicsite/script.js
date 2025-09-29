/* ===== ENHANCED JAVASCRIPT FOR SEBASTIAN GERHARDT MAGIC WEBSITE ===== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ===== PERFORMANCE OPTIMIZATION ===== */
    
    // Intersection Observer for scroll-triggered animations
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add appropriate animation class based on data attribute
                const animationType = element.dataset.animation || 'fade-in';
                element.classList.add(`animate-${animationType}`);
                
                // Stop observing this element
                animationObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all sections and cards for animations
    const animateElements = document.querySelectorAll('.section, .show-card, .media-item, .testimonial-card');
    animateElements.forEach((el, index) => {
        // Stagger animations by adding delays
        el.style.animationDelay = `${index * 0.1}s`;
        
        // Set default animation type
        if (!el.dataset.animation) {
            el.dataset.animation = 'slide-up';
        }
        
        animationObserver.observe(el);
    });
    
    // Special observer for quote section scroll animation
    const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const quoteBreak = entry.target.querySelector('.quote-break');
                const quoteSignature = entry.target.querySelector('.quote-signature');
                
                if (quoteBreak) {
                    quoteBreak.style.animation = 'quoteReveal 1s ease-out 0.3s both';
                }
                if (quoteSignature) {
                    quoteSignature.style.animation = 'signatureReveal 1s ease-out 0.8s both';
                }
                
                quoteObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe quote section
    const quoteSection = document.querySelector('.quote-section');
    if (quoteSection) {
        // Reset initial animations to be triggered by observer
        const quoteBreak = quoteSection.querySelector('.quote-break');
        const quoteSignature = quoteSection.querySelector('.quote-signature');
        
        if (quoteBreak) {
            quoteBreak.style.animation = 'none';
            quoteBreak.style.opacity = '0';
            quoteBreak.style.transform = 'translateY(30px)';
        }
        if (quoteSignature) {
            quoteSignature.style.animation = 'none';
            quoteSignature.style.opacity = '0';
            quoteSignature.style.transform = 'translateY(20px)';
        }
        
        quoteObserver.observe(quoteSection);
    }
    
    /* ===== ENHANCED NAVIGATION ===== */
    
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Sticky navigation with enhanced scroll effects
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const scrollY = window.scrollY;
        
        // Add/remove scrolled class
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll direction
        if (scrollY > lastScrollY && scrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
        updateActiveNavLink();
        updateScrollToTopButton();
        
        ticking = false;
    }
    
    function requestUpdateNavbar() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestUpdateNavbar);
    
    // Active navigation link tracking
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
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Enhanced mobile menu
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    /* ===== SCROLL TO TOP BUTTON ===== */
    
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    function updateScrollToTopButton() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'all';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    }
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initially hide the button
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.pointerEvents = 'none';
    
    /* ===== VIDEO MODAL SYSTEM ===== */
    
    const videoBtn = document.getElementById('video-btn');
    const videoModal = document.getElementById('video-modal');
    const videoIframe = document.getElementById('video-iframe');
    const modalClose = videoModal.querySelector('.modal-close');
    const modalBackdrop = videoModal.querySelector('.modal-backdrop');
    
    // Video URLs (replace with actual video URLs)
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0';
    // DELETED: otherSideTeaserUrl variable was removed here
    
    function openVideoModal(url = videoUrl) {
        videoModal.classList.add('active');
        videoIframe.src = url;
        document.body.style.overflow = 'hidden';
        
        // Focus trap for accessibility
        modalClose.focus();
    }
    
    function closeVideoModal() {
        videoModal.classList.remove('active');
        videoIframe.src = '';
        document.body.style.overflow = '';
    }
    
    // Handle different video modal triggers
    if (videoBtn) {
        videoBtn.addEventListener('click', () => openVideoModal());
    }
    
    // DELETED: The Other Side teaser video functionality was removed here
    
    modalClose.addEventListener('click', closeVideoModal);
    modalBackdrop.addEventListener('click', closeVideoModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
    
    /* ===== IMAGE LIGHTBOX SYSTEM ===== */
    
    const imageLightbox = document.getElementById('image-lightbox');
    const lightboxImage = imageLightbox.querySelector('.lightbox-image');
    const lightboxCaption = imageLightbox.querySelector('.lightbox-caption');
    const lightboxClose = imageLightbox.querySelector('.lightbox-close');
    const lightboxBackdrop = imageLightbox.querySelector('.lightbox-backdrop');
    const lightboxPrev = imageLightbox.querySelector('.lightbox-prev');
    const lightboxNext = imageLightbox.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let lightboxImages = [];
    
    // Initialize lightbox for images with data-lightbox attribute
    document.addEventListener('click', (e) => {
        const target = e.target;
        const lightboxElement = target.closest('[data-lightbox]');
        
        if (lightboxElement) {
            e.preventDefault();
            console.log('Lightbox triggered for:', lightboxElement.dataset.caption);
            
            // For media logos, we'll create a custom lightbox behavior
            if (lightboxElement.classList.contains('media-logo')) {
                const img = lightboxElement.querySelector('.logo-image');
                const caption = lightboxElement.dataset.caption;
                
                if (img) {
                    openMediaLightbox(img.src, img.alt, caption);
                }
            } else {
                // Regular lightbox behavior for other images
                openLightbox(lightboxElement);
            }
        }
    });
    
    // Custom media lightbox function
    function openMediaLightbox(src, alt, caption) {
        lightboxImage.src = src;
        lightboxCaption.innerHTML = `<strong>${alt}</strong><br><span style="font-size: 0.9em; opacity: 0.8;">${caption}</span>`;
        
        // Hide navigation for media lightbox
        lightboxPrev.style.display = 'none';
        lightboxNext.style.display = 'none';
        
        imageLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function openLightbox(element) {
        const group = element.dataset.lightbox;
        lightboxImages = Array.from(document.querySelectorAll(`[data-lightbox="${group}"]:not(.media-logo)`));
        currentImageIndex = lightboxImages.indexOf(element);
        
        showLightboxImage();
        imageLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function showLightboxImage() {
        const currentImage = lightboxImages[currentImageIndex];
        lightboxImage.src = currentImage.href || currentImage.src || currentImage.dataset.src;
        lightboxCaption.textContent = currentImage.dataset.caption || currentImage.alt || '';
        
        // Update navigation visibility
        lightboxPrev.style.display = lightboxImages.length > 1 ? 'block' : 'none';
        lightboxNext.style.display = lightboxImages.length > 1 ? 'block' : 'none';
    }
    
    function closeLightbox() {
        imageLightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
        showLightboxImage();
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
        showLightboxImage();
    }
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (!imageLightbox.classList.contains('active')) return;
        
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
    
    /* ===== SOCIAL MEDIA FLOAT ===== */
    
    const socialFloat = document.getElementById('social-float');
    const socialToggle = socialFloat.querySelector('.social-toggle');
    
    socialToggle.addEventListener('click', () => {
        socialFloat.classList.toggle('active');
    });
    
    // Close social float when clicking outside
    document.addEventListener('click', (e) => {
        if (!socialFloat.contains(e.target)) {
            socialFloat.classList.remove('active');
        }
    });
    
    // Add click tracking for social links
    const socialLinks = socialFloat.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const platform = link.dataset.platform;
            console.log(`Social link clicked: ${platform}`);
            // Add analytics tracking here
        });
    });
    
    /* ===== ENHANCED TESTIMONIALS CAROUSEL ===== */
    
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialBtns = document.querySelectorAll('.testimonial-btn');
    let currentTestimonial = 0;
    let testimonialInterval;
    let isTestimonialPaused = false;
    
    function showTestimonial(index, direction = 'next') {
        // Hide all testimonials
        testimonialCards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.style.animationDelay = '0.1s';
                card.classList.add('active');
            }
        });
        
        // Update buttons
        testimonialBtns.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }
    
    function nextTestimonial() {
        if (isTestimonialPaused) return;
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }
    
    function startTestimonialRotation() {
        testimonialInterval = setInterval(nextTestimonial, 6000);
    }
    
    function stopTestimonialRotation() {
        clearInterval(testimonialInterval);
    }
    
    // Manual testimonial control
    testimonialBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
            stopTestimonialRotation();
            isTestimonialPaused = true;
            
            // Resume auto-rotation after 10 seconds
            setTimeout(() => {
                isTestimonialPaused = false;
                startTestimonialRotation();
            }, 10000);
        });
    });
    
    // Pause on hover
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
        testimonialsSection.addEventListener('mouseenter', () => {
            isTestimonialPaused = true;
        });
        
        testimonialsSection.addEventListener('mouseleave', () => {
            isTestimonialPaused = false;
        });
    }
    
    // Start testimonial rotation
    startTestimonialRotation();
    
    
    /* ===== ENHANCED CONTACT FORM ===== */
    
    const contactForm = document.getElementById('contact-form');
    const submitBtn = contactForm.querySelector('.btn-submit');
    const successMessage = document.getElementById('form-success');
    
    // Form validation with real-time feedback
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing error messages
        const existingError = field.parentElement.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Validation rules
        switch (fieldName) {
            case 'name':
                if (!value) {
                    errorMessage = 'Name is required';
                    isValid = false;
                } else if (value.length < 2) {
                    errorMessage = 'Name must be at least 2 characters';
                    isValid = false;
                } else if (!/^[a-zA-Z\s]*$/.test(value)) {
                    errorMessage = 'Name can only contain letters and spaces';
                    isValid = false;
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    errorMessage = 'Email is required';
                    isValid = false;
                } else if (!emailRegex.test(value)) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                break;
                
            case 'message':
                if (!value) {
                    errorMessage = 'Message is required';
                    isValid = false;
                } else if (value.length < 10) {
                    errorMessage = 'Message must be at least 10 characters';
                    isValid = false;
                } else if (value.length > 1000) {
                    errorMessage = 'Message must be less than 1000 characters';
                    isValid = false;
                }
                break;
        }
        
        // Update field styling and show error
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('success');
        } else {
            field.classList.remove('success');
            field.classList.add('error');
            
            const errorElement = document.createElement('span');
            errorElement.className = 'form-error';
            errorElement.textContent = errorMessage;
            field.parentElement.appendChild(errorElement);
        }
        
        return isValid;
    }
    
    // Real-time validation
    const requiredFields = ['name', 'email', 'message'];
    requiredFields.forEach(fieldName => {
        const field = contactForm.querySelector(`[name="${fieldName}"]`);
        if (field) {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', debounce(() => {
                if (field.classList.contains('error')) {
                    validateField(field);
                }
            }, 300));
        }
    });
    
    // Enhanced form submission with phone field validation
    contactForm.addEventListener('submit', function(e) {
        // Update required fields to include phone if provided
        const allFields = ['name', 'email', 'message'];
        const phoneField = contactForm.querySelector('[name="phone"]');
        
        // Validate all fields
        let isFormValid = true;
        allFields.forEach(fieldName => {
            const field = contactForm.querySelector(`[name="${fieldName}"]`);
            if (field && !validateField(field)) {
                isFormValid = false;
            }
        });
        
        // Validate phone if provided
        if (phoneField && phoneField.value.trim()) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(phoneField.value.replace(/[\s\-\(\)]/g, ''))) {
                phoneField.classList.add('error');
                
                const existingError = phoneField.parentElement.querySelector('.form-error');
                if (existingError) existingError.remove();
                
                const errorElement = document.createElement('span');
                errorElement.className = 'form-error';
                errorElement.textContent = 'Please enter a valid phone number';
                phoneField.parentElement.appendChild(errorElement);
                
                isFormValid = false;
            } else {
                phoneField.classList.remove('error');
                phoneField.classList.add('success');
            }
        }
        
        if (!isFormValid) {
            // Prevent form submission and scroll to first error
            e.preventDefault();
            const firstError = contactForm.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }
        
        // If validation passes, allow natural form submission to confirmation.html
        // The form will redirect automatically due to action="confirmation.html" method="GET"
    });
    
    /* ===== SHOW CARD REVEAL INTERACTIONS ===== */
    
    const showCards = document.querySelectorAll('.show-card');
    
    showCards.forEach(card => {
        const revealBtn = card.querySelector('.show-reveal-btn');
        
        if (revealBtn) {
            revealBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const isExpanded = card.classList.contains('expanded');
                
                if (isExpanded) {
                    card.classList.remove('expanded');
                    revealBtn.textContent = 'Learn More';
                } else {
                    card.classList.add('expanded');
                    revealBtn.textContent = 'Show Less';
                }
            });
        }
    });
    
    /* ===== NEWSLETTER SIGNUP ===== */
    
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('#newsletter-email');
            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Subscribing...';
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                showNotification('Thank you for subscribing! You\'ll receive updates about upcoming shows.', 'success');
                emailInput.value = '';
                
            } catch (error) {
                showNotification('There was an error subscribing. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
    
    /* ===== ENHANCED VIDEO TESTIMONIAL CAROUSEL ===== */
    
    const testimonialVideos = document.querySelectorAll('.testimonial-video');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    let currentVideoIndex = 0;
    
    function showTestimonialVideo(index) {
        testimonialVideos.forEach((video, i) => {
            video.classList.toggle('active', i === index);
            
            // Pause all videos except the active one
            const videoElement = video.querySelector('video');
            if (videoElement) {
                if (i !== index) {
                    videoElement.pause();
                }
            }
        });
        
        // Update button states
        testimonialBtns.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }
    
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            currentVideoIndex = (currentVideoIndex - 1 + testimonialVideos.length) % testimonialVideos.length;
            showTestimonialVideo(currentVideoIndex);
        });
    }
    
    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            currentVideoIndex = (currentVideoIndex + 1) % testimonialVideos.length;
            showTestimonialVideo(currentVideoIndex);
        });
    }
    
    // Update existing testimonial button functionality
    testimonialBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentVideoIndex = index;
            showTestimonialVideo(currentVideoIndex);
            
            // Reset auto-rotation logic from existing code
            stopTestimonialRotation();
            isTestimonialPaused = true;
            
            setTimeout(() => {
                isTestimonialPaused = false;
                startTestimonialRotation();
            }, 10000);
        });
    });
    
    /* ===== ENHANCED IMAGE LOADING & LAZY LOADING ===== */

    // Add loaded class to all images as they load
    const handleImageLoad = (img) => {
        img.classList.add('loaded');
        img.classList.remove('loading', 'error');
    };

    const handleImageError = (img) => {
        img.classList.add('error');
        img.classList.remove('loading', 'loaded');
        console.warn('Failed to load image:', img.src || img.dataset.src);
    };

    // Intersection Observer for lazy-loaded images
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // Mark as loading
                img.classList.add('loading');

                // Load the image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }

                // Handle load success
                img.addEventListener('load', () => handleImageLoad(img), { once: true });

                // Handle load error
                img.addEventListener('error', () => handleImageError(img), { once: true });

                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px' // Start loading 50px before image enters viewport
    });

    // Observe all images with data-src attribute (data-src lazy loading)
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Handle all images with loading="lazy" attribute
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', () => handleImageLoad(img), { once: true });
        img.addEventListener('error', () => handleImageError(img), { once: true });
    });

    // Handle eager-loaded images (hero, logo, etc.)
    document.querySelectorAll('img[loading="eager"], img:not([loading])').forEach(img => {
        if (img.complete) {
            // Image already loaded from cache
            handleImageLoad(img);
        } else {
            img.addEventListener('load', () => handleImageLoad(img), { once: true });
            img.addEventListener('error', () => handleImageError(img), { once: true });
        }
    });

    // Picture element source fallback handling
    document.querySelectorAll('picture').forEach(picture => {
        const img = picture.querySelector('img');
        if (img) {
            img.addEventListener('load', () => {
                picture.classList.add('loaded');
            }, { once: true });

            img.addEventListener('error', () => {
                picture.classList.add('error');
                console.warn('Failed to load picture source:', img.src);
            }, { once: true });
        }
    });
    
    /* ===== UTILITY FUNCTIONS ===== */
    
    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Show notification system
    function showNotification(message, type = 'info', duration = 5000) {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--color-success)' : 
                        type === 'error' ? 'var(--color-error)' : 
                        'var(--color-royal-blue)'};
            color: white;
            padding: var(--space-lg);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
            z-index: var(--z-toast);
            transform: translateX(400px);
            transition: transform var(--transition-normal);
            max-width: 300px;
            font-family: var(--font-primary);
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, duration);
        
        // Click to dismiss
        notification.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
    }
    
    /* ===== PERFORMANCE MONITORING ===== */
    
    // Track page load performance
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        
        // Track largest contentful paint
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
    });
    
    /* ===== ACCESSIBILITY ENHANCEMENTS ===== */
    
    // Keyboard navigation improvements
    document.addEventListener('keydown', (e) => {
        // Skip to main content
        if (e.key === 'Tab' && e.target === document.body) {
            const mainContent = document.getElementById('hero');
            if (mainContent) mainContent.focus();
        }
        
        // Enhanced keyboard navigation for modals
        if (e.key === 'Tab' && (videoModal.classList.contains('active') || imageLightbox.classList.contains('active'))) {
            // Trap focus within modal
            const activeModal = videoModal.classList.contains('active') ? videoModal : imageLightbox;
            const focusableElements = activeModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    });
    
    // Announce dynamic content changes to screen readers
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }
    
    /* ===== UPCOMING SHOWS SECTION ANIMATIONS ===== */
    
    // Intersection Observer for Upcoming Shows animations
    const upcomingShowsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animation;
                
                if (animationType === 'upcoming-shows-fade') {
                    element.classList.add('animate-upcoming-shows-fade');
                } else if (animationType === 'upcoming-shows-zoom') {
                    element.classList.add('animate-upcoming-shows-zoom');
                }
                
                upcomingShowsObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe Upcoming Shows elements
    const upcomingShowsElements = document.querySelectorAll('[data-animation^="upcoming-shows"]');
    upcomingShowsElements.forEach(element => {
        upcomingShowsObserver.observe(element);
    });
    
    /* ===== UPCOMING SHOWS VIDEO BACKGROUND ===== */
    
    const upcomingShowsVideo = document.querySelector('.upcoming-shows-video-background video');
    
    if (upcomingShowsVideo) {
        // Ensure video is properly muted and looped
        upcomingShowsVideo.muted = true;
        upcomingShowsVideo.loop = true;
        upcomingShowsVideo.playsInline = true;
        
        // Handle autoplay for different browsers
        const playUpcomingShowsVideo = () => {
            upcomingShowsVideo.play().catch(error => {
                console.log('Upcoming Shows video autoplay prevented:', error);
                // Fallback: try to play when user interacts with page
                document.addEventListener('click', () => {
                    upcomingShowsVideo.play().catch(e => console.log('Upcoming Shows video play failed:', e));
                }, { once: true });
            });
        };
        
        // Try to play video when it's loaded
        if (upcomingShowsVideo.readyState >= 3) {
            playUpcomingShowsVideo();
        } else {
            upcomingShowsVideo.addEventListener('canplay', playUpcomingShowsVideo);
        }
        
        // Intersection Observer to play video when section comes into view
        const upcomingVideoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    playUpcomingShowsVideo();
                } else {
                    upcomingShowsVideo.pause();
                }
            });
        }, { threshold: 0.1 });
        
        const upcomingShowsSection = document.querySelector('.upcoming-shows');
        if (upcomingShowsSection) {
            upcomingVideoObserver.observe(upcomingShowsSection);
        }
    }
    
    /* ===== DELETED: THE OTHER SIDE VIDEO BACKGROUND ===== */
    /* Video background functionality for "The Other Side" section was removed here */
    /* Originally contained: video autoplay, intersection observers, browser compatibility handling */
    
    /* ===== INITIALIZATION ===== */
    
    // Initialize all components
    console.log('🎭 Sebastian Gerhardt Magic Website - Enhanced Version Loaded');
    console.log('✨ All interactive features initialized successfully');
    
    // Add loading complete class to body
    document.body.classList.add('loaded');
    
    // Show initial animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }, 500);
    
});

/* ===== EXTERNAL API INTEGRATIONS (PLACEHOLDER) ===== */

// Google Analytics 4 (replace with actual tracking ID)
function gtag() { dataLayer.push(arguments); }
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');

// Social media sharing functions
window.shareOnSocial = function(platform, url = window.location.href, text = document.title) {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
};