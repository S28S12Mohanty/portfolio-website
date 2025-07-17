// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Custom Cursor Effect
    function initCustomCursor() {
        // Create cursor elements
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        
        const trails = [];
        for (let i = 0; i < 3; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trails.push(trail);
            document.body.appendChild(trail);
        }
        
        document.body.appendChild(cursor);
        
        // Add cursor styles
        const cursorStyles = document.createElement('style');
        cursorStyles.textContent = `
            .custom-cursor {
                position: fixed;
                width: 20px;
                height: 20px;
                background: rgba(255, 255, 255, 0.3);
                border: 2px solid rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                backdrop-filter: blur(5px);
            }
            
            .cursor-trail {
                position: fixed;
                width: 8px;
                height: 8px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                transition: all 0.3s ease;
            }
            
            .cursor-trail:nth-child(1) { transition-delay: 0.1s; }
            .cursor-trail:nth-child(2) { transition-delay: 0.2s; }
            .cursor-trail:nth-child(3) { transition-delay: 0.3s; }
            
            .custom-cursor.hover {
                transform: scale(1.5);
                background: rgba(255, 255, 255, 0.5);
                border-color: rgba(255, 255, 255, 0.8);
            }
            
            .custom-cursor.click {
                transform: scale(0.8);
                background: rgba(255, 255, 255, 0.7);
            }
            
            body {
                cursor: none;
            }
            
            a, button, .nav-link, .social-link {
                cursor: none;
            }
        `;
        document.head.appendChild(cursorStyles);
        
        // Mouse move event
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let trailX = [0, 0, 0], trailY = [0, 0, 0];
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Animation loop
        function animateCursor() {
            // Smooth cursor movement
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            
            // Trail movement
            for (let i = 0; i < trails.length; i++) {
                trailX[i] += (cursorX - trailX[i]) * (0.1 - i * 0.02);
                trailY[i] += (cursorY - trailY[i]) * (0.1 - i * 0.02);
                
                trails[i].style.left = trailX[i] - 4 + 'px';
                trails[i].style.top = trailY[i] - 4 + 'px';
            }
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .nav-link, .social-link, .about-card, .skills-card, .experience-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
        
        // Click effect
        document.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            trails.forEach(trail => trail.style.opacity = '0');
        });
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            trails.forEach(trail => trail.style.opacity = '1');
        });
    }
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Dark/Light Mode Toggle
    function initThemeToggle() {
        // Create theme toggle button
        const themeToggle = document.createElement('div');
        themeToggle.innerHTML = `
            <div style="
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 50px;
                padding: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: 'Poppins', sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
            " id="themeToggle">
                <i class="fas fa-fire" style="color: #ffd700; font-size: 18px;" id="themeIcon"></i>
            </div>
        `;
        
        // Add toggle button to navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.appendChild(themeToggle);
        }
        
        // Add theme styles
        const themeStyles = document.createElement('style');
        themeStyles.textContent = `
            /* Dark mode styles */
            body.dark-mode {
                background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;
            }
            
            body.dark-mode .glass-bubble {
                background: rgba(255, 255, 255, 0.05) !important;
                border-color: rgba(255, 255, 255, 0.1) !important;
            }
            
            body.dark-mode .navbar {
                background: rgba(0, 0, 0, 0.2) !important;
                border-top-color: rgba(255, 255, 255, 0.1) !important;
            }
            
            body.dark-mode .nav-link {
                color: rgba(255, 255, 255, 0.8) !important;
            }
            
            body.dark-mode .nav-link.active {
                background: rgba(255, 255, 255, 0.1) !important;
            }
            
            body.dark-mode .nav-link {
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(10px) !important;
            }
            
            body.dark-mode .nav-link:hover {
                background: rgba(255, 255, 255, 0.15) !important;
                border-color: rgba(255, 255, 255, 0.2) !important;
            }
            
            /* Light mode navbar icon backgrounds */
            body:not(.dark-mode) .nav-link {
                background: rgba(255, 255, 255, 0.1) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                backdrop-filter: blur(10px) !important;
            }
            
            body:not(.dark-mode) .nav-link:hover {
                background: rgba(255, 255, 255, 0.2) !important;
                border-color: rgba(255, 255, 255, 0.3) !important;
            }
            
            body:not(.dark-mode) .nav-link.active {
                background: rgba(255, 255, 255, 0.25) !important;
                border-color: rgba(255, 255, 255, 0.4) !important;
            }
            
            body.dark-mode .name {
                color: #ffffff !important;
            }
            
            body.dark-mode .title {
                color: rgba(255, 255, 255, 0.7) !important;
            }
            
            body.dark-mode .card-title {
                color: #ffffff !important;
            }
            
            body.dark-mode .about-text {
                color: rgba(255, 255, 255, 0.8) !important;
            }
            
            body.dark-mode .neumorphism {
                background: linear-gradient(145deg, #2a2a3e, #1a1a2e) !important;
                box-shadow: 2px 2px 60px #0f0f1a, -2px -2px 60px #3a3a5e !important;
            }
            
            body.dark-mode .glassmorphism {
                background: rgba(255, 255, 255, 0.05) !important;
                border-color: rgba(255, 255, 255, 0.1) !important;
            }
            
            body.dark-mode .social-link {
                background: rgba(255, 255, 255, 0.05) !important;
                border-color: rgba(255, 255, 255, 0.1) !important;
            }
            
            body.dark-mode .skill-name {
                color: rgba(255, 255, 255, 0.9) !important;
            }
            
            body.dark-mode .timeline-content h3 {
                color: #ffffff !important;
            }
            
            body.dark-mode .company,
            body.dark-mode .period,
            body.dark-mode .description {
                color: rgba(255, 255, 255, 0.7) !important;
            }
            
            /* Theme toggle animations */
            #themeToggle {
                transition: all 0.3s ease;
                margin-left: 15px;
            }
            
            #themeToggle:hover {
                transform: scale(1.1);
                background: rgba(255, 255, 255, 0.2) !important;
            }
            
            #themeToggle:active {
                transform: scale(0.95);
            }
            
            /* Adjust navbar for theme toggle */
            .navbar {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
            }
            
            .navbar .nav-menu {
                display: flex !important;
                align-items: center !important;
            }
            
            /* Smooth transitions for all elements */
            * {
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
            }
        `;
        document.head.appendChild(themeStyles);
        
        // Theme state management
        let isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        // Apply initial theme
        function applyTheme() {
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                document.getElementById('themeIcon').className = 'fas fa-meteor';
                document.getElementById('themeIcon').style.color = '#4ecdc4';
            } else {
                document.body.classList.remove('dark-mode');
                document.getElementById('themeIcon').className = 'fas fa-fire';
                document.getElementById('themeIcon').style.color = '#ffd700';
            }
        }
        
        // Toggle theme function
        function toggleTheme() {
            isDarkMode = !isDarkMode;
            localStorage.setItem('darkMode', isDarkMode);
            applyTheme();
            
            // Add toggle animation
            const toggle = document.getElementById('themeToggle');
            toggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                toggle.style.transform = 'rotate(0deg)';
            }, 300);
        }
        
        // Apply initial theme
        applyTheme();
        
        // Add click event
        document.getElementById('themeToggle').addEventListener('click', toggleTheme);
        
        // Add keyboard shortcut (Ctrl/Cmd + T)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 't') {
                e.preventDefault();
                toggleTheme();
            }
        });
        
        // Add system theme detection
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            // Only apply system preference if no user preference is set
            if (localStorage.getItem('darkMode') === null) {
                isDarkMode = mediaQuery.matches;
                applyTheme();
            }
            
            // Listen for system theme changes
            mediaQuery.addListener((e) => {
                if (localStorage.getItem('darkMode') === null) {
                    isDarkMode = e.matches;
                    applyTheme();
                }
            });
        }
    }
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default for in-page navigation
            if (href && href.startsWith('#')) {
                e.preventDefault();
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                // Smooth scroll to section (if implemented)
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // Otherwise, let the browser handle the navigation (including target="_blank")
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 200);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.about-card, .skills-card, .experience-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contact button functionality
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Simulate contact form (you can replace this with actual form handling)
            alert('Contact form would open here! You can integrate with your preferred contact method.');
        });
    }

    // Social media links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const finalNumber = parseInt(statNumber.textContent);
                animateNumber(statNumber, 0, finalNumber, 2000);
                statsObserver.unobserve(statNumber);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });


    // Add typing effect to name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add floating animation to profile image
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        profileImage.style.animation = 'float 3s ease-in-out infinite';
    }

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add ripple effect to contact button
    if (contactBtn) {
        contactBtn.addEventListener('click', createRipple);
    }

    // Add ripple CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .contact-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollProgress + '%';
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals or overlays
            console.log('Escape pressed - close modals if any');
        }
    });

    // Add touch support for mobile
    if ('ontouchstart' in window) {
        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            card.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }

    // Theme toggle logic
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(savedTheme);
        themeIcon.className = savedTheme === 'dark-mode' ? 'fas fa-sun' : 'fas fa-moon';
    } else {
        body.classList.add('light-mode');
    }
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light-mode');
        }
    });

    console.log('Portfolio page loaded successfully! 🚀');
}); 