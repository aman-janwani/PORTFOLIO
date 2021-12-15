import Image from "next/image";
import React from "react";

const SkillsSection = () => {
  return (
    <div>
      <div className="w-full flex justify-center" id="skillssection">
        <h1 className="uppercase font-UbuntuMono text-5xl text-amber-400">
          My Skills
        </h1>
      </div>
      <div className="bg-orange-500 m-5 p-10 grid grid-cols-4 sm:grid-cols-7 gap-3 rounded-3xl mt-20">
        <div className="hover:animate-bounce">
          <Image
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639482052/4_hzuztr.png"
            }
            height={100}
            width={100}
            alt="skill"
          />
        </div>
        <div className="hover:animate-bounce">
          <Image
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639482052/2_owbdep.png"
            }
            height={100}
            width={100}
            alt="skill"
          />
        </div>
        <div className="hover:animate-bounce">
          <Image
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639482052/3_hd3exp.png"
            }
            height={100}
            width={100}
            alt="skill"
          />
        </div>
        <div className="hover:animate-bounce">
          <Image
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639482052/6_mpuvt8.png"
            }
            height={100}
            width={100}
            alt="skill"
          />
        </div>
        <div className="hover:animate-bounce">
          <Image
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639482052/1_gvng7r.png"
            }
            height={100}
            width={100}
            alt="skill"
          />
        </div>
        <div className="hover:animate-bounce">
          <Image
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639482052/5_zmidip.png"
            }
            height={100}
            width={100}
            alt="skill"
          />
        </div>
        <div className="hover:animate-bounce">
          <Image
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639482250/a_op8KnL_400x400-removebg-preview_o8o2jk.png"
            }
            height={100}
            width={100}
            alt="skill"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
