// PopUp.js
import { IoIosClose } from "react-icons/io";
import ImageComponent from "../../UI/ImageComponent";

const PopUp = ({ service, closePopUpHandler, openPopUp }) => {
  return (
    <div>
      {openPopUp && (
        <div className="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center overlay z-[200]">
          <div className="w-[90%] md:w-[70%] h-[90%] bg-white rounded-[20px] drop-shadow-xl md:flex-row flex justify-between px-4 py-10 md:p-10  gap-3 md:gap-10  relative flex-col">
            <div className="absolute top-1 right-2">
              <IoIosClose
                className="text-yellow-primary text-4xl cursor-pointer"
                onClick={closePopUpHandler}
              />
            </div>
            <div className="w-full h-[60%] sm:w-[70%] sm:mx-auto md:w-[50%] drop-shadow-md">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-between text-center md:text-left w-full md:w-[50%] h-[60%] py-2 2xs:pb-5 md:h-full md:gap-4 md:pb-0">
              <h2 className="font-black text-xl md:text-2xl text-green-primary lg:text-2xl">
                {service.title}
              </h2>
              <p className="opacity-80  h-[70%]  md:h-[80%] mb-auto  md:text-lg  overflow-clip text-sm 2xs:h-[50%] ">
                {service.desc}
              </p>
              <button className="bg-green-primary w-[200px] mx-auto md:mx-0 py-2 text-white font-bold text-lg rounded-[20px] hover:bg-black duration-300">
                Contactez-Nous
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
