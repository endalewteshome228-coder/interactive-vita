# Personal Portfolio Website Plan

Build a comprehensive, responsive personal portfolio website for Haymanot Wondmagegn using React, Vite, and Tailwind CSS. The site will feature multiple sections including Home, About, Skills, Education, Experience, Projects, Certifications, Achievements, Resume, and Contact.

## Scope Summary
- **Single Page Application (SPA)** with smooth scrolling or discrete routes (using `react-router-dom`).
- **Responsive Design:** Optimized for Desktop, Laptop, Tablet, and Mobile.
- **Key Sections:** Home (Hero), About, Skills (Technical & Soft), Education, Experience, Projects (at least 3), Certifications, Achievements, Resume (Download + Preview), Contact (Form + Info).
- **Tech Stack:** React, Tailwind CSS, Lucide React (icons), Framer Motion (animations).
- **Data Persistence:** None (Static/Local UI only). Contact form will be a frontend-only simulation or integrated with a service like Formspree if requested later (standard local validation for now).

## Assumptions and Open Questions
- **Images:** Placeholder images will be used for the professional photo and project screenshots.
- **Resume:** A placeholder PDF link/file will be used for the "Download CV" button.
- **Navigation:** A sticky header with anchor links for smooth scrolling is preferred for single-page feel, but `react-router-dom` can be used if multi-page is desired. We'll stick to a high-quality single-page scrollable layout for modern portfolio feel.

## Affected Areas
- `src/App.tsx`: Main entry and layout.
- `src/components/`: New folder for section-based components (Hero, About, Skills, etc.).
- `src/constants/`: Data file for portfolio content (projects, experience, education).
- `src/index.css`: Tailwind configuration and global styles.

## Ordered Phases

### Phase 1: Setup and Content Definition
- Initialize routing and global layout.
- Create a `src/data/portfolio.ts` to store all static text content (Biography, Skills, Experience, Projects) to keep components clean.
- **Owner:** frontend_engineer

### Phase 2: Core Components & Hero
- Build the `Header/Navbar` (responsive mobile menu).
- Build the `Hero` (Home) section with name, title, and CTA buttons.
- **Owner:** frontend_engineer

### Phase 3: Profile Sections
- Build `About`, `Skills` (with progress bars), `Education`, and `Experience`.
- Ensure responsive grid layouts for education and experience items.
- **Owner:** frontend_engineer

### Phase 4: Showcase Sections
- Build `Projects` section with cards including tags and links.
- Build `Certifications` and `Achievements`.
- Build `Resume` section with preview/download logic.
- **Owner:** frontend_engineer

### Phase 5: Interaction & Footer
- Build `Contact` section with a validated form and social links.
- Build `Footer`.
- Add `Framer Motion` for scroll animations.
- **Owner:** frontend_engineer

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Implementation of the entire portfolio structure and UI.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1-5
- **Scope:** Create a complete personal portfolio based on the user request.
- **Tasks:**
  - Install dependencies: `bun add lucide-react framer-motion react-router-dom`.
  - Create a central data file for all portfolio content.
  - Implement a sticky navigation bar with smooth scroll links.
  - Build responsive sections for Home, About, Skills, Education, Experience, Projects, Certifications, Achievements, Resume, and Contact.
  - Use `src/components/ui` components where appropriate (Buttons, Cards, Inputs).
  - Ensure the "Download CV" button is functional (even if linking to a dummy blob).
  - Add simple form validation for the contact section.
- **Files:**
  - `src/App.tsx`
  - `src/components/Header.tsx`
  - `src/components/Hero.tsx`
  - `src/components/About.tsx`
  - `...` (other sections)
  - `src/data/portfolio.ts`
- **Depends on:** none
- **Acceptance criteria:**
  - Responsive on mobile/desktop.
  - All 12+ sections requested are present.
  - Clean UI/UX using Tailwind.
  - Working navigation and scroll behavior.
