<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="icon" type="image/png" href="https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Glass Bubbles -->
    <div class="glass-bubble"></div>
    <div class="glass-bubble"></div>
    <div class="glass-bubble"></div>
    <div class="glass-bubble"></div>
    <div class="glass-bubble"></div>
    
    <div class="container">
        <!-- Navigation -->
       <?php include "components/nav.php"?>

        <!-- Hero Section -->
        <section class="top-section">
            <div class="hero-content">
                <div class="profile-card glassmorphism">
                    <div class="profile-image">
                        <img src="https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg" alt="Profile">
                    </div>
                    <h1 class="name">your name</h1>
                    <p class="title">Full Stack Developer</p>
                    <div class="social-links">
                        <a href="https://github.com/S28S12Mohanty/github-portfolio" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="about-content">
                <div class="about-section glassmorphism">
                    <h2 class="card-title">About Me</h2>
                    <p class="about-text">
                        I'm a passionate Full Stack Developer with 5+ years of experience creating 
                        innovative web applications. I specialize in modern technologies like React, 
                        Node.js, and cloud platforms. When I'm not coding, you'll find me exploring 
                        new technologies, contributing to open-source projects, or sharing knowledge 
                        with the developer community.
                    </p>
                    <button class="about-btn neumorphism-btn">Download CV</button>
                </div>
            </div>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html> 