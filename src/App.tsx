import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home/HomePage";
import Usa from "./pages/Usa/Usa";
import Australia from "./pages/Australia/Australia";
import Europe from "./pages/Europe/Europe";
import VisaApplication from "./pages/UnitedKingdom/VisaApplication";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [initialFadeOut, setInitialFadeOut] = useState(false);
  const [navFadeOut, setNavFadeOut] = useState(false);

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        setInitialFadeOut(false);
      }, 300); // Match fadeOut animation duration
    }, 1000); // Show loading screen for at least 1s on initial load

    return () => clearTimeout(timer);
  }, []);

  // Handle navigation between routes
  useEffect(() => {
    // Don't show loading screen on initial load
    if (loading) return;

    setIsNavigating(true);
    setNavFadeOut(false);
    const timer = setTimeout(() => {
      setNavFadeOut(true);
      setTimeout(() => {
        setIsNavigating(false);
        setNavFadeOut(false);
      }, 300); // Match fadeOut animation duration
    }, 400); // Show loading screen for 400ms during navigation

    return () => clearTimeout(timer);
  }, [location.pathname, loading]);

  if (loading) {
    return <LoadingScreen message="Loading" fadeOut={initialFadeOut} />;
  }

  return (
    <>
      {isNavigating && <LoadingScreen message="Loading" fadeOut={navFadeOut} />}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usa" element={<Usa />} />
        <Route path="/aus" element={<Australia />} />
        <Route path="/eu" element={<Europe />} />
        <Route path="/uk" element={<VisaApplication />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

