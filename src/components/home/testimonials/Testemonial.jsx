/* eslint-disable react/prop-types */
import testemonialCamel01 from "../../../assets/imgs/testemonials/testemonialCamel01.svg";
import testemonialCamel02 from "../../../assets/imgs/testemonials/testemonialCamel02.svg";
import { IoStarSharp } from "react-icons/io5";

const Testemonial = ({ testimonial }) => {
  return (
    <div
      className={` w-[90%]  mx-auto cursor-pointer  testimonial hover:bg-green-primary bg-white duration-300 hover:text-white rounded-lg drop-shadow-xl lg:w-[30%] h-full flex flex-col  justify-between items-center px-4 py-5`}
    >
      <div className="lg:hidden w-full flex items-center justify-center">
        <div className="w-[100px] h-[100px] bg-yellow-primary rounded-full flex items-center justify-center">
          <div className="flex w-full h-full rounded-full items-center justify-center border-[8px] border-green-primary">
            <h2 className="text-white font-bold text-lg ">
              {testimonial.firstname}
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden  absolute w-full  -top-2  lg:flex items-center justify-center h-[20px]">
        <div className="w-[80px] h-[80px] bg-yellow-primary rounded-full flex items-center justify-center">
          <div className="flex w-full h-full rounded-full items-center justify-center border-[8px] border-green-primary">
            <h2 className="text-white font-bold text-lg lg:text-sm">
              {testimonial.firstname}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="text-6xl">
          <img loading="lazy" src={testemonialCamel01} alt="" />
        </span>
        <p className="text-center text-sm opacity-80 line-clamp-3">
          {testimonial.testemony}
        </p>
        <span className="flex justify-end ">
          <img className="" src={testemonialCamel02} alt="" />
        </span>
      </div>
      <div className="w-full">
        <span className="flex items-center gap-1 justify-center">
          {Array.from({ length: testimonial.rate }, (_, index) => (
            <IoStarSharp
              className="text-yellow-primary stars transition-all"
              key={index}
            />
          ))}
        </span>
      </div>
    </div>
  );
};

export default Testemonial;
