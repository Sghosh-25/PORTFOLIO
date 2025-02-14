"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";
import React from "react";

export const Form = () => {
  return (
    <form className="flex flex-col gap-y-4" >
      {/* name input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6 " size={20} />
      </div>
      {/* email input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6 " size={20} />
      </div>{" "}
      {/* input text */}
      <div className="relative flex items-center">
        <Textarea  placeholder="Type Your Message Here ..." />
        <MessagesSquare className="absolute top-4 right-6 " size={20} />
      </div>
      <Button className='flex items-center max-w-[166px] ' >
        Submit
      </Button>
    </form>
  );
};
