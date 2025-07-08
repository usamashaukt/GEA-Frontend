import Nav from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import WhatsApp from "./components/WhatsApp";

const Home = lazy(() => import("./pages/Home/HomePage"));
const VisaApplication = lazy(() => import("./pages/UnitedKingdom/VisaApplication"));
const Australia = lazy(() => import("./pages/Australia/Australia"));
const Usa = lazy(() => import("./pages/Usa/Usa"));
const Europe = lazy(() => import("./pages/Europe/Europe"));

function App() {
  return (
    <>
      <div>
        <Nav />
        <Suspense fallback={<div style={{textAlign: 'center', marginTop: '3rem'}}>Loading...</div>}>
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
