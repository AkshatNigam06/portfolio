// =====================================================
// PORTFOLIO JAVASCRIPT
// Akshat Nigam
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // MOBILE MENU
    // =====================================================

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

    }


    // =====================================================
    // CLOSE MOBILE MENU
    // =====================================================

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

        });

    });


    // =====================================================
    // SCROLL REVEAL
    // =====================================================

    const sections = document.querySelectorAll(".section");

    function revealSections() {

        sections.forEach(function (section) {

            const sectionTop =
                section.getBoundingClientRect().top;

            const windowHeight =
                window.innerHeight;

            if (sectionTop < windowHeight - 100) {

                section.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", revealSections);

    // Run once when page loads
    revealSections();


    // =====================================================
    // NAVBAR SCROLL EFFECT
    // =====================================================

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                navbar.style.padding = "15px 8%";

            } else {

                navbar.style.padding = "20px 8%";

            }

        });

    }


    // =====================================================
    // CUSTOM CURSOR
    // =====================================================

    const cursor =
        document.querySelector(".custom-cursor");

    if (cursor) {

        // Move cursor

        document.addEventListener("mousemove", function (e) {

            cursor.style.left =
                e.clientX + "px";

            cursor.style.top =
                e.clientY + "px";

        });


        // Cursor hover effect

        const hoverElements =
            document.querySelectorAll("a, button");

        hoverElements.forEach(function (element) {

            element.addEventListener("mouseenter", function () {

                cursor.style.width = "50px";
                cursor.style.height = "50px";

            });

            element.addEventListener("mouseleave", function () {

                cursor.style.width = "38px";
                cursor.style.height = "38px";

            });

        });

    }


    // =====================================================
    // SCROLL PROGRESS BAR
    // =====================================================

    const scrollProgress =
        document.querySelector(".scroll-progress");

    if (scrollProgress) {

        window.addEventListener("scroll", function () {

            const scrollTop =
                window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            if (documentHeight > 0) {

                const scrollPercentage =
                    (scrollTop / documentHeight) * 100;

                scrollProgress.style.width =
                    scrollPercentage + "%";

            }

        });

    }


    // =====================================================
    // TYPING ANIMATION
    // =====================================================

    const typingElement =
        document.getElementById("typing");

    const words = [
        "Computer Science Student",
        "Developer",
        "Python Learner",
        "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingElement) {
            return;
        }

        const currentWord =
            words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex === words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(
            typeEffect,
            deleting ? 60 : 100
        );

    }

    if (typingElement) {
        typeEffect();
    }


    // =====================================================
    // DARK / LIGHT MODE
    // =====================================================

    const themeToggle =
        document.getElementById("theme-toggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("light-mode");

            if (
                document.body.classList.contains("light-mode")
            ) {

                themeToggle.textContent = "🌙";

            } else {

                themeToggle.textContent = "☀️";

            }

        });

    }


    // =====================================================
    // CINEMATIC HERO PARALLAX
    // =====================================================

    const heroNew =
        document.querySelector(".hero-new");

    const characterArea =
        document.querySelector(".character-area");

    const heroTitle =
        document.querySelector(".hero-title");


    if (
        heroNew &&
        characterArea &&
        heroTitle
    ) {

        heroNew.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    heroNew.getBoundingClientRect();

                const x =
                    (e.clientX - rect.left) /
                    rect.width - 0.5;

                const y =
                    (e.clientY - rect.top) /
                    rect.height - 0.5;


                characterArea.style.transform =
                    `translate(-50%, -50%) 
                     translate(${x * 18}px, ${y * 12}px)`;


                heroTitle.style.transform =
                    `translate(${x * -8}px, ${y * -5}px)`;

            }
        );


        heroNew.addEventListener(
            "mouseleave",
            function () {

                characterArea.style.transform =
                    "translate(-50%, -50%)";

                heroTitle.style.transform =
                    "translate(0, 0)";

            }
        );

    }


    // =====================================================
    // HERO MOUSE GLOW
    // =====================================================

    if (heroNew) {

        heroNew.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    heroNew.getBoundingClientRect();

                const x =
                    ((e.clientX - rect.left) /
                    rect.width) * 100;

                const y =
                    ((e.clientY - rect.top) /
                    rect.height) * 100;


                heroNew.style.background = `
                    radial-gradient(
                        circle at ${x}% ${y}%,
                        rgba(255, 91, 30, 0.08),
                        transparent 32%
                    ),
                    #080808
                `;

            }
        );


        heroNew.addEventListener(
            "mouseleave",
            function () {

                heroNew.style.background =
                    "#080808";

            }
        );

    }


    // =====================================================
    // HERO SCROLL PARALLAX
    // =====================================================

    window.addEventListener(
        "scroll",
        function () {

            const hero =
                document.querySelector(".hero-new");

            if (!hero) {
                return;
            }

            const scroll =
                window.scrollY;


            if (scroll < window.innerHeight) {

                const character =
                    document.querySelector(
                        ".character-area"
                    );

                const bigText =
                    document.querySelector(
                        ".hero-big-text"
                    );


                if (character) {

                    character.style.marginTop =
                        `${scroll * 0.12}px`;

                }


                if (bigText) {

                    bigText.style.transform =
                        `translateY(${scroll * 0.18}px)`;

                }

            }

        }
    );


    // =====================================================
    // SCROLL TO ABOUT
    // =====================================================

    const scrollExplore =
        document.querySelector(".scroll-explore");

    if (scrollExplore) {

        scrollExplore.style.cursor =
            "pointer";

        scrollExplore.addEventListener(
            "click",
            function () {

                const about =
                    document.querySelector("#about");

                if (about) {

                    about.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }

});