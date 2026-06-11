const body = document.body;
const header = document.getElementById("header");
const navPanel = document.getElementById("navPanel");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const backToTop = document.getElementById("backToTop");
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const typedText = document.getElementById("typedText");

const typingPhrases = [
    "scalable backend systems",
    "OCR-enabled AI workflows",
    "browser automation pipelines",
    "realtime backup services",
    "secure FastAPI services",
    "clean SQLAlchemy models",
    "production-ready REST APIs"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function setTheme(theme) {
    body.classList.toggle("dark", theme === "dark");
    themeToggle.innerHTML = theme === "dark"
        ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    localStorage.setItem("portfolio-theme", theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(savedTheme || (prefersDark ? "dark" : "light"));
}

function toggleMenu(forceClose = false) {
    const isOpen = navPanel.classList.contains("open");
    const shouldOpen = forceClose ? false : !isOpen;
    navPanel.classList.toggle("open", shouldOpen);
    body.classList.toggle("menu-open", shouldOpen);
    menuToggle.setAttribute("aria-expanded", String(shouldOpen));
    menuToggle.innerHTML = shouldOpen
        ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
}

function typeLoop() {
    const phrase = typingPhrases[phraseIndex];
    typedText.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex < phrase.length) {
        charIndex += 1;
        setTimeout(typeLoop, 72);
        return;
    }

    if (!deleting && charIndex === phrase.length) {
        deleting = true;
        setTimeout(typeLoop, 1300);
        return;
    }

    if (deleting && charIndex > 0) {
        charIndex -= 1;
        setTimeout(typeLoop, 36);
        return;
    }

    deleting = false;
    phraseIndex = (phraseIndex + 1) % typingPhrases.length;
    setTimeout(typeLoop, 240);
}

function updateActiveLink() {
    let currentId = "home";
    const headerOffset = header.offsetHeight + 80;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerOffset;
        if (window.scrollY >= sectionTop) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });

    backToTop.classList.toggle("visible", window.scrollY > 520);
}

function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            filterButtons.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");

            projectCards.forEach((card) => {
                const technologies = card.dataset.tech.split(" ");
                card.classList.toggle("hidden", filter !== "all" && !technologies.includes(filter));
            });
        });
    });
}

function setError(field, message) {
    const row = field.closest(".form-row");
    row.classList.toggle("invalid", Boolean(message));
    row.querySelector(".field-error").textContent = message;
}

function validateForm() {
    let isValid = true;
    const fields = {
        name: form.elements.name,
        email: form.elements.email,
        subject: form.elements.subject,
        message: form.elements.message
    };

    Object.values(fields).forEach((field) => setError(field, ""));

    if (fields.name.value.trim().length < 2) {
        setError(fields.name, "Please enter your name.");
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim())) {
        setError(fields.email, "Please enter a valid email address.");
        isValid = false;
    }

    if (fields.subject.value.trim().length < 3) {
        setError(fields.subject, "Please add a subject.");
        isValid = false;
    }

    if (fields.message.value.trim().length < 10) {
        setError(fields.message, "Please write at least 10 characters.");
        isValid = false;
    }

    return isValid;
}

function initContactForm() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.className = "form-status";

        if (!validateForm()) {
            formStatus.textContent = "Please fix the highlighted fields.";
            formStatus.classList.add("error");
            return;
        }

        const submitButton = form.querySelector(".submit-btn");
        submitButton.classList.add("loading");
        submitButton.querySelector("span").textContent = "Preparing email...";

        const formData = new FormData(form);
        const subject = encodeURIComponent(formData.get("subject"));
        const bodyText = encodeURIComponent(
            `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
        );

        window.setTimeout(() => {
            window.location.href = `mailto:aanusree494@gmail.com?subject=${subject}&body=${bodyText}`;
            formStatus.textContent = "Your email app is opening with the message ready to send.";
            formStatus.classList.add("success");
            submitButton.classList.remove("loading");
            submitButton.querySelector("span").textContent = "Send Message";
            form.reset();
        }, 550);
    });

    form.querySelectorAll("input, textarea").forEach((field) => {
        field.addEventListener("input", () => setError(field, ""));
    });
}

document.getElementById("year").textContent = new Date().getFullYear();
initTheme();
typeLoop();
initReveal();
initProjectFilters();
initContactForm();
updateActiveLink();

themeToggle.addEventListener("click", () => setTheme(body.classList.contains("dark") ? "light" : "dark"));
menuToggle.addEventListener("click", () => toggleMenu());
navLinks.forEach((link) => link.addEventListener("click", () => toggleMenu(true)));
window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
        toggleMenu(true);
    }
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
