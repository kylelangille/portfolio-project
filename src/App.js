import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/Styles/GlobalStyles";
import { darkTheme, lightTheme } from "./components/Styles/Themes";
import Header from "./components/Sections/Header";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";

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
