# ashborn013.github.io

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

**A clean, minimalist personal space for cybersecurity research, CTF writeups, and software development notes.**

[Live Site](https://ashborn013.github.io) • [Report Bug](https://github.com/ashborn013/ashborn013.github.io/issues)

</div>

---

## 🛠️ Tech Stack
This blog is built using modern static web technologies:
* **Framework:** [Next.js](https://nextjs.org/) (App Router, Static HTML Export)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Hosting:** [GitHub Pages](https://pages.github.com/)
* **CI/CD:** [GitHub Actions](https://github.com/features/actions)

---

## 📂 Project Structure
```text
ashborn013.github.io/
├── .github/workflows/   # GitHub Actions automated deployment pipelines
├── public/              # Static assets and icons
├── src/
│   └── app/            # Next.js App Router (Layouts & Pages)
│       ├── globals.css  # Global Tailwind styles & customization variables
│       ├── layout.tsx   # Root layout configuration (Fonts, Metadata)
│       └── page.tsx     # Landing page (Under Construction)
├── next.config.ts       # Next.js configurations (Static export setup)
└── tsconfig.json        # TypeScript configuration options
```

---

## 🚀 Getting Started

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the repository
```bash
git clone https://github.com/ashborn013/ashborn013.github.io.git
cd ashborn013.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build and export statically
```bash
npm run build
```
The static HTML export will be generated in the `/out` directory.

---

## ⚙️ Deployment
This project is configured with a automated GitHub Actions workflow to build and deploy to GitHub Pages on every push to the `main` branch. 

The configuration resides in `.github/workflows/nextjs.yml` and utilizes Next.js's static HTML export mode.
