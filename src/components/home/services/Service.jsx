const Service = ({ service, openPopUpHandler }) => {
  return (
    <div className="service w-[47%] lg:w-[20%]  rounded-[30px] h-[360px] drop-shadow-2xl bg-white flex flex-col items-center gap-2 py-2">
      <div className="w-[90%] relative mx-auto h-[60%] bg-red-300 rounded-[30px]">
        <img
          className="w-full h-full object-cover bg-red-300 rounded-[20px]"
          src={service.img}
          alt="service"
        />
      </div>
      <div className="w-[90%] mx-auto h-[30%] items-center flex flex-col gap-3 text-center">
        <div className="flex flex-col ">
          <h4 className="text-base lg:text-xl font-bold">{service.title}</h4>
          <p className="line-clamp-3 text-[12px] text-[#404040]">
            {service.desc}
          </p>
        </div>
        <button
          onClick={openPopUpHandler}
          className="text-green-primary font-bold border-b-2 service-btn"
        >
          EN SAVOIR PLUS{" "}
        </button>
      </div>
    </div>
  );
};

export default Service;
