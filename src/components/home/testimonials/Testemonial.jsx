import testemonialCamel01 from "../../../assets/imgs/testemonials/testemonialCamel01.svg";
import testemonialCamel02 from "../../../assets/imgs/testemonials/testemonialCamel02.svg";
import { IoStarSharp } from "react-icons/io5";

const Testemonial = ({ testemonial, scrolledToTestimonials }) => {
  return (
    <div className="testemonial h-[200px] md:h-auto  w-[47%]  md:w-[40%] lg:w-[30%] xl:w-[22%] flex flex-col justify-center  lg:justify-between lg:py-10 bg-white drop-shadow-2xl shadow-md  gap-2 rounded-[20px] px-2 cursor-pointer hover:bg-yellow-primary hover:text-white duration-200 transition-all ease-in ">
      <div
        className={`w-[60px] lg:w-[100px]  ${
          scrolledToTestimonials ? " flip" : ""
        }   h-[60px] lg:h-[100px] rounded-full bg-yellow-primary absolute testemonialImg  left-[32%] lg:left-[32%] -top-8 lg:-top-14 border-4 border-yellow-primary transition-all`}
      >
        <div
          className={`   w-full h-full  duration-300 mx-auto flex items-center justify-center bg-green-primary rounded-full`}
        >
          <h2 className="text-white font-bold text-base lg:text-3xl">
            {testemonial.firstname[0]} . {testemonial.lastname[0]}
          </h2>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 ">
          <span className="text-6xl">
            <img loading="lazy" src={testemonialCamel01} alt="" />
          </span>
          <p className="text-center text-sm opacity-80 line-clamp-3">
            {testemonial.testemony}
          </p>
          <span className="flex justify-end ">
            <img className="" src={testemonialCamel02} alt="" />
          </span>
        </div>
      </div>
      <div className="flex flex-col  text-center">
        <h3 className="text-green-primary font-extrabold text-lg">
          {testemonial.firstname} & {testemonial.lastname}
        </h3>
        <span className="flex items-center gap-1 justify-center">
          {Array.from({ length: testemonial.rate }, (_, index) => (
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
