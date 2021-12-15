import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="mb-28" id="aboutsection">
      <div className="w-full flex justify-center">
        <h1 className="uppercase font-UbuntuMono text-5xl text-orange-500">
          About
        </h1>
      </div>
      <div className="sm:flex">
        <div className="hidden sm:block bg-amber-400 grow mt-10 w-[500px] h-[600px] rounded-tl-[1000px] rounded-tr-[400px] rounded-bl-[300px] rounded-br-[600px] relative">
          <div className="absolute top-48 md:-right-40">
            <Image
              src={
                "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639467824/undraw_profile_re_4a55_cuooyn.svg"
              }
              height={400}
              width={710}
            />
          </div>
        </div>
        <div className="lg:w-[600px] mt-16 sm:mt-52 md:ml-40">
          <h1 className="uppercase font-UbuntuMono text-xl sm:text-3xl p-5 text-orange-500 text-left">
            I'm A 15-year-old Front-end web developer. I have been coding for
            over 1 year now. Currently I'm Studying in Class 10th. & I also love
            to make graphics & prototypes. I have a passion for learning new
            things. I'm a self-motivated person.
          </h1>
        </div>
        <div className="sm:hidden bg-amber-400 grow mt-12 w-[400px] h-[350px] rounded-tl-[1000px] rounded-tr-[400px] rounded-bl-[300px] rounded-br-[600px] relative">
          <div className="absolute top-24">
            <Image
              src={
                "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639467824/undraw_profile_re_4a55_cuooyn.svg"
              }
              height={200}
              width={355}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
// w-[600px] h-[700px]
