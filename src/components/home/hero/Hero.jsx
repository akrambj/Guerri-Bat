import ImageComponent from "../../UI/ImageComponent";
import phoneBg from "../../../assets/imgs/hero/phone-bg.svg";
import heroBg from "../../../assets/imgs/hero/heroBg.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen overflow-hidden md:px-40 relative  animate-fade-in"
    >
      <div className="hidden md:block absolute top-0 -left-1 w-full -z-10 ">
        <ImageComponent
          src={phoneBg}
          className={"w-full h-full relative"}
          height={1000}
          width={2000}
          hashStr={"LF9b8NE4D9-lpjI@Vb-T}bOVKMv%"}
        />
      </div>
      <div className="md:hidden block absolute top-0 left-0 w-full h-screen -z-10 ">
        <ImageComponent
          src={heroBg}
          className={"w-full h-full object-cover"}
          height={1000}
          width={2000}
          hashStr={"LF9b8NE4D9-lpjI@Vb-T}bOVKMv%"}
        />
      </div>
      <div className="h-full flex flex-col items-center justify-end pb-10 text-center gap-3 z-20 lg:gap-16 text-white w-[85%] mx-auto md:mx-0 md:justify-center lg:mt-40 lg:py-20 lg:h-[60%] md:items-start md:text-left lg:w-[50%]  animate-fade-in-up">
        <div className="flex flex-col gap-2 transform translateY-10 md:translateY-20 lg:translateY-30">
          <h1 className="text-xl font-bold uppercase md:text-2xl lg:text-3xl md:w-full lg:w-[90%] xl:w-[70%]  animate-fade-in">
            AVEC VOUS JUSQU’A LA DERNIèRE PIERRE!
          </h1>
          <p className="text-sm md:text-sm md:w-[90%] lg:text-lg   xl:w-[80%]  animate-fade-in">
            Bienvenue chez Guerri Bat, votre partenaire de confiance pour la
            construction dans le sud de la France. Notre équipe expérimentée à
            cane se consacre à des solutions de construction de qualité,
            adaptées à vos besoins uniques. Découvrez comment nous pouvons
            concrétiser vos projets avec excellence et engagement.
          </p>
        </div>
        <button className="bg-yellow-primary px-10 py-2 text-lg text-black font-bold rounded-lg md:text-xl hover:bg-white duration-300  animate-fade-in">
          <a href="#contact">FAIRE UN PROJET</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
