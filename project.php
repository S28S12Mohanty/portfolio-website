<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="project.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>
    <!-- Glass Bubbles -->
    <?php include 'components/bubble.php'; ?>

    <div class="container">

        <!--    navigation bar-->
        <?php include "components/nav.php"; ?>

        <section class="top-section">

            <!--  profile content-->
            <?php include "components/profile.php" ?>

            <!-- skill section-->


            <div class="about-content">
                <div class="about-section glassmorphism">
                    <h2 class="card-title">My Projects</h2>
                    <div class="project-grid-modern">
                        <div class="project-card-modern glassmorphism">
                            <div class="project-card-header">
                                <span class="project-type-badge">Personal portfolio</span>
                                <span class="project-year-badge">2025</span>
                            </div>
                            <div class="project-card-desc"> Developing a portfolio website using HTML5, CSS, JavaScript
                                frameworks, and jQuery to showcase
                                projects, technical skills, and achievements in web development.</div>
                            <div class="project-card-image-wrapper">
                                <a href="#" class="project-btn">View Project</a>
                                <a href="#" class="source-btn">Source Code</a>
                            </div>
                        </div>
                        <div class="project-card-modern glassmorphism">
                            <div class="project-card-header">
                                <span class="project-type-badge">Chat Application (Dynamic) </span>
                                <span class="project-year-badge">2025</span>
                            </div>
                            <div class="project-card-desc">Developed a real-time chat app at Wooble using HTML5, CSS3, Bootstrap, Tailwind CSS, and integrated company APIs for seamless user discussions.</div>
                            <div class="project-card-image-wrapper">
                                <a href="#" class="project-btn">View Project</a>
                                <a href="#" class="source-btn">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>

    <script src="script.js"></script>
</body>

</html>