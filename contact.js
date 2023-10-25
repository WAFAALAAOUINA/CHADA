
const btnMenu = document.getElementById("btn_menu");
const navLinks = document.querySelector(".nav_links");

btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

    // Validation du formulaire
    const contactForm = document.getElementById("contactForm");
    const errorMessages = document.getElementById("errorMessages");

    contactForm.addEventListener("submit", function (event) {
        let valid = true;
        errorMessages.innerHTML = "";

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (name.value.trim() === "") {
            errorMessages.innerHTML += "Le champ Nom est requis.<br>";
            valid = false;
        }

        if (email.value.trim() === "" || !isValidEmail(email.value)) {
            errorMessages.innerHTML += "L'adresse e-mail n'est pas valide.<br>";
            valid = false;
        }

        if (message.value.trim() === "") {
            errorMessages.innerHTML += "Le champ Message est requis.<br>";
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    // Fonction pour vérifier la validité de l'e-mail
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
