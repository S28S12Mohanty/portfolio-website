<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skills - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="skill.css">
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
                <h2 class="card-title">My Skills</h2>
                <p class="about-text">Here is my skills to represent my Expertise</p>

                <div class="skills-grid">
                    <div>
                        <div class="skill-bar">
                            <span class="skill-title">Html</span>
                            <span class="skill-percentage">90%</span>
                        </div>
                        <div class="dot-bar">
                            <span class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot"></span>
                        </div>
                        <div class="skill-bar">
                            <span class="skill-title">React Js</span>
                            <span class="skill-percentage">60%</span>
                        </div>
                        <div class="dot-bar">
                            <span class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot"></span><span class="dot"></span><span
                                    class="dot"></span><span class="dot"></span>
                        </div>

                    </div>
                    <div>
                        <div class="skill-bar">
                            <span class="skill-title">Css</span>
                            <span class="skill-percentage">85%</span>
                        </div>
                        <div class="dot-bar">
                            <span class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot"></span><span class="dot"></span>
                        </div>
                        <div class="skill-bar">
                            <span class="skill-title">Java Script</span>
                            <span class="skill-percentage">70%</span>
                        </div>
                        <div class="dot-bar">
                            <span class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot"></span><span
                                    class="dot"></span><span class="dot"></span>
                        </div>
                        <div class="skill-bar">
                            <span class="skill-title">Node Js</span>
                            <span class="skill-percentage">70%</span>
                        </div>
                        <div class="dot-bar">
                            <span class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot filled"></span><span
                                    class="dot filled"></span><span class="dot"></span><span class="dot"></span><span
                                    class="dot"></span>
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