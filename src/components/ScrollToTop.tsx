// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     behavior: "instant";
//   }, [pathname]);

//   return null;
// }

import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const location = useLocation();

  const hash = useMemo(() => location.hash.replace("#", ""), [location.hash]);

  useEffect(() => {
    const scrollToHash = () => {
      if (!hash) return false;
      const element = document.getElementById(hash);
      if (!element) return false;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    if (location.hash) {
      if (scrollToHash()) {
        return;
      }
      const timer = window.setTimeout(scrollToHash, 100);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname, location.hash, hash]);

  return null;
}
