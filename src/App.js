import { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 200);

    return () => clearTimeout(animationTimeout);
  }, [animationStarted]);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero animationStarted={animationStarted} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
