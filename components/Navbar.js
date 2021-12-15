import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full mb-8 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <h1 className="m-2 hover:animate-bounce sm:m-6 font-UbuntuMono text-lg sm:text-xl xl:text-2xl hover:underline underline-offset-8 text-orange-500 uppercase">
        <Link
          activeClass="active"
          to="herosection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
      </h1>
      <h1 className="m-2 hover:animate-bounce sm:m-6 font-UbuntuMono text-lg sm:text-xl xl:text-2xl hover:underline underline-offset-8 text-orange-500 uppercase">
        <Link
          activeClass="active"
          to="aboutsection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
      </h1>
      <h1 className="m-2 hover:animate-bounce sm:m-6 font-UbuntuMono text-lg sm:text-xl xl:text-2xl hover:underline underline-offset-8 text-orange-500 uppercase">
        <Link
          activeClass="active"
          to="skillssection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Skills
        </Link>
      </h1>
      <h1 className="m-2 hover:animate-bounce sm:m-6 font-UbuntuMono text-lg sm:text-xl xl:text-2xl hover:underline underline-offset-8 text-orange-500 uppercase">
        <Link
          activeClass="active"
          to="workssection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Works
        </Link>
      </h1>
      <h1 className="m-2 hover:animate-bounce sm:m-6 font-UbuntuMono text-lg sm:text-xl xl:text-2xl hover:underline underline-offset-8 text-orange-500 uppercase">
        <Link
          activeClass="active"
          to="contactsection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
      </h1>
    </div>
  );
};

export default Navbar;
