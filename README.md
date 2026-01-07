# Boilerplate: Routing with Vanilla JS

A minimal, framework-free Single Page Application (SPA) routing boilerplate using the History API and simple view modules.

## Idea

- Provide a tiny, easy-to-understand example of client-side routing without a front-end framework.
- Demonstrates how to structure views, a router, and static assets while serving a SPA from a small Express server.

## Architecture (high level)

- Server: small Express server (`server.js`) that serves the SPA and static assets under `/static`.
- Client: a single `index.html` entry point and a client router implemented in JavaScript using the History API. Views are individual modules that extend a shared `AbstractView` base class.
- Routing: links use `pushState` to change URLs without full page reloads; the router maps paths to view modules and renders them into the page.

## File structure

- `server.js` — Express server that serves `frontend/index.html` and static assets on `/static`.
- `package.json` — project metadata and dependencies.
- `frontend/`
  - `index.html` — SPA entry HTML.
  - `static/`
    - `assets/` — (images/fonts or other assets).
    - `css/`
      - `index.css` — application styles.
    - `html/`
      - `home.html` — optional HTML fragment for the home view.
      - `products.html` — optional HTML fragment for the products view.
      - `contact.html` — optional HTML fragment for the contact view.
    - `js/`
      - `index.js` — client bootstrap + router wiring and link handling.
      - `views/`
        - `AbstractView.js` — base class for views (common rendering helpers).
        - `Home.js` — home view module.
        - `Products.js` — products view module.
        - `Contact.js` — contact view module.

## Run / Usage

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
node server.js
```

3. Open the app in your browser at `http://localhost:3000` (the server listens on port `3000` by default or `process.env.PORT`).