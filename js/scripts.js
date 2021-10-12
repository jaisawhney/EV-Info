const cards = document.querySelector("#cards");
import data from "./cars.js"

data.forEach(car => {
    const card = document.createElement("div");
    card.className = "card";

    const cardImg = document.createElement("div");
    cardImg.className = "card-img";

    const img = document.createElement("img");
    img.src = car.image;
    img.alt = car.name;

    const h3 = document.createElement("h3");
    h3.innerHTML = car.name;

    cardImg.append(img, h3);
    card.append(cardImg);


    const carSpecs = document.createElement("div");
    carSpecs.className = "card-specs";


    Object.keys(car.specs).forEach(spec => {
        const container = document.createElement("div");
        container.className = spec;

        const h4 = document.createElement("h4");
        h4.innerHTML = spec;
        h4.className = "spec-name"

        const p = document.createElement("p");
        p.className = "gray-text";
        p.innerHTML = car.specs[spec];

        container.append(h4, p);
        carSpecs.append(container);
    });

    const learnMore = document.createElement("a");
    learnMore.className = "learn-more";
    learnMore.innerHTML = "Learn More";
    learnMore.href = data.learnMoreLink;

    card.append(carSpecs, learnMore)
    cards.append(card);
});


window.addEventListener("scroll", scroll);

function scroll() {
    const homeSection = document.querySelector("#home");
    const navBar = document.querySelector("#navbar");

    if (window.scrollY > (homeSection.offsetHeight - navBar.scrollHeight-1)) {
        navBar.classList.add("scrolled")
    } else {
        navBar.classList.remove("scrolled")
    }
}