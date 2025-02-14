import React from 'react'
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
import Image from "next/image";

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
        role: "Web Development Intern",
        years: "Feb,2022 - June,2022 ",
      },
      {
        Company: "Code Visionary Studio",
        role: "Jr. Developer",
        years: "2024 - Present ",
      },
    ],
  },
];
const skillData = [
  {
    title: "skills",
    data: [
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
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
      {
        imgPath: '/about/figma.svg',
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
                    {/* languages  */}
                    <div className="flex flex-col gap-y-2 ">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Bengali, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3">My Awesome Journey</h3>
                    {/* experience and education  */}
                    <div className="grid md:grid-cols-2 gap-y-8 ">
                      <div className=" flex flex-col gap-y-6 ">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary ">
                          <Briefcase />
                          <h4 className="capitalize font-medium ">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className=" flex flex-col gap-y-8 ">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { Company, role, years } = item;
                              return (
                                <div
                                  className=" flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-3 ">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 "></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2 ">
                                      {Company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className=" text-base font-medium ">
                                      {" "}
                                      {years}{" "}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className=" flex flex-col gap-y-6 ">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary ">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium ">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className=" flex flex-col gap-y-8 ">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className=" flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-3 ">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500 "></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2 ">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className=" text-base font-medium ">
                                      {" "}
                                      {years}{" "}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills  */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-8">What I Use Everyday </h3>
                    <div className="mb-16">
                      <h4 className=" text-xl font-semibold mb-2 ">Skills</h4>
                      <div className=" border-b border-border mb-4 "></div>
                      {/* skil list  */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 "
                                key={index}
                              >
                                <div>
                                  <div className=" font-medium  ">{name}</div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools  */}
                    <div>
                      <h4 className=" text-xl font-semibold mb-2 ">Tools</h4>
                      <div className=" border-b border-border mb-4 "></div>
                      {/* Tool list  */}
                      <div className=" flex gap-x-8 justify-center xl:justify-start ">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_us;
