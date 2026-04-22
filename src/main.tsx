import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("#root element not found");

// Strip trailing slash so react-router's basename matches Vite's BASE_URL.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
