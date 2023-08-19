import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
