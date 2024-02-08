import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowAltCircleUp } from "react-icons/fa";

const CTABtn = () => {
  const [showText, setShowText] = useState(false);
  const scrollToHero = () => {
    const heroSection = document.getElementById("home");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-10 md:bottom-2  right-3 flex items-center justify-end flex-col-reverse  gap-2  z-[9999]">
      <div
        className={`cursor-pointer hover:bg-white text-white hover:text-[#25D366] duration-300   bg-[#25D366] w-[70px] h-[70px]  flex items-center justify-center rounded-full `}
      >
        <div
          className="relative h-[70%] w-[70%]"
          onClick={() => setShowText(!showText)}
        >
          <IoLogoWhatsapp className="w-full h-full " />
        </div>
        <div
          className={`absolute ${
            showText ? "opacity-100" : "opacity-0"
          } duration-300 right-20 bg-[#25D366] w-[200px] py-2 text-center rounded-md`}
        >
          <a
            className="text-white capitalize font-black text-sm"
            href="whatsapp://send?phone=+33 6 46 12 92 35"
          >
            UN DEVIS<span className="px-1">!</span>
          </a>
        </div>
      </div>
      <FaArrowAltCircleUp
        onClick={scrollToHero}
        className="text-4xl text-green-primary cursor-pointer"
      />
    </div>
  );
};

export default CTABtn;
