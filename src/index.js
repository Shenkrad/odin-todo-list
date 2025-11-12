import "./css/style.css";
import { homePage } from "./js/homePage";
import { menuPage } from "./js/menuPage";
import { aboutPage } from "./js/aboutPage";

const render = (function() {
    const contentBox = document.querySelector("div#content");
    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnAbout = document.querySelector("#btn-about");

    // bind events
    btnHome.addEventListener("click", (e) => {
        clearContentBox();
        homePage.render(contentBox);
    });

    btnMenu.addEventListener("click", (e) => {
        clearContentBox();
        menuPage.render(contentBox);
    });

     btnAbout.addEventListener("click", (e) => {
        clearContentBox();
        aboutPage.render(contentBox);
    });

    function clearContentBox() {
        Array.from(contentBox.children).forEach(element => {
            contentBox.removeChild(element);
        });
    }

    homePage.render(contentBox);
})();