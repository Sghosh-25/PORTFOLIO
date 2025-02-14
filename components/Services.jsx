import React from "react";
import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import {
  CardContent,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const serviceData = [
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis nam delectus iusto, quibusdam illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis nam delectus iusto, quibusdam illum.",
  },
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis nam delectus iusto, quibusdam illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis nam delectus iusto, quibusdam illum.",
  },

  //   {
  //     icon: <Gem size={72} strokeWidth={0.8} />,
  //     title: "Web Development",
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis nam delectus iusto, quibusdam illum.",
  //   },
];

export const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto ">
          My Services
        </h2>
        {/* grid items */}
        <div className="flex flex-wrap justify-center items-center w-full gap-y-12 xl:gap-y-24 xl:gap-x-8 ">
          {serviceData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[624px] h-[380px] xl:h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative "
                key={index}
              >
                <CardHeader className=" text-primary absolute -top-[60px] ">
                  <div className="w-[140px] h-[80px] bg-orange-100 rounded-xl dark:bg-background flex justify-center items-center ">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
