import React, { useState, useEffect } from "react";
import "../styles.css";

const technologies = [
  "Aptitude",
  "Verbal Reasoning",
  "Soft Skills",
  "Life Skills",
  "Business Communication",
  "Finance",
  "Marketing",
  "Insurance",
  "Banking",
  "Mechanical Tech",
];

function Hero() {
  const [techIndex, setTechIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isAdding, setIsAdding] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWaiting) {
        if (isAdding) {
          setDisplayText((prevText) =>
            technologies[techIndex].slice(0, prevText.length + 1)
          );
          if (displayText.length === technologies[techIndex].length) {
            setIsAdding(false);
            setIsWaiting(true);
            setTimeout(() => {
              setIsWaiting(false);
            }, 1000);
          }
        } else {
          setDisplayText((prevText) => prevText.slice(0, prevText.length - 1));
          if (displayText.length === 0) {
            setIsAdding(true);
            setTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
          }
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [displayText, isAdding, isWaiting, techIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const social = [
    {
      logo: "logo-instagram",
      link: "https://www.instagram.com/global_x_god?igshid=YmMyMTA2M2Y%3D",
    },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/thameem-ahamed-ahamed-h-658727240/",
    },
    {
      logo: "logo-twitter",
      link:
        "https://twitter.com/i/flow/login?redirect_after_login=%2Fthameemahamed96",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        {isMobileView ? (
          <img
            src="/src/assets/images/Ahamed2.png"
            alt=""
            className="md:w-11/12 h-full object-cover"
          />
        ) : (
          <img
            src="/src/assets/images/Ahamed.png"
            alt=""
            className="md:w-11/12 h-full object-cover"
          />
        )}
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="md:text-6xl text-4xl text-black">
              Hello!
              <br />
            </span>
            <div className="flex">
              <span className="text-gray-400">My Name is </span>
              <div className="dance-animation ">
                <h1 className="pl-3 dance-letter-1">A</h1>
                <h1 className="dance-letter-2">h</h1>
                <h1 className="dance-letter-3">a</h1>
                <h1 className="dance-letter-4">m</h1>
                <h1 className="dance-letter-5">e</h1>
                <h1 className="dance-letter-6">d</h1>
              </div>
            </div>
          </h1>
          <h4 className="md:text-4xl text-2xl md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            {displayText} Trainer
          </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>
            Contact me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social.map((icon, i) => (
              <div
                key={i}
                className="text-gray-600 hover:text-white cursor-pointer"
                onClick={() => window.open(icon.link, "_blank")}
              >
                <ion-icon name={icon.logo}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
