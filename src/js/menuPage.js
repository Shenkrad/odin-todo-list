import dish1Image from "../img/dish1.avif";
import dish2Image from "../img/dish2.avif";
import dish3Image from "../img/dish3.avif";
import dish4Image from "../img/dish4.avif";

export const menuPage = (function() {
    function render(contentBox) {
    
            const headerText = document.createElement("h1");
            headerText.textContent = "Menu";
    
            const menuBox = document.createElement("div");
            menuBox.classList.add("menuBox");
    
            // dish1
            const dish1 = createDish("Mini Potato Pies with Creamy Garlic Dip & Roasted Beetroot-Bacon", 15.90, 
                "Delicate baked pastry parcels filled with softly mashed potatoes, served alongside a velvety garlic cream dip and a vibrant medley of oven-roasted beetroot and crisp maple-smoked bacon bits. Finished with a drizzle of fresh dill for an aromatic, contrasting flourish—comforting, yet refined.",
                dish1Image, "Mini Potato Pies with Creamy Garlic Dip & Roasted Beetroot-Bacon"
            );
            menuBox.appendChild(dish1);
    
            //dish2
            const dish2 = createDish("Savoury Black Bowl of Roasted Chicken & Seasonal Vegetables", 17.50,
                "Tender roasted chicken pieces served over steamed fragrant rice, nestled in a sleek black ceramic bowl alongside a colourful medley of seasonal vegetables, finished with fresh herbs and a light citrus-soy glaze—bold in flavour, elegant in presentation.",
                dish2Image, "Savoury Black Bowl of Roasted Chicken & Seasonal Vegetables"
            );
            menuBox.appendChild(dish2);
    
            //dish3
            const dish3 = createDish("Summer Fruit & Greens Salad", 12.50,
                "A vibrant mix of crisp baby greens and juicy seasonal fruits — think fresh berries, soft stone-fruits and tangy citrus segments — drizzled with a light honey-lemon vinaigrette and finished with toasted almonds and micro-herbs. A refreshing, elegant dish that balances sweetness, freshness and subtle crunch.",
                dish3Image, "Summer Fruit & Greens Salad"
            );
            menuBox.appendChild(dish3);
    
            //dish4
            const dish4 = createDish("Garden Veggie Open-Face Toast", 13.90,
                "A hearty slice of rustic artisan bread topped with crisp seasonal vegetables — zucchini ribbons, tender baby greens and a hint of basil-pesto drizzle — plated simply on white ceramic to let the freshness shine. A light yet satisfying opening to your meal, with vibrant colour and clean flavours.",
                dish4Image, "Garden Veggie Open-Face Toast"
            );
            menuBox.appendChild(dish4);
    
            contentBox.appendChild(headerText);
            contentBox.appendChild(menuBox);
    
        }

    function createDish(name, price, description, image, imageAlt) {
        const dishBox = document.createElement("div");
        dishBox.classList.add("dishBox");

        const dishImage = document.createElement("img");
        dishImage.src = image;
        dishImage.alt = imageAlt;

        const infoBox = document.createElement("div");
        infoBox.classList.add("dishInfoBox");
        const dishName = document.createElement("h2");
        dishName.textContent = name;
        const dishPrice = document.createElement("p");
        dishPrice.textContent = price + " €";
        dishPrice.classList.add("priceTag");
        const dishDescription = document.createElement("p");
        dishDescription.textContent = description;

        infoBox.appendChild(dishName);
        infoBox.appendChild(dishDescription);
        infoBox.appendChild(dishPrice);

        dishBox.appendChild(dishImage);
        dishBox.appendChild(infoBox);

        return dishBox;
    }

        return { render };
})();