import Nav from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Universities from "./pages/Universities/Universities";
import VisaApplication from "./pages/UnitedKingdom/VisaApplication";
import Australia from "./pages/Australia/Australia";
import Usa from "./pages/Usa/Usa";
import Europe from "./pages/Europe/Europe";
import WhatsApp from "./components/WhatsApp";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/aus" element={<Australia />} />
          <Route path="/usa" element={<Usa />} />
          <Route path="/eu" element={<Europe />} />
          <Route path="/uk" element={<VisaApplication />} />
        </Routes>
        <WhatsApp phoneNumber="+923394007202 " />
        <Footer />
      </div>
    </>
  );
}

export default App;
