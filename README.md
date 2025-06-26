A modern frontend implementation of the Supreme Group website using **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Project Setup

1. **Clone the repository**
```bash
git clone https://github.com/rahul-prajapati9981/supreme.git
cd supreme

Install dependencies
2. npm install

Run the development server
3. npm run dev

Open your browser and navigate to:
4. http://localhost:3000

5. 🧩 Component Architecture
components/

Navbar.tsx: Sticky top navigation with responsive logo.

Hero.tsx: Intro video section with headline overlay.

VehicleSwitcher.tsx: Section for switching between Passenger/Commercial vehicle videos.

ContactSection.tsx: Contact form and contact info grid.

Footer.tsx: Multi-column footer with links.

pages/

index.tsx: Main entry point combining all sections.

public/

Contains static assets like images and videos.

6. 📱 Responsive Design Strategy
Tailwind CSS utility classes (e.g. md:, lg:, 2xl:) were used extensively to:

Stack elements vertically on mobile.

Display grid/flex columns on tablet and desktop.

Dynamically adjust spacing, padding, and typography.

7. ⚡ Performance Optimizations
Next/Image for optimized image loading.

Lazy-loaded video switcher to improve initial load.

Minimal external packages to reduce bundle size.

Tailwind’s JIT mode ensures unused styles are purged.

8. ♿ Accessibility Considerations
Semantic HTML: Used section, header, form, button, input, and textarea tags.

alt text for all images.

Sufficient color contrast and focus states.

Keyboard-friendly interactive elements.

9. 📦 Third-party Libraries Used
Next.js – React framework with SSR support.

Tailwind CSS – Utility-first CSS framework.

TypeScript – Static type checking.

10. 🤔 Assumptions & Decisions
Video files and logos were pre-supplied in the /public folder.

Placeholder data used for forms and links.

Default layout structured using container-based widths.

Focused on frontend UI only (no backend integration).

11. 🧱 Challenges & Solutions
Challenge	Solution
Tailwind not applying styles	Ensured content paths in tailwind.config.ts were correct.
Video switcher interactivity	Used useState to manage the dynamic video source.
Image alignment in navbar	Used margins and Flexbox utilities properly.

12. 🚧 Upcoming Features
Form submission with email backend/API.

Animations for transitions (e.g. Framer Motion).

CMS integration (e.g. Contentful or Sanity).

Dynamic page routing (e.g. /applications/[type]).

Unit tests using Jest and React Testing Library.
