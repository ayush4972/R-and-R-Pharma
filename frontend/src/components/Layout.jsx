import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change for a clean page transition.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      {/* pt-16 clears the fixed 64px header */}
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
