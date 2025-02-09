# Owen Wilson's WoW

This React application fetches and displays random scenes from the [Owen Wilson WoW API](https://owen-wilson-wow-api.onrender.com). Users can view a list of scenes, filter them by movie and year, and click on a scene to see its detailed information.

## Live Demo

You can check out the live version of the project here: [Owen Wilson's WoW - Live Demo](https://beta.adalab.es/modulo-3-evaluacion-final-biancadragan/).

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

- **Random Scenes:** Fetches 50 random scenes from the API.
- **Scene Listing:** Displays a list of scenes sorted alphabetically by movie title.
- **Filtering:** Allows filtering by movie title and year, with filter settings persisted in localStorage.
- **Detail View:** Provides a detail page for each scene with additional information (poster, full quote, director, and an audio link).
- **Routing:** Uses React Router for client-side navigation between the landing page and detail pages.
- **Responsive Design:** Styled with SCSS for a modern look and feel.
- **Testing:** Fully tested using Jest and React Testing Library.

## Usage

- **Browse Scenes:** On the landing page, scroll through the list of scenes.
- **Filter Scenes:** Use the text input and dropdown to filter scenes by movie and year.
- **View Details:** Click on a scene card to navigate to its detail page.

## Project Structure

```
modulo-3-evaluacion-final-biancadragan/
├── node_modules/
├── public/
│   ├── comic.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Filters.jsx
│   │   ├── Header.jsx
│   │   ├── NoResultsMessage.jsx
│   │   ├── SceneDetail.jsx
│   │   ├── SceneItem.jsx
│   │   └── SceneList.jsx
│   ├── images/
│   ├── lib/
│   │   ├── hooks.js
│   │   └── utils.js
│   ├── pages/
│   │   ├── DetailPage.jsx
│   │   └── LandingPage.jsx
│   └── styles/
│       ├── components/
│       │   ├── _filters.scss
│       │   ├── _scene-detail.scss
│       │   ├── _scene-item.scss
│       │   └── _scene-list.scss
│       ├── core/
│       │   ├── _reset.scss
│       │   └── _variables.scss
│       ├── layout/
│       │   └── main.scss
│       └── main.scss
│   ├── tests/
│   │   ├── DetailPage.test.jsx
│   │   ├── Filters.test.jsx
│   │   ├── Header.test.jsx
│   │   ├── LandingPage.test.jsx
│   │   ├── NoResultsMessage.test.jsx
│   │   ├── SceneItem.test.jsx
│   │   └── SceneList.test.jsx
├── .gitignore
├── babel.config.cjs
├── eslint.config.js
├── index.html
├── jest.setup.js
├── package-lock.json
├── package.json
└── vite.config.js
```

## Technologies Used

- **React** – Frontend library
- **React Router** – Client-side routing
- **Babel** – Transpiler for modern JavaScript and JSX
- **Sass/SCSS** – Styling
- **Jest & React Testing Library** – Testing frameworks
- **localStorage** – Persisting filter settings
- **Owen Wilson WoW API** – Data source for scenes

## Testing

To run all test suites, execute:

```bash
npm test
```
This command runs Jest, which uses Babel to transform your code and loads the setup file (jest.setup.js) that imports @testing-library/jest-dom and sets up the necessary polyfills.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

