"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//components
import { ProjectCard } from "./ProjectCard";
// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt non mollitia, et quis porro. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nexa Website",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt non mollitia, et quis porro. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt non mollitia, et quis porro. ",
    link: "/",
    github: "/",
  },
];
export const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 ">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <Link href="/projects ">
            <Button className='mb-12' >All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className=" xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper
            className=" h-[480px]  "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 3 projects for the slides */}
            {projectData.slice(0,3).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
