import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.jpeg";
import project2 from "../assets/images/project-2.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.jpg";
import project8 from "../assets/images/project-8.jpg";
import project_person from "../assets/images/man1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "HITAKEY Infosys-15 days",
    },
    {
      img: project2,
      name: "SPACE Reader",
    },
    {
      img: project4,
      name: "HITAKEY Infosys-10 days",
    },
    {
      img: project5,
      name: "SPACE READER_ 15 Days Project Tanjore",
    },
    {
      img: project6,
      name: "HITAKEY Infosys",
    },
    {
      img: project7,
      name: "TATI 20 days Project",
    },
    {
      img: project8,
      name: "Space Reader",
    },
   
  ];
  return (
    <section id="projects" className="mt-10 pt-24 bg-gray-400 py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-gray-600">Coaching</span>
        </h3>
        <p className="text-gray-500 mt-3 text-lg">My trainings</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="lg:block hidden" style={{ marginTop: '-80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img src={project_person} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
</div>


      </div>
    </section>
  );
};

export default Project;
