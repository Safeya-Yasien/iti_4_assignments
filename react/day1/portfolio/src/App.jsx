import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      <Footer />
    </>
  );
}

export default App;
