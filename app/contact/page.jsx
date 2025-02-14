import React from "react";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import { Form } from "@/components/Form";
const Contact = () => {
  return (
    <section className="container mx-auto ">
      {/* text and illustraition */}
      <div className=" grid xl:grid-cols-2 pt-12 xl:h-[480px] xl:mb-24 ">
        {/* text */}
        <div className="flex flex-col justify-center ">
          <div className=" flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary "> </span>
            Say hello 👋
          </div>
          <h1 className=" h1 max-w-md mb-8">Let's Work Together</h1>
          <p className=" subtitle max-w-[400px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* illustraition */}
        <div className=" hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-no-repeat bg-top "></div>
      </div>
      {/* info text & form */}
      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
        {/* info text */}
        <div className=" flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg ">
          {" "}
          <div className="flex items-center gap-x-8">
            {/* mail */}
            <MailIcon size={18} className="text-primary" />
            <div>shohanghosh3@gmail.com</div>
          </div>
          <div className="flex items-center gap-x-8">
            {/* phone */}
            <PhoneCall size={18} className="text-primary" />
            <div>+91 7890362708</div>
          </div>
          <div className="flex items-center gap-x-8">
            {/* home */}
            <HomeIcon size={18} className="text-primary" />
            <div>
              Mohisgote 1st Lane, Krishnapur, New Town, Kolkata - 700102{" "}
            </div>
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
