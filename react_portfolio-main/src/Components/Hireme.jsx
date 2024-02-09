import React from "react";
import hireMe from "../assets/images/hero.png";

function Hireme() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="section"
      className="bg-gray-200 md:rounded-full py-10 px-3 text-white"
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-gray-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Do <span className="text-gray-600 font-bold text-xl">You</span> wanna
          crack any exams?
        </p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center ">
        <div>
          <h2 className="text-2xl font-semibold">
            Do <span className="text-gray-900 font-bold text-3xl"></span>{" "}
            Your College Students need to be trained by me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Assistant Professor with 3 years at SAPC and APC College,
            specializing in Mech-Tech training, Business Aptitude, and Soft
            Skills. Nationally acclaimed trainer, impacting 95k+ students across
            PAN India. Recognized as Best Freelancer by Terns Pvt Ltd. Proven
            track record in Business Communication, Motivation, Insurance,
            Banking, and Marketing. Committed to academic excellence and
            equipping students with essential life skills. Eager to contribute
            expertise to future endeavors..
          </p>
          <button className="btn-primary mt-10" onClick={scrollToContact}>
            Say Hello{" "}
          </button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 lg:-right-10 right- ml-20 object-cover "
        />
      </div>
    </section>
  );
}

export default Hireme;
