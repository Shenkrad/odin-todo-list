import cook2Image from "../img/cook2.jpg";

export const aboutPage = (function() {
    function render(contentBox) {

        const headerText = document.createElement("h1");
        headerText.textContent = "About Us";

        const aboutContent = document.createElement("div");
        aboutContent.id = "about-content";

        const heroImage = document.createElement("img");
        heroImage.src = cook2Image;
        heroImage.alt = "Image of a cook";
        heroImage.classList.add("img-hero");

        const textBox = document.createElement("div");
        textBox.id = "about-textBox";

        const aboutUsDescription1 = document.createElement("p");
        aboutUsDescription1.textContent = "At The Whimsical Table, food is more than a meal — it’s a little story served on a plate. Born from a love of playful creativity and honest ingredients, we bring together seasonal produce, handcrafted sauces, and a dash of imagination to create dishes that surprise as much as they comfort.";

        const aboutUsDescription2 = document.createElement("p");
        aboutUsDescription2.textContent = "Our kitchen celebrates contrasts: rustic and refined, simple and inventive, familiar yet full of wonder. Every plate is designed to spark curiosity — whether it’s a buttery potato pie paired with roasted beetroot or a bright salad scattered with summer fruit.";

        const aboutUsDescription3 = document.createElement("p");
        aboutUsDescription3.textContent = "We believe dining should be joyful, unhurried, and shared. So pull up a chair, pour a glass, and join us at The Whimsical Table — where flavour meets fantasy.";

        textBox.appendChild(aboutUsDescription1);
        textBox.appendChild(aboutUsDescription2);
        textBox.appendChild(aboutUsDescription3);

        aboutContent.appendChild(heroImage);
        aboutContent.appendChild(textBox);

        contentBox.appendChild(headerText);
        contentBox.appendChild(aboutContent);

    }

    return { render };
})();