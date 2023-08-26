import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { darkTheme, lightTheme } from "./components/UI/Themes";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [animationStarted, setAnimationStarted] = useState(false);

  const themeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 200);

    return () => clearTimeout(animationTimeout);
  }, [animationStarted]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header onClick={themeHandler} />
        <Hero animationStarted={animationStarted} theme={theme} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
