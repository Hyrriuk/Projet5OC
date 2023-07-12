document.addEventListener("DOMContentLoaded", function () {
    const dotsContainer = document.querySelector(".dots"); // Sélectionne le conteneur des points
    const slides = [
        {
            image: "slide1.jpg",
            tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
        },
        {
            image: "slide2.jpg",
            tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
        },
        {
            image: "slide3.jpg",
            tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
        },
        {
            image: "slide4.png",
            tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
        },
    ];

    const flecheDroite = document.querySelector(".arrow_right");
    const flecheGauche = document.querySelector(".arrow_left");

    // ...
    flecheGauche.addEventListener("click", () => {
        indexDiapositiveActive = (indexDiapositiveActive - 1 + slides.length) % slides.length; // Décrémente l'index de la diapositive active (en bouclant à la dernière diapositive lorsque nécessaire)
        updateCarousel();
    });

    flecheDroite.addEventListener("click", () => {
        indexDiapositiveActive = (indexDiapositiveActive + 1) % slides.length; // Incrémente l'index de la diapositive active (en bouclant à la première diapositive lorsque nécessaire)
        updateCarousel();
    });

    function updateCarousel() {
        updateActiveDot(indexDiapositiveActive); // Met à jour les classes des points

        const slide = slides[indexDiapositiveActive]; // Récupère la diapositive active
        const image = document.querySelector(".banner-img");
        const tagLine = document.querySelector("#banner p");

        image.src = "./assets/images/slideshow/" + slide.image; // Met à jour l'image
        tagLine.innerHTML = slide.tagLine; // Met à jour le texte
    }

    // Ajoute les points en fonction du nombre d'éléments dans le tableau "slides"
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) {
            dot.classList.add("dot_selected");
        }
        dotsContainer.appendChild(dot);
    });

    function updateActiveDot(index) {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("dot_selected");
            } else {
                dot.classList.remove("dot_selected");
            }
        });
    }
    let indexDiapositiveActive = 0;
    updateActiveDot(indexDiapositiveActive);
});
