import React, { useState, useEffect } from "react";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Hireme from "./Components/Hireme";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Bot from "./Components/Bot";
import Cursor from "./Components/Cursor";
import { Hourglass } from "react-loader-spinner";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="app-container">
      <div className={`loading-overlay ${isLoading ? "visible" : "hidden"}`}>
        <Hourglass
          visible={true}
          height={80}
          width={80}
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#3e3f3f", "#9e9c9c"]}
        />
      </div>
      {!isLoading && (
        <>
          <Cursor />
          <Navbar />
          <Bot />
          <Hero />
          <About />
          <Skills />
          <Hireme />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;