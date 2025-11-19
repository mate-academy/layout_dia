# DIA Landing Page

# Visit site
https://artemyakhno.github.io/layout_dia/

## Project Description
This project is a modern and fully responsive landing page for the creative agency "AIR". It is developed with a focus on clean design, interactivity, and user convenience, showcasing best practices in front-end development. The landing page includes several key sections: "Home Screen", "About Us", "Our Expertise", "Services", "Testimonials", "Banner", and "Contact Us", which provide a complete presentation of the agency's services and advantages.

## Technologies Used
The project is developed using a modern technology stack that ensures high performance, modularity, and ease of maintenance:

- **HTML5**: Used to create semantic and accessible web page structure.
- **SCSS (Sass)**: A CSS preprocessor that allows writing more organized, modular, and scalable CSS code. The BEM (Block, Element, Modifier) methodology is applied for class naming, improving readability and scalability of styles.
- **JavaScript (ES6+)**: The primary language for implementing interactive client-side logic.
  - **Swiper.js**: An efficient and flexible library for creating modern, fully responsive sliders with hardware acceleration. Used for animations on the "Home Screen".
  - **Anime.js**: A powerful, lightweight JavaScript library for working with animations. Used to create smooth scroll animations, element animations on load and user interaction, significantly improving UX.
  - **Notyf**: A simple and lightweight library for displaying beautiful, responsive toast notifications for user feedback (e.g., after form submission).
- **Parcel**: A fast, zero-configuration web bundler used for automatic project building, asset optimization (HTML, CSS, JS, images), and code minification for production environment.
- **Git**: A version control system that allows efficient code change management, collaboration with other developers, and project history tracking.

## Core Features
- **Adaptive and responsive design**: Fully adapted for correct display across various screen sizes, from mobile devices to desktops, ensuring excellent user experience.
- **Multilingual support (UA/EN)**: Built-in language switching mechanism using `localStorage` to save user preference. This provides content localization without page reload.
- **Interactive slider**: Implemented with Swiper.js, offering smooth transitions between slides and intuitive navigation.
- **Impressive animations**: Using Anime.js to add dynamic element animations on scroll, page load, and interaction, making the interface more lively and engaging.
- **Contact form validation**: The "Contact Us" form has client-side field validation (email, name, message) to improve user experience and reduce errors. Notyf notifications are used to display validation results.
- **Mobile menu**: Adaptive "burger" menu for convenient navigation on mobile devices.
- **SCSS with BEM**: Application of SCSS and BEM methodology for structuring styles ensures easy maintenance, extension, and conflict avoidance.
- **Convenient navigation**: Smooth scrolling to corresponding sections on the page.

## Installation and Setup
To deploy the project locally:

1. Clone the repository:
git clone [YOUR REPOSITORY URL]

2. Install dependencies:
npm install

3. Run the project in development mode:
npm start

4. Build the project for production:
npm run build
The built files will be located in the `dist/` directory.

## Author
Artem Yakhno
GitHub: [https://github.com/ArtemYakhno]
LinkedIn: [https://www.linkedin.com/in/artem-yakhno-2b9305258/]
