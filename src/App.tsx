import Nav from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import WhatsApp from "./components/WhatsApp";
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./pages/Home/HomePage"));
const VisaApplication = lazy(() => import("./pages/UnitedKingdom/VisaApplication"));
const Australia = lazy(() => import("./pages/Australia/Australia"));
const Usa = lazy(() => import("./pages/Usa/Usa"));
const Europe = lazy(() => import("./pages/Europe/Europe"));

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  // Handle initial page load
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsInitialLoading(false);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Handle route navigation
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isInitialLoading && <LoadingScreen message="Welcome to HU Consultants" />}
      {isNavigating && !isInitialLoading && <LoadingScreen message="Loading page" />}
      <div style={{ display: isInitialLoading ? 'none' : 'block' }}>
        <Nav />
        <Suspense fallback={<LoadingScreen message="Loading content" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aus" element={<Australia />} />
            <Route path="/usa" element={<Usa />} />
            <Route path="/eu" element={<Europe />} />
            <Route path="/uk" element={<VisaApplication />} />
          </Routes>
        </Suspense>
        <WhatsApp phoneNumber="+923122496574 " />
        <Footer />
      </div>
    </>
  );
}

export default App;
