import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";
import Layout from "./components/layout/Layout";
import RouteFallback from "./components/RouteFallback";
import HomePage from "./pages/HomePage";

// Lazy-load non-critical routes. Keep the home/landing route eager.
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<RouteFallback />} key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
