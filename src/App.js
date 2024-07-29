import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Slide from "./components/Slide";

// import { useState, useEffect } from "react";
// import RingLoader from "react-spinners/RingLoader";
// import Tothetop from "./components/Tothetop";

function App() {
  // const [loading, setLoading] = useState(false);
  // const color = "#334155";
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);
  // }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Slide />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
