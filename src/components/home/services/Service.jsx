const Service = ({ service, openPopUpHandler }) => {
  return (
    <div
      onClick={openPopUpHandler}
      className="service w-[47%] lg:w-[20%] hover:bg-green-primary duration-300 cursor-pointer hover:text-white rounded-[30px] h-[270px] lg:h-[360px] drop-shadow-2xl bg-white flex flex-col items-center gap-2 py-2"
    >
      <div className="w-[90%] bg-green-300 relative mx-auto h-[55%] lg:h-[60%]  rounded-[30px]">
        <img
          className="w-full h-full object-cover  rounded-[20px]"
          src={service.img}
          alt="service"
        />
      </div>
      <div className="w-[90%] mx-auto h-[30%] items-center flex flex-col gap-1  lg:gap-3 text-center">
        <div className="flex flex-col ">
          <h4 className="text-[10px] xs:text-sm lg:text-xl font-bold">
            {service.title}
          </h4>
          <p className="line-clamp-3 text-[12px] text-[#404040] text">
            {service.desc}
          </p>
        </div>
        <button className="text-green-primary font-bold border-b-2 btn text-[12px] xs:text-sm lg:text-base">
          EN SAVOIR PLUS{" "}
        </button>
      </div>
    </div>
  );
};

export default Service;
