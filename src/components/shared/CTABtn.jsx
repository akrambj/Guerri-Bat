import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const CTABtn = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div
      className={`fixed bottom-10 md:bottom-2 cursor-pointer hover:bg-white text-white hover:text-[#25D366] duration-300 z-[60]  right-3 bg-[#25D366] w-[70px] h-[70px]  flex items-center justify-center rounded-full `}
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
          className="text-white capitalize font-black text-xl"
          href="whatsapp://send?phone=+213777941413"
        >
          contact us{" "}
        </a>
      </div>
    </div>
  );
};

export default CTABtn;
