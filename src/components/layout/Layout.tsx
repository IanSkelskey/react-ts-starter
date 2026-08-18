import type { PropsWithChildren } from "react";
import { NavLink } from "react-router";
import { APP_VERSION, BASE_PATH } from "../../config/env";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-medium ${isActive ? "text-accent" : "text-foreground hover:text-accent"}`;

/*
 * Vite copies `public/` verbatim and never rewrites paths pointing into it, so
 * the base has to be applied by hand. A literal "/icon.svg" 404s on a project
 * page, which is served from /<repo>/ rather than /.
 */
const iconUrl = `${BASE_PATH}icon.svg`;

/*
 * Marks live in `public/tech/` rather than inline, so the README and the app
 * render the same files. Each carries its own light/dark fills, so they are
 * plain <img> rather than inline SVG needing `currentColor`.
 */
const TECH = [
  { name: "React", file: "react.svg", href: "https://react.dev" },
  {
    name: "TypeScript",
    file: "typescript.svg",
    href: "https://www.typescriptlang.org/docs/",
  },
  { name: "Vite", file: "vite.svg", href: "https://vite.dev" },
  {
    name: "Tailwind CSS",
    file: "tailwindcss.svg",
    href: "https://tailwindcss.com/docs",
  },
];

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-full flex-col bg-surface text-foreground">
      <header className="border-b border-divider bg-raised">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            className="flex items-center gap-2 font-bold text-accent hover:text-accent-hover"
          >
            {/* Decorative — the link already names the app. */}
            <img src={iconUrl} alt="" aria-hidden width={24} height={24} />
            React TS Template
          </NavLink>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <NavLink to="/" end className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/demo" className={navLinkClass}>
                  Demo
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">{children}</main>
      <footer className="border-t border-divider bg-raised">
        <div className="mx-auto max-w-5xl px-6 py-4 text-center text-sm text-muted">
          {/*
            Labelled in visible text rather than by tooltip: `title` is
            unreachable by keyboard and absent on touch, so it is an affordance
            here, never the label. The marks are `alt=""` because the adjacent
            span already names the link.
          */}
          <ul
            aria-label="Built with"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {TECH.map(({ name, file, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${name} documentation`}
                  className="flex items-center gap-1.5 text-muted hover:text-accent"
                >
                  <img src={`${BASE_PATH}tech/${file}`} alt="" aria-hidden width={18} height={18} />
                  <span className="text-xs font-medium">{name}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Made with <span aria-label="love">❤️</span> by Ian Skelskey. &copy;{" "}
            {new Date().getFullYear()}
          </p>
          {/* A version string is readable content, not chrome — `text-muted`, not `text-faint`. */}
          <p className="mt-1 text-xs text-muted">v{APP_VERSION}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
