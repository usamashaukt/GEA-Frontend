import { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Banner from "./components/Banner";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Nav />
        <Banner />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
    </>
  );
}

export default App;
