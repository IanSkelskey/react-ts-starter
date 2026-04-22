import type { PropsWithChildren } from "react";
import { NavLink } from "react-router";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-full flex-col bg-surface text-foreground">
      <header className="border-b border-divider bg-raised">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="font-bold text-accent hover:text-accent-hover">
            React TS Template
          </NavLink>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-medium ${isActive ? "text-accent" : "text-foreground hover:text-accent"}`
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">{children}</main>
      <footer className="border-t border-divider bg-raised">
        <div className="mx-auto max-w-5xl px-6 py-4 text-sm text-muted">
          Built with React, TypeScript, Vite, and Tailwind v4.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
