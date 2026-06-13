/* ============================================
   N JOINERY — Premium Interactions
   ============================================ */

(function () {
    'use strict';

    /* ---------- Navbar Scroll Effect ---------- */
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    function handleNavScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    /* ---------- Mobile Menu ---------- */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');

    function toggleMenu() {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('active', isOpen);
        if (navOverlay) navOverlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMenu() {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    /* ---------- Active Nav Link ---------- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    /* ---------- Scroll Reveal ---------- */
    var revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    /* ---------- Hero Parallax ---------- */
    var heroBg = document.querySelector('.hero-bg');

    if (heroBg) {
        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                heroBg.style.transform = 'translateY(' + (scrollY * 0.35) + 'px) scale(1.05)';
            }
        }, { passive: true });
    }

    /* ---------- Animated Counters ---------- */
    var counters = document.querySelectorAll('[data-count]');

    if (counters.length > 0 && 'IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (el) {
            counterObserver.observe(el);
        });
    }

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 2000;
        var start = 0;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target + suffix;
            }
        }

        requestAnimationFrame(step);
    }

    /* ---------- Hero Slideshow ---------- */
    var heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        var currentSlide = 0;
        var slideCount = heroSlides.length;
        var slideInterval = 6000; // 6 seconds per slide

        var heroTimer = setInterval(function () {
            // Remove active from current
            heroSlides[currentSlide].classList.remove('hero-slide--active');

            // Advance to next
            currentSlide = (currentSlide + 1) % slideCount;

            // Activate next slide
            heroSlides[currentSlide].classList.add('hero-slide--active');
        }, slideInterval);

        // Cleanup on page unload
        window.addEventListener('beforeunload', function () {
            clearInterval(heroTimer);
        });
    }

    /* ---------- Lightbox ---------- */
    var lightbox = document.querySelector('.lightbox');
    var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
    var lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

    // Open lightbox from portfolio items or featured items
    document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            var src = this.getAttribute('data-lightbox');
            if (lightboxImg && src) {
                lightboxImg.src = src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Escape key closes lightbox and mobile menu
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox();
            closeMenu();
        }
    });

    /* ---------- Smooth Anchor Scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------- Project Slideshows ---------- */
    const slideshows = document.querySelectorAll('.project-slideshow');
    slideshows.forEach(function (slideshow) {
        const slides = slideshow.querySelectorAll('.slideshow-slide');
        if (slides.length === 0) return;

        let currentIndex = 0;

        // If only one slide, mark container as single
        if (slides.length === 1) {
            slideshow.classList.add('single-slide');
            slides[0].classList.add('active');
            return;
        }

        // Generate dots dynamically
        const dotsContainer = slideshow.querySelector('.slideshow-dots');
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach(function (_, idx) {
                const dot = document.createElement('button');
                dot.className = 'slideshow-dot' + (idx === 0 ? ' active' : '');
                dot.setAttribute('data-index', idx);
                dot.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
                dotsContainer.appendChild(dot);
            });
        }

        const dots = slideshow.querySelectorAll('.slideshow-dot');

        function goToSlide(index) {
            // Remove active class from current slide and dot
            slides[currentIndex].classList.remove('active');
            if (dots[currentIndex]) {
                dots[currentIndex].classList.remove('active');
            }

            // Set new current index
            currentIndex = (index + slides.length) % slides.length;

            // Add active class to new slide and dot
            slides[currentIndex].classList.add('active');
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
            }
        }

        // Prev/Next Button Events
        const prevBtn = slideshow.querySelector('.slideshow-btn.prev');
        const nextBtn = slideshow.querySelector('.slideshow-btn.next');

        if (prevBtn) {
            prevBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                goToSlide(currentIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                goToSlide(currentIndex + 1);
            });
        }

        // Dot Events
        if (dotsContainer) {
            dotsContainer.addEventListener('click', function (e) {
                const dot = e.target.closest('.slideshow-dot');
                if (!dot) return;
                e.stopPropagation();
                const index = parseInt(dot.getAttribute('data-index'), 10);
                goToSlide(index);
            });
        }

        // Set the first slide active initially
        slides[0].classList.add('active');
        
        // Touch Swipe Support for Mobile
        let startX = 0;
        let endX = 0;
        
        slideshow.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        slideshow.addEventListener('touchend', function (e) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const threshold = 50;
            if (startX - endX > threshold) {
                // Swipe left -> next
                goToSlide(currentIndex + 1);
            } else if (endX - startX > threshold) {
                // Swipe right -> prev
                goToSlide(currentIndex - 1);
            }
        }
    });

})();