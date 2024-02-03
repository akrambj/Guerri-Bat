import testimonial01 from "../../../assets/imgs/testemonials/testimonial01.svg";
import Testemonial from "./Testemonial";
const Testemonials = () => {
  const testemonials = [
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      name: "First & Second Name",
      testemony:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
  ];

  return (
    <section
      id="testemonials"
      className="w-full h-full overflow-hidden bg-logo"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-20 py-10">
        <div className="flex flex-col gap-3 text-center">
          <h4 className="font-bold text-4xl">Client</h4>
          <h3 className="text-green-primary font-black text-3xl md:text-5xl">
            Témoignage
          </h3>
        </div>
        <div className="w-[80%] mx-auto flex justify-center items-center flex-wrap gap-x-14 gap-y-20 ">
          {testemonials.map((testemonial, index) => (
            <Testemonial key={index} testemonial={testemonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
