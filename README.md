# Data Analyst Portfolio

A modern portfolio website for a data analyst, built with Next.js, React, TailwindCSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site locally.

## Personalization

Update the placeholder name, contact links, metrics, projects, and skills in `app/page.tsx`.

For production SEO, set `NEXT_PUBLIC_SITE_URL` to your deployed domain.

## Deploying to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the `main` branch.

The workflow automatically handles both repository sites like `username.github.io/portfolio-repo` and user sites like `username.github.io`.

## EmailJS

The contact form uses EmailJS. Add these variables in `.env.local` and in Vercel:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the generated `/resume.pdf` route with your final resume PDF before applying to roles.
