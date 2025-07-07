# Pogo - Pokemon Data Viewer

This Vue 3 application provides a beautiful and filterable interface for viewing Pokemon-related data. Built with modern web technologies, it offers an intuitive way to browse, search, and filter Pokemon information.

Our CI/CD pipeline provides:

- **📚 [Component Library](https://dreiv.github.io/pogo/ux)**: Interactive UI components with documentation
- **📊 [Test Coverage](https://dreiv.github.io/pogo/coverage)**: Code quality metrics
- **🧪 [E2E Test Reports](https://dreiv.github.io/pogo/e2e)**: User workflow validations

## 🚀 Quickstart

You can run the application locally by following these steps:

```sh
npm install
npm run dev
```

This will start the development server, typically at `http://localhost:5173`.

## 🌍 Supported Browsers

This application supports the latest, stable versions of Chrome, Firefox, Edge, and Safari. It's optimized for modern web browsers.

## 📦 Dependencies

The project relies on a set of dependencies for development and runtime:

### Application Dependencies

| Dependency | Description                                                    | WWW                                                    |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| Vue        | The core framework for building the user interface.            | [https://vuejs.org/](https://vuejs.org/)               |
| Vue Router | Official router for Vue.js, enabling navigation between views. | [https://router.vuejs.org/](https://router.vuejs.org/) |
| Pinia      | State management library for Vue, facilitating state sharing.  | [https://pinia.vuejs.org/](https://pinia.vuejs.org/)   |
| VueUse     | Collection of Vue composition utilities.                       | [https://vueuse.org/](https://vueuse.org/)             |
| Lucide Vue | A collection of beautiful SVG icons as Vue components.         | [https://lucide.dev/](https://lucide.dev/)             |

### Development Dependencies

| Dependency | Description                                                                            | WWW                                                                    |
| ---------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| TypeScript | Adds static typing to JavaScript, improving code quality.                              | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)     |
| Vite       | Next-generation frontend tooling, providing a fast dev server and build tool.          | [https://vitejs.dev/](https://vitejs.dev/)                             |
| Storybook  | UI component development environment for building and testing components in isolation. | [https://storybook.js.org/](https://storybook.js.org/)                 |
| Vitest     | Fast unit-testing framework powered by Vite.                                           | [https://vitest.dev/](https://vitest.dev/)                             |
| Playwright | End-to-end testing framework for reliable cross-browser tests.                         | [https://playwright.dev/](https://playwright.dev/)                     |
| ESLint     | Linter for identifying and fixing code issues.                                         | [https://eslint.org/](https://eslint.org/)                             |
| OxLint     | Blazingly fast JavaScript linter.                                                      | [https://oxc-project.github.io/](https://oxc-project.github.io/)       |
| Prettier   | Code formatter for enforcing consistent code style.                                    | [https://prettier.io/](https://prettier.io/)                           |
| Husky      | Git hooks for automating checks before commits.                                        | [https://github.com/typicode/husky](https://github.com/typicode/husky) |

## 🍍 State Management

We utilize [Pinia](https://pinia.vuejs.org/) for managing the application state, allowing for efficient state sharing between components. You can inspect the state using [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg).

## 🧪 Testing

We have a comprehensive testing setup to ensure code quality:

```sh
# Run unit tests
npm run test

# Run tests with UI
npm run test-ui

# Generate test coverage report
npm run coverage

# Run end-to-end tests with Playwright
npm run test-e2e
```

For developing and testing components in isolation, we use Storybook:

```sh
npm run storybook
```

## ✨ Code Quality

We maintain high code quality standards through automated tools:

```sh
# Run linters
npm run lint

# Format code with Prettier
npm run format

# Run type checking
npm run type-check
```

## 🏗️ Build & Deployment

To build the application for production:

```sh
# Standard build
npm run build

# Build with bundle analyzer visualization
npm run build-analyze
```

These commands will create an optimized build in the `dist` folder.

To preview the production build locally:

```sh
npm run preview
```

## 🔍 Pre-commit Checks

We enforce code quality and consistency through pre-commit checks using Husky and lint-staged. These checks automatically run:

- TypeScript type checking
- Code formatting with Prettier
- Linting with ESLint and OxLint
- Running unit tests related to changed files

The configuration for these checks can be found in the `lint-staged` section of the package.json file.

## 🎮 Pokemon Data Features

This application accepts Pokemon-related data and displays it in a beautiful, filterable interface featuring:

- **Search & Filter**: Find Pokemon by name, type, generation, or stats
- **Detailed Views**: Complete Pokemon information with stats, abilities, and evolution chains
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Data Visualization**: Charts and graphs for Pokemon statistics
- **Favorites**: Save and manage your favorite Pokemon
