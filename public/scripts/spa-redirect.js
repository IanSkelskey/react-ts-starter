// GitHub Pages SPA redirect trick (canonical spa-github-pages approach).
// Encodes the full path into the query string so GitHub serves index.html,
// then index.html restores the real URL before React Router boots.
// https://github.com/rafgraph/spa-github-pages
const pathSegmentsToKeep = 0; // 0 for root domain, 1 for project pages (e.g. /repo-name/)
const l = window.location;
l.replace(
  l.protocol +
    "//" +
    l.hostname +
    (l.port ? ":" + l.port : "") +
    l.pathname
      .split("/")
      .slice(0, 1 + pathSegmentsToKeep)
      .join("/") +
    "/?/" +
    l.pathname.slice(1).split("/").slice(pathSegmentsToKeep).join("/").replace(/&/g, "~and~") +
    (l.search ? "&" + l.search.slice(1).replace(/&/g, "~and~") : "") +
    l.hash,
);
