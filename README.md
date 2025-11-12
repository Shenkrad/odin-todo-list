# Odin Restaurant Page

A dynamic restaurant homepage built with JavaScript DOM manipulation and modular ES6 code.  
Assignment: https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page

## Live Demo
https://shenkrad.github.io/Odin-restaurant-page/

## Features
- Single-page layout with **Home**, **Menu**, and **Contact** tabs.
- All sections are rendered via JavaScript (no hard-coded HTML content).
- Clean module structure (each tab exports a builder function).
- Webpack bundling + dev server.
- Responsive styles.

## Installation & Setup
1) Clone the repository
    
    git clone https://github.com/Shenkrad/Odin-restaurant-page.git
    cd Odin-restaurant-page

2) Install dependencies
    
    npm install

3) Start the dev server
    
    npx webpack serve --open

    opens http://localhost:8080

4) Build for production
    
    npm run build
    
    output in /dist

## Usage
- Use the header tabs to switch between sections.
- Modify or add modules in **/src** (e.g., create a new `about.js` and import it in `index.js`).
- All DOM nodes are created and appended programmatically.

## Technologies
- JavaScript (ES6+)
- CSS3
- Webpack
- npm
- Git & GitHub Pages

## License
MIT
