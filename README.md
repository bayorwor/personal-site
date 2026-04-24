# AFRIXOLVE Personal Site

A simple multi-page personal/portfolio website built with plain HTML, CSS, and JavaScript — no frameworks, no build tools, no installations required. This project is designed as a **learning playground** for beginners who want to practice HTML structure, CSS styling, and JavaScript fetching data from real APIs.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [What You'll Learn](#2-what-youll-learn)
3. [Tech Stack](#3-tech-stack)
4. [File Structure](#4-file-structure)
5. [Page Map](#5-page-map)
6. [How to Run Locally](#6-how-to-run-locally)
7. [How the JavaScript Works](#7-how-the-javascript-works)
8. [How to Customize](#8-how-to-customize)
9. [Adding a New Page](#9-adding-a-new-page)
10. [Working with Images](#10-working-with-images)
11. [Common Problems & Fixes](#11-common-problems--fixes)

---

## 1. Project Overview

This is a personal website for **AFRIXOLVE** — a beginner-friendly showcase of web development, cybersecurity, and mobile application services. It includes:

- A **Home** page with a hero introduction, a live product list, and a live todo list pulled from public APIs
- A **Services** page listing offered services
- A **Products** page showing sponsored items
- Shared navigation and footer across all pages

---

## 2. What You'll Learn

By reading and tinkering with this code, a beginner will practice:

- Writing semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Styling with CSS Flexbox and CSS Grid
- Linking multiple HTML pages together with relative URLs
- Using a CDN to load a third-party icon library (Feather Icons)
- Making HTTP requests with `fetch()` in JavaScript
- Using `.then()` promise chains to handle async responses
- Looping over an array and injecting HTML into the page with `innerHTML`

---

## 3. Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling and layout (Flexbox, Grid) |
| JavaScript (Vanilla) | Fetching data from public APIs and rendering it to the page |
| [Feather Icons](https://feathericons.com/) | SVG icon library (loaded via CDN) |
| [Fake Store API](https://fakestoreapi.com/) | Free public API for demo products |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | Free public API for demo todos |

No npm, no build step, no terminal commands needed to run this project.

---

## 4. File Structure

```
personal-site/
│
├── index.html        ← Home page (entry point, loads products + todos)
├── about-me.html     ← Services page
├── product.html      ← Sponsored products page
│
├── style.css         ← All styles for the entire site
├── main.js           ← Fetches products and todos, injects them into index.html
│
└── images/
    ├── Team Pictures IMG 9740.jpeg   ← Hero section photo
    └── End of Year Newsletter.jpg    ← Services page background
```

---

## 5. Page Map

```
index.html  ──────────────────────────────────────────────┐
(Home)                                                     │
  │  Nav: Home · Services · Products · Contact Us          │
  │  Buttons: "See the work" → product.html                │
  │           "About Me"    → about-me.html                │
  │  Dynamic: fetches products + todos from public APIs    │
  │                                                        │
about-me.html ────────────────────────────────────────────┤
(Services)                                                 │
  │  Nav: same 4 links                                     │
  │  Shows: Web Dev, Cybersecurity, Mobile App, DBMS       │
  │                                                        │
product.html ─────────────────────────────────────────────┘
(Products)
  │  Nav: same 4 links
  │  Shows: sponsored product cards with prices
```

**Contact Us** in the nav opens the default email client to `bayorwor.dev@gmail.com`.

---

## 6. How to Run Locally

### Option A — Open directly in a browser (simplest)

1. Download or clone this repository to your computer.
2. Open the `personal-site/` folder.
3. Double-click `index.html` — it opens in your default browser.
4. Click the navigation links to move between pages.

### Option B — Use VS Code Live Server (recommended)

Live Server auto-refreshes the browser whenever you save a file.

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Open VS Code and install the **Live Server** extension:
   - Click the Extensions icon (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Search for "Live Server" by Ritwick Dey
   - Click **Install**
3. Open the `personal-site/` folder in VS Code (`File → Open Folder`).
4. Right-click `index.html` in the file explorer → **Open with Live Server**.
5. Your browser opens automatically at `http://127.0.0.1:5500/index.html`.

> **Note:** The `fetch()` calls in `main.js` need an internet connection to reach the public APIs. If the product and todo lists don't appear, check your Wi-Fi and open your browser's DevTools Console (`F12`) to see any errors.

---

## 7. How the JavaScript Works

Open `main.js` and read it top to bottom — it's only ~30 lines. Here's what each part does:

```js
const productsContainer = document.getElementById("products")
const todosContainer    = document.getElementById("todos")
```
These two lines find the empty `<article id="products">` and `<section id="todos">` containers in `index.html` so we can fill them later.

```js
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    for (let product of products) {
      productsContainer.innerHTML += `
        <div class='card'>
          <h1>${product.title}</h1>
          <img src=${product.image} />
          <p>${product.price}</p>
        </div>
      `
    }
  })
```
1. `fetch(...)` asks the Fake Store API for a list of products.
2. `.then((res) => res.json())` waits for the response and converts it from raw JSON text to a JavaScript array.
3. `.then((products) => { ... })` loops over each product and appends a card (`<div class='card'>...</div>`) into the products container.

The todos block below does the exact same thing but with the JSONPlaceholder API.

### Beginner exercise ideas

- Change the `<p>${product.price}</p>` to show the price in your local currency.
- Add `<p>${product.description}</p>` to each card.
- Limit the todos to the first 10 results (hint: `todos.slice(0, 10)`).
- Move the products fetch into its own function called `loadProducts()`.

---

## 8. How to Customize

### Change your name / brand
Open any HTML file and find:
```html
<h1 id="logo">AFRIXOLVE</h1>
```
Replace `AFRIXOLVE` with your own name or brand. Do this in all three HTML files to keep it consistent.

### Change your contact email
Search all files for `bayorwor.dev@gmail.com` and replace it with your email. It appears in:
- The `<header>` marquee (all 3 pages)
- The `mailto:` links in the nav and buttons (all 3 pages)

### Change the color scheme
Open `style.css`. The main brand color (`#D45D37` — orange) is used in:
- The `header` background
- The `footer` background
- Service item accents
- The hero section's dashed image border

Replace `#D45D37` everywhere with any hex color you like.

### Change the hero text
Open `index.html` and edit the `<section class="hero">` block:
```html
<h1>Beginners mentor with over <span>7years</span> in web development</h1>
<p>Your description here...</p>
```

### Change your location
In `index.html`, find:
```html
<p>Tumu, Upper West Region, Ghana</p>
```
Replace with your own location.

---

## 9. Adding a New Page

Follow these steps to add a fourth page (e.g., a Contact page):

**Step 1** — Copy an existing page as your starting template:
```
about-me.html  →  copy and rename to  contact.html
```

**Step 2** — Update the `<title>` tag in `contact.html`:
```html
<title>Contact | AFRIXOLVE</title>
```

**Step 3** — Replace the `<main>` content with your new content.

**Step 4** — Add a nav link to the new page in **all existing HTML files** (`index.html`, `about-me.html`, `product.html`, and `contact.html` itself). Find the `<ul>` in the `<nav>` and add:
```html
<li><a href="contact.html">Contact</a></li>
```

**Step 5** — Open `index.html` in your browser and verify the new link appears and navigates correctly.

---

## 10. Working with Images

All images are stored in the `images/` folder.

### To add a new image:
1. Copy your image file into the `images/` folder.
2. Reference it in HTML like this:
   ```html
   <img src="./images/your-image-name.jpg" alt="Description of image">
   ```
   The `./` means "start from the same folder as this HTML file."

### Supported formats:
`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`

### Tips:
- Keep file names short, lowercase, and without spaces (use hyphens instead): `my-photo.jpg` not `My Photo.jpg`
- Compress large images before adding them to keep the site fast. A free tool: [squoosh.app](https://squoosh.app/)
- Always fill in the `alt` attribute — it helps with accessibility and SEO.

---

## 11. Common Problems & Fixes

**"The product and todo lists don't show up on the home page."**
Open your browser's DevTools (`F12` or right-click → *Inspect*) and check the **Console** tab.
- If you see a network error, you're offline or the API is down — try again later.
- If you see `Cannot read properties of null (reading 'innerHTML')`, the `id="products"` or `id="todos"` element is missing or misspelled in `index.html`.

**"My images aren't loading when I double-click `index.html`."**
Some browsers block local images when opened with the `file://` protocol. Use the Live Server method (Option B above) to serve the site over `http://`, which fixes this.

**"My changes to the CSS aren't showing up."**
Hard-refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac). Browsers cache stylesheets aggressively.

**"The nav looks broken on a small screen."**
This site isn't fully mobile-responsive yet — that's a great next exercise! Add a `@media (max-width: 768px)` block to `style.css` and use it to stack the nav vertically.
