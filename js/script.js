document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const target = link.getAttribute("href");

            if (target && target.startsWith("#") && target.length > 1) {
                event.preventDefault();

                const section = document.querySelector(target);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
