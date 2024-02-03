import testemonialCamel01 from "../../../assets/imgs/testemonials/testemonialCamel01.svg";
import testemonialCamel02 from "../../../assets/imgs/testemonials/testemonialCamel02.svg";
import { IoStarSharp } from "react-icons/io5";

const Testemonial = ({ testemonial }) => {
  return (
    <div className="testemonial w-[90%] xs:w-[70%] sm:w-[75%] md:w-[40%] lg:w-[30%] xl:w-[22%] flex flex-col justify-between py-10 bg-white drop-shadow-2xl shadow-md  gap-2 rounded-[20px] px-2 cursor-pointer hover:bg-yellow-primary hover:text-white duration-200 transition-all ease-in">
      <div className="w-[100px] testemonialImg h-[100px] rounded-full bg-yellow-primary absolute left-[50%] translate-x-[-50%] -top-14 border-4 border-yellow-primary transition-all">
        <img
          className="w-full h-full rounded-full object-cover"
          src={testemonial.img}
          alt={testemonial.name}
        />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <span className="text-6xl">
            <img loading="lazy" src={testemonialCamel01} alt="" />
          </span>
          <p className="text-center text-sm opacity-80">
            {testemonial.testemony}
          </p>
          <span className="flex justify-end ">
            <img className="" src={testemonialCamel02} alt="" />
          </span>
        </div>
      </div>
      <div className="flex flex-col  text-center">
        <h3 className="text-green-primary font-extrabold text-lg">
          {testemonial.name}
        </h3>
        <h4 className="capitalize opacity-80">{testemonial.position}</h4>
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
