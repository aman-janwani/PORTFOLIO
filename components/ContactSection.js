import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const ContactSection = () => {
  return (
    <div className="mt-20" id="contactsection">
      <div className="w-full flex justify-center mb-20">
        <h1 className="uppercase font-UbuntuMono text-5xl text-orange-500">
          Contact Me
        </h1>
      </div>
      <div className="bg-orange-500 m-5 p-5 rounded-3xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <a
          href="https://www.linkedin.com/in/aman-janwani-8bab591bb/"
          className="flex p-3 rounded-2xl items-center uppercase text-md font-semibold text-white border-2 border-amber-400 hover:bg-amber-400 hover:text-white"
        >
          <AiFillLinkedin className="text-4xl te mr-2" />
          Linkedin
        </a>
        <a
          href="https://github.com/aman-janwani"
          className="flex p-3 rounded-2xl items-center uppercase text-md font-semibold text-white border-2 border-amber-400 hover:bg-amber-400 hover:text-white"
        >
          <AiFillGithub className="text-4xl mr-2" />
          Github
        </a>
        <a
          href="https://www.instagram.com/amanjanwani.codes/"
          className="flex p-3 rounded-2xl items-center uppercase text-md font-semibold text-white border-2 border-amber-400 hover:bg-amber-400 hover:text-white"
        >
          <AiFillInstagram className="text-4xl te mr-2" />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/aman.janwani.940/"
          className="flex p-3 rounded-2xl items-center uppercase text-md font-semibold text-white border-2 border-amber-400 hover:bg-amber-400 hover:text-white"
        >
          <AiFillFacebook className="text-4xl te mr-2" />
          Facebook
        </a>
        <a
          href="mailto:amanjanwani1486@gmail.com"
          className="flex p-3 rounded-2xl items-center uppercase text-md font-semibold text-white border-2 border-amber-400 hover:bg-amber-400 hover:text-white"
        >
          <AiFillMail className="text-4xl mr-2" />
          Email
        </a>
        <a
          href="tel:+917879599816"
          className="flex p-3 rounded-2xl items-center uppercase text-md font-semibold text-white border-2 border-amber-400 hover:bg-amber-400 hover:text-white"
        >
          <BiPhoneCall className="text-4xl te mr-2" />
          Phone
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
