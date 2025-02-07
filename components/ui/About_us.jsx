// import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  User,
  University,
} from "lucide-react";
import DevImg from "./DevImg";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Shohan Ghosh",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 7890362708",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shohanghosh3@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 25 Nov, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Tech Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Mohisgote 1st Lane, Kolkata-700102",
  },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University of Engineering and Management",
        qualification: "Bachelors of Technology",
        years: "2020 - 2024",
      },
      {
        university: "Bidhan Nagar Govt. High School",
        qualification: "Class 12",
        years: "2020 ",
      },
      {
        university: "Bidhan Nagar Govt. High School",
        qualification: "Class 10",
        years: "2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        Company: "Edjustice Foundation",
        qualification: "Web Development Intern",
        years: "2022 ",
      },
      {
        Company: "Code Visionary Studio",
        qualification: "Jr. Developer",
        years: "2024 ",
      },
    ],
  },
];
const skillData = [
  {
    title: "skills",
    date: [
      {
        name: "HTML,CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript",
      },
    ],
  },
  {
    title: "tools",
    date: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
    ],
  },
];
const About_us = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  // console.log(getData(qualificationData,"experience"));
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row ">
          <div className="hidden xl:flex flex-1 relative ">
            {/* image */}
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative "
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className=" w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none ">
                <TabsTrigger className="w-[162px] xl:w-auto " value="personal">
                  Personal info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto "
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto " value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tab content */}
              <div className=" text-lg  mt-12 xl:mt-8 mx-auto">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-4 ">
                      Unmatched Service quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 ">
                      I Specialize in crafting intuitive websites with cutting
                      edge technology, delivering dynamic and engaging user
                      experiences.
                    </p>
                    {/* icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  Qualifications info
                </TabsContent>
                <TabsContent value="skills">Skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_us;
