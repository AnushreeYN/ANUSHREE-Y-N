# Anushree Y N Portfolio

Modern responsive developer portfolio for Anushree Y N, focused mainly on Backend Development with strong interest in AI/ML, OCR automation, FastAPI, Python, SQLAlchemy, REST APIs, and scalable systems.

## Live Preview Locally

This is a static website built with HTML, CSS, and JavaScript. No build step is required.

### Requirements

- A web browser such as Chrome, Edge, or Firefox
- Python installed on your system

Check Python:

```powershell
python --version
```

## How To Run

Open PowerShell or the VS Code terminal in this project folder:

```powershell
cd "C:\Users\Admin\OneDrive\Desktop\ANUSHREE-Y-N"
```

Start a local server:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open this URL in your browser:

```text
http://127.0.0.1:8000
```

To stop the server, press:

```text
Ctrl + C
```

If port `8000` is already busy, run:

```powershell
python -m http.server 8001 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8001
```

## Project Structure

```text
ANUSHREE-Y-N/
+-- index.html              Main website content
+-- style.css               Complete responsive styling
+-- script.js               Theme toggle, typing effect, filters, form validation
+-- README.md               Project documentation
+-- Anushree Y N.pdf        Resume file used by download buttons
+-- image/
    +-- girl.png            Main profile image
    +-- girls.jpg           Additional profile image
```

## Main Features

- Responsive portfolio layout for desktop, tablet, and mobile
- Sticky navigation bar
- Mobile hamburger menu
- Active section highlighting while scrolling
- Smooth scrolling
- Light and dark mode toggle
- Animated typing effect in the hero section
- Project filtering by technology
- Contact form validation
- Resume download button
- Back-to-top button
- Social and contact links
- SEO-friendly meta tags
- Accessible semantic HTML structure

## Sections Included

- Hero
- About
- Skills
- Experience
- Projects
- Certifications
- Achievements
- Contact
- Footer

## Portfolio Focus

The portfolio positions Anushree Y N mainly for:

- Backend Developer roles
- Python Developer roles
- FastAPI Developer roles
- API Engineering roles
- Backend roles involving AI/ML workflows
- OCR automation and document-processing related work

AI/ML is included as a strong supporting area, while backend development remains the main focus.

## Project Notes

Some work mentioned in the portfolio is not available in the public GitHub account. Those cards are marked as:

```text
Not on GitHub
```

This avoids broken or misleading repository links while still showing the experience.

Public GitHub projects should link only to real repositories in the GitHub account.

## How To Edit Content

### Update Name, Role, About, Experience, Projects

Edit:

```text
index.html
```

### Update Colors, Layout, Spacing, Responsive Design

Edit:

```text
style.css
```

### Update Typing Animation, Theme Toggle, Filters, Contact Form

Edit:

```text
script.js
```

### Update Resume

Replace the existing resume PDF:

```text
Anushree Y N.pdf
```

If the filename changes, update the resume links in `index.html`.

Search for:

```html
href="Anushree Y N.pdf"
```

Then replace it with the new filename.

## Contact Form Behavior

The contact form validates:

- Name
- Email
- Subject
- Message

After valid submission, it opens the user's email app using a `mailto:` link. No backend server is required.

To change the receiving email address, edit `script.js` and `index.html`.

Current email:

```text
aanusree494@gmail.com
```

## Deployment Options

Because this is a static website, it can be deployed easily on:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### GitHub Pages Deployment

1. Push the code to a GitHub repository.
2. Go to repository `Settings`.
3. Open `Pages`.
4. Select branch `main`.
5. Select root folder `/`.
6. Save.
7. GitHub will provide a live portfolio URL.

## Quick Test Checklist

Before sharing the portfolio, verify:

- Navigation links scroll to the correct sections
- Resume download works
- Theme toggle works
- Project filters work
- Contact form validation works
- GitHub links open real repositories
- Profile image loads correctly
- Mobile menu opens and closes
- Layout looks good on mobile and desktop
- No project has a fake or broken link

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Font Awesome icons
- Python local server for development preview

## Author

Anushree Y N

- GitHub: [AnushreeYN](https://github.com/AnushreeYN)
- LinkedIn: [Anushree Y N](https://www.linkedin.com/in/anushree-y-n-181253209)
- Email: [aanusree494@gmail.com](mailto:aanusree494@gmail.com)
