import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";

const HeroSection = () => {
  return (
    <div className="ml-2 sm:ml-5 sm:flex mb-24" id="herosection">
      <div className="grow mt-12 sm:mt-24">
        <h1 className="uppercase text-3xl sm:text-4xl lg:text-6xl mb-11 sm:mb-20 font-RobotoMono text-amber-400">
          Hey,I'm Aman Janwani
        </h1>
        <h1 className="uppercase text-xl sm:text-2xl leading-8 w-3/4 font-semibold font-RobotoMono text-amber-400">
          I'm a Front-end web developer, I eat, sleep and breathe React.
        </h1>
      </div>
      <div className="hidden sm:block bg-orange-500 w-[410px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[600px] 2xl:w-[900px] 2xl:h-[1000px] rounded-tl-[1000px] rounded-tr-[200px] rounded-bl-[500px] rounded-br-[200px] p-16 sm:p-11 md:p-6 2xl:p-30 mr-0">
        <Image
          src={
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639398172/profilepic2_2_1_l6iu0d.png"
          }
          height={250}
          width={250}
          alt="profilepic"
        />
      </div>
      <div className="sm:hidden bg-orange-500 w-[400px] h-[350px] rounded-tl-[1000px] rounded-tr-[200px] rounded-bl-[500px] rounded-br-[200px] p-6 mr-0">
        <Image
          src={
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639398172/profilepic2_2_1_l6iu0d.png"
          }
          height={180}
          width={180}
          alt="profilepic"
        />
      </div>
    </div>
  );
};

export default HeroSection;
