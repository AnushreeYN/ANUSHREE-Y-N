function myMenuFunction() {
    var menuBtn = document.getElementById("mynavmenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/*--------Dark mode--------*/
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/*------Typing Effect------*/
// Make sure to include Typed.js library in your HTML file
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 88,
    backDelay: 2000,
});

/*------Scroll Active Link------*/
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);
