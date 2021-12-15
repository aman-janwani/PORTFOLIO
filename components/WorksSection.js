import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

const WorksSection = () => {
  return (
    <div className="mt-20 mb-10" id="workssection">
      <div className="w-full flex justify-center mb-20">
        <h1 className="uppercase font-UbuntuMono text-5xl text-orange-500">
          My Works
        </h1>
      </div>
      <div className="bg-amber-400 m-5 p-5 rounded-3xl">
        <div className="p-5 md:flex hover:shadow-2xl active:scale-150 transition duration-700 rounded-2xl">
          <div className="">
            <Image
              src={
                "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639485729/26c2b082-908e-4a20-b6ea-7a9f31de2811_efwu9j.png"
              }
              height={200}
              width={300}
              className="rounded-2xl"
            />
          </div>
          <div className="mt-5 ml-3 md:mt-0 md:ml-32">
            <h1 className="uppercase font-UbuntuMono text-3xl text-orange-900">
              1. Airbnb Clone
            </h1>
            <p className="uppercase font-UbuntuMono font-semibold mt-6 text-lg w-[300px] md:w-[600px] text-orange-900">
              This is a clone of Airbnb website. It is a Multi page application.
              It is developed using Next.js & tailwind css. i have also added
              some features like login, signup, Stripe checkout and few more. I
              have used mapbox api to show the map.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/aman-janwani/Airbnb-clone"
                className="flex p-5 bg-transparent hover:bg-orange-500 border-2 border-orange-500 w-36 h-12 items-center justify-center text-xl text-orange-900 hover:text-white rounded-2xl mt-5 "
              >
                <AiFillGithub className="mr-2" />
                Github
              </a>
              <a
                href="https://airbnb-clone-lac.vercel.app/"
                className="flex p-2 md:p-5 bg-transparent hover:bg-orange-500 border-2 border-orange-500 w-44 h-12 items-center justify-center text-lg text-orange-900 hover:text-white rounded-2xl mt-5 "
              >
                <AiOutlineLink className="mr-2" />
                Live demo
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 md:flex hover:shadow-2xl active:scale-150 transition duration-700 rounded-2xl">
          <div className="">
            <Image
              src={
                "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639503588/amazon_1_srf0tm.png"
              }
              height={200}
              width={300}
              className="rounded-2xl"
            />
          </div>
          <div className="mt-5 ml-3 md:mt-0 md:ml-32">
            <h1 className="uppercase font-UbuntuMono text-3xl text-orange-900">
              2. Amazon Clone
            </h1>
            <p className="uppercase font-UbuntuMono font-semibold mt-6 text-lg w-[300px] md:w-[600px] text-orange-900">
              This is a clone of Amazon website. It is a Multi page application.
              It is developed using Next.js & tailwind css. This also have some
              features like login, signup, Stripe checkout and few more. i have
              used firebase to store the data.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/aman-janwani/amazon-2-yt"
                className="flex p-5 bg-transparent hover:bg-orange-500 border-2 border-orange-500 w-36 h-12 items-center justify-center text-xl text-orange-900 hover:text-white rounded-2xl mt-5 "
              >
                <AiFillGithub className="mr-2" />
                Github
              </a>
              <a
                href="https://amazon-2-yt-roan.vercel.app/"
                className="flex p-2 md:p-5 bg-transparent hover:bg-orange-500 border-2 border-orange-500 w-44 h-12 items-center justify-center text-lg text-orange-900 hover:text-white rounded-2xl mt-5 "
              >
                <AiOutlineLink className="mr-2" />
                Live demo
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 md:flex hover:shadow-2xl active:scale-150 transition duration-700 rounded-2xl">
          <div className="">
            <Image
              src={
                "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639503585/9b3a3b6c-a1f2-4440-a197-b1dca71328fc_iwqhy4.png"
              }
              height={200}
              width={300}
              className="rounded-2xl"
            />
          </div>
          <div className="mt-5 ml-3 md:mt-0 md:ml-32">
            <h1 className="uppercase font-UbuntuMono text-3xl text-orange-900">
              3. Facebook Clone
            </h1>
            <p className="uppercase font-UbuntuMono font-semibold mt-6 text-lg w-[300px] md:w-[600px] text-orange-900">
              This is a clone of Facebook website. It is a single page
              application. It is developed using Next.js & tailwind css. This
              also have some features like login, signup. i have used firebase
              to store the data. you can also post any image on this.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/aman-janwani/facebook-yt"
                className="flex p-5 bg-transparent hover:bg-orange-500 border-2 border-orange-500 w-36 h-12 items-center justify-center text-xl text-orange-900 hover:text-white rounded-2xl mt-5 "
              >
                <AiFillGithub className="mr-2" />
                Github
              </a>
              <a
                href="https://amanbook.vercel.app/"
                className="flex p-2 md:p-5 bg-transparent hover:bg-orange-500 border-2 border-orange-500 w-44 h-12 items-center justify-center text-lg text-orange-900 hover:text-white rounded-2xl mt-5 "
              >
                <AiOutlineLink className="mr-2" />
                Live demo
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 md:flex hover:shadow-2xl active:scale-150 transition duration-700 rounded-2xl">
          <div className="">
            <Image
              src={
                "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639503704/weatherapp_uqcdru.png"
              }
              height={200}
              width={300}
              className="rounded-2xl"
            />
          </div>
          <div className="mt-5 ml-3 md:mt-0 md:ml-32">
            <h1 className="uppercase font-UbuntuMono text-3xl text-orange-900">
              4. A-J Weather App
            </h1>
            <p className="uppercase font-UbuntuMono font-semibold mt-6 text-lg w-[300px] md:w-[600px] text-orange-900">
              This is a weather app. It is a single page application. It is
              developed using Html & Javascript. it shows the weather of any
              city.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/aman-janwani/A-J-Weather-App"
                className="flex p-5 bg-transparent hover:bg-orange-500 border-2 border-orange-500 w-36 h-12 items-center justify-center text-xl text-orange-900 hover:text-white rounded-2xl mt-5 "
              >
                <AiFillGithub className="mr-2" />
                Github
              </a>
              <a
                href="https://a-j-weatherapp.netlify.app"
                className="flex p-2 md:p-5 bg-transparent hover:bg-orange-500 border-2 border-orange-500 w-44 h-12 items-center justify-center text-lg text-orange-900 hover:text-white rounded-2xl mt-5 "
              >
                <AiOutlineLink className="mr-2" />
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
