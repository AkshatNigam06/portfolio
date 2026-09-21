// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// =========================
// CLOSE MOBILE MENU
// =========================

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(".section");


function revealSections() {

    sections.forEach((section) => {

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

revealSections();


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "15px 8%";

    } else {

        navbar.style.padding = "20px 8%";

    }

});
// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.querySelector(".custom-cursor");


// Move cursor

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// =========================
// CURSOR HOVER EFFECT
// =========================

const hoverElements = document.querySelectorAll("a, button");

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursor.style.width = "50px";
        cursor.style.height = "50px";

    });

    element.addEventListener("mouseleave", () => {

        cursor.style.width = "38px";
        cursor.style.height = "38px";

    });

});
// =========================
// SCROLL PROGRESS BAR
// =========================

const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width = scrollPercentage + "%";

});

const typingElement = document.getElementById("typing");

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

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "☀️";
    }

});
/* =====================================================
   CINEMATIC HERO PARALLAX
===================================================== */

const heroNew = document.querySelector(".hero-new");
const characterArea = document.querySelector(".character-area");
const heroTitle = document.querySelector(".hero-title");

if (heroNew && characterArea && heroTitle) {

    heroNew.addEventListener("mousemove", (e) => {

        const rect = heroNew.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) / rect.width - 0.5;

        const y =
            (e.clientY - rect.top) / rect.height - 0.5;


        characterArea.style.transform =
            `translate(-50%, -50%)
             translate(${x * 18}px, ${y * 12}px)`;


        heroTitle.style.transform =
            `translate(${x * -8}px, ${y * -5}px)`;

    });


    heroNew.addEventListener("mouseleave", () => {

        characterArea.style.transform =
            "translate(-50%, -50%)";

        heroTitle.style.transform =
            "translate(0, 0)";

    });

}


/* =====================================================
   HERO MOUSE GLOW
===================================================== */

if (heroNew) {

    heroNew.addEventListener("mousemove", (e) => {

        const rect =
            heroNew.getBoundingClientRect();

        const x =
            ((e.clientX - rect.left) / rect.width) * 100;

        const y =
            ((e.clientY - rect.top) / rect.height) * 100;


        heroNew.style.background = `
            radial-gradient(
                circle at ${x}% ${y}%,
                rgba(255, 91, 30, 0.08),
                transparent 32%
            ),
            #080808
        `;

    });


    heroNew.addEventListener("mouseleave", () => {

        heroNew.style.background =
            "#080808";

    });

}


/* =====================================================
   HERO SCROLL PARALLAX
===================================================== */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero-new");

    if (!hero) return;

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        const character =
            document.querySelector(".character-area");

        const bigText =
            document.querySelector(".hero-big-text");


        if (character) {

            character.style.marginTop =
                `${scroll * 0.12}px`;

        }


        if (bigText) {

            bigText.style.transform =
                `translateY(${scroll * 0.18}px)`;

        }

    }

});