# Users Directory — React Component Suite

A lightweight, self-contained React application that renders a directory of user profile cards. Built with Vite for fast development and a minimal, prop-driven component architecture with zero external API dependencies.

---

## Overview

This project demonstrates a clean implementation of a reusable `Cards` component that consumes structured user data and renders it dynamically. All user avatars are bundled locally within the project — there are no network calls, no third-party image hosts, and no runtime dependency on an internet connection to render correctly.

The dataset includes thirteen users, each represented by a name, email, phone number, university affiliation, and a locally imported avatar image.

---

## Live Link

https://users-directory-react-project-eight.vercel.app/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React |
| Build Tool | Vite |
| Styling | CSS |
| Data Source | Static local array (no external API) |
| Assets | Locally imported image files |

---

## Project Structure

```
react-components/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx          # Entry point, Cards component, and user data
    ├── index.css         # Global styling
    └── assets/           # Locally stored avatar images
        ├── ahsan.png
        ├── alishba.png
        ├── ayesha.png
        ├── bilal.png
        ├── danish.png
        ├── fahad.png
        ├── hamza.png
        ├── iqra.png
        ├── mariam.png
        ├── noor.png
        ├── rabia.png
        ├── sana.png
        └── usman.png
```

---

## Component Design

The core of this project is the `Cards` component, which accepts the following props:

```jsx
<Cards
  name={user.name}
  email={user.email}
  phone={user.phone}
  university={user.university}
  image={user.image}
/>
```

Each field is destructured and rendered directly within the component. User records are stored in a static array and mapped over to generate the full set of cards:

```jsx
{users.map((user) => (
  <Cards
    key={user.id}
    name={user.name}
    email={user.email}
    phone={user.phone}
    university={user.university}
    image={user.image}
  />
))}
```

Avatar images are imported at the top of the file as ES modules, ensuring Vite bundles them correctly at build time rather than resolving them as external URLs.

---

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/iqraiqrashahzadi355-a11y/Users-directory-React-project.git
cd Users-directory-React-project
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### Production Build

```bash
npm run build
```

Compiled assets will be output to the `dist/` directory.

---

## Design Principles

- **No external dependencies for data or media.** All user data and images live inside the repository, making the project fully portable and reproducible.
- **Prop-driven rendering.** The `Cards` component has no internal state or side effects — it is a pure function of its props.
- **Single responsibility.** Data, presentation, and styling are kept in clearly separated concerns within the file structure.

---

## License

This project is open for educational and personal use. Attribution appreciated but not required.
