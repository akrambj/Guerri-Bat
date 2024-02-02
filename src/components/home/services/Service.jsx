import ImageComponent from "../../UI/ImageComponent";

const Service = ({ service, openPopUpHandler }) => {
  return (
    <div
      onClick={openPopUpHandler}
      className="service flex flex-col lg:h-[400px] gap-5 justify-between py-5 bg-white rounded-[30px] px-5 drop-shadow-2xl shadow-md w-[80%] xs:w-[60%] sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[22%] cursor-pointer hover:bg-green-primary hover:text-white duration-300"
    >
      <div className="w-full h-[60%]">
        <img
          // hashStr={service.hash}
          src={service.img}
          alt={service.title}
          width={260}
          height={200}
          className="w-full h-full object-cover rounded-[30px]"
        />
      </div>
      <div className="h-[40%] text-center flex flex-col gap-2">
        <h4 className="font-bold text-lg w-full overflow-x-clip">
          {service.title}
        </h4>
        <p className="text-[11px] lg:text-[10px]   line-clamp-3">
          {service.desc}
        </p>
        <button className="service-btn text-green-primary font-bold border-b-2 border-black lg:w-[130px] xl:w-[200px] mx-auto text-base w-[200px]">
          EN SAVOIR PLUS
        </button>
      </div>
    </div>
  );
};

export default Service;
