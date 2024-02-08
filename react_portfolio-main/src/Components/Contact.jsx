import React, { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw-qcwZcZOoxmR_rOqww4B1AgxjCXqTKp5bO9f3fABpfxeV8o3cKAXwhnQMM9PErtvU/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thank you! Your form is submitted successfully.!",
          customClass: {
            popup: "bw",
          },
        });

        formRef.current.reset();
      } else {
        console.error("Error!", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  const contact_info = [
    { logo: "mail", text: "ahamedthameem813@gmai1.com" },
    { logo: "logo-whatsapp", text: "+919600411232" },
  ];
  return (
    <section
      id="contact"
      className="py-10 bg-gray-500 mt-10 md:rounded-10 px-3 text-white"
    >
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-gray-900">Me</span>
        </h3>
        <p className="text-gray-300 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={formRef}
            className="flex flex-col flex-1 gap-5"
            method="post"
            onSubmit={handleSubmit}
            autocomplete="off"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="inputc"
            />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Your Number"
              className="inputc"
            />
            <input
              type="Email"
              name="mail"
              id="mail"
              placeholder="Your Email Address"
              className="inputc"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              id="message"
              rows={10}
              className="inputc"
            ></textarea>
            <div className="flex">
              <button className="btn-primary w-fit">Send Message</button>
            </div>
          </form>
          <div>
            <div className="flex md:flex-col md:gap-7 ">
              {contact_info.map((contact, i) => (
                <div
                  key={i}
                  className="flex justify-center
                  text-left gap-4 flex-wrap items-center"
                  onClick={() => {
                    if (contact.logo == "logo-whatsapp") {
                      const urlToOpen =
                        "https://api.whatsapp.com/send/?phone=919600411232&text&type=phone_number&app_absent=0";
                      window.open(urlToOpen, "_blank");
                    } else {
                      window.location.href =
                        "mailto:ahamedthameem813@gmai1.com?subject=Welcome&body=Glad to Contact you";
                    }
                  }}
                >
                  <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-gray-600 rounded-full">
                    <ion-icon name={contact.logo}></ion-icon>
                  </div>
                  <p className="md:text-base text-sm  break-words">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118645.18634262164!2d78.80142687375368!3d11.3142276462262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab140028c76a4b%3A0x9b37206db27e6587!2sMillath%20nagar%20bus%20station!5e0!3m2!1sen!2sin!4v1705924360089!5m2!1sen!2sin"
                width="300"
                height="300"
                className="mt-5"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
