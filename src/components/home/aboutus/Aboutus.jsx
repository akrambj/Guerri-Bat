import { useEffect, useRef } from "react";
import about from "../../../assets/imgs/about/about.jpg";
import AnimatedNumber from "./AnimatedNumber";
import ImageComponent from "../../UI/ImageComponent";
import gsap from "gsap";

const Aboutus = () => {
  const sectionRef = useRef(null);
  console.log("hey");

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
    })
      .from("#yellow", {
        x: -100, // Start off the left side of the screen
        width: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
      })
      // Continue with other animations...
      .from("#aboutText", {
        xPercent: 0,
        y: -40,
        opacity: 0,
        duration: 0.4,
        delay: 0.6,
      })
      .from("#aboutnumbers", {
        y: 40,
        stagger: 0.2,
        duration: 0.4,
        opacity: 0,
      })
      .to("#yellow", {
        x: 0, // Start off the left side of the screen
        width: "70%",
        opacity: 1,
      })
      .to(sectionRef.current, {
        opacity: 1,
      })
      .to("#aboutText", {
        xPercent: 0,
        y: 0,
        opacity: 1,
      })
      .to("#aboutnumbers", {
        xPercent: 0,
        y: -10,
        stagger: 0.2,
        opacity: 1,
        duration: 0.4,
      });

    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

      if (isVisible) {
        tl.play();
      } else {
        tl.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="about" className="w-full h-full  bg-logo relative py-4">
      <div className="w-full h-full flex flex-col py-10 gap-7 md:flex-row md:justify-between md:items-center">
        <div className="relative md:w-[45%]" id="aboutimg">
          <div
            className="w-[70%] lg:w-full h-[300px] lg:h-[450px] md:w-[90%] xs:h-[350px] 2xs:h-[400px] bg-yellow-primary rounded-tr-[30px] rounded-br-[30px]"
            id="yellow"
          >
            <div className="w-full md:w-full lg:ww-full h-[240px] lg:h-[400px] xs:h-[300px] 2xs:h-[350px] absolute top-8 lg:top-5 lg:left-40 left-10 rounded-[20px] drop-shadow-xl">
              <ImageComponent
                hashStr="LVLNDGIBt7EL~qr;R+%Lxu9Zxaxu"
                src={about}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-[20px] drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        <div
          className="text-center flex flex-col gap-3 md:w-[45%] md:text-left lg:items-start"
          id="aboutText"
        >
          <h3 className="text-green-primary uppercase font-black text-3xl lg:text-4xl lg:w-[70%] lg:leading-[40px]">
            qualifiés, passionnés et professionnels
          </h3>
          <p className="lg:text-sm lg:w-[90%]">
            Bienvenue chez Guerri Bat, votre partenaire de confiance pour tous
            vos projets de construction dans le sud de la France. Fondée avec
            une passion durable pour l{"'"}art de bâtir, notre société s{"'"}
            engage à fournir des solutions de construction innovantes et de
            qualité.À Guerri Bat, nous comprenons que chaque projet est unique,
            c{"'"}est pourquoi nous mettons l{"'"}accent sur une approche
            personnalisée. Notre équipe expérimentée, basée à Cannes, allie
            expertise technique et créativité pour donner vie à vos idées. Que
            vous envisagiez une nouvelle construction, une rénovation ou une
            extension, nous sommes là pour concrétiser vos rêves. Notre
            engagement envers l{"'"}excellence se reflète dans chaque étape de
            notre travail, de la conception à la réalisation. Nous sommes fiers
            de notre réputation en tant que constructeur fiable, offrant des
            résultats exceptionnels et respectant les délais. Chez Guerri Bat,
            nous croyons en la construction de relations solides avec nos
            clients. La transparence, l{"'"}intégrité et la communication
            ouverte sont au cœur de notre approche. Explorez notre portefeuille
            diversifié de projets réussis et découvrez comment nous pouvons
            transformer vos idées en réalité. Nous sommes prêts à être votre
            partenaire de confiance dans chaque étape de{" "}votre{" "}projet.
          </p>
        </div>
      </div>
      <div
        id="aboutnumbers"
        className="w-[90%] aboutNumber md:h-[120px] md:rounded-[50px] py-2 rounded-lg h-[300px] bg-white drop-shadow-2xl justify-center gap-2 mx-auto flex items-center flex-wrap"
      >
        <div
          className={`cursor-pointer  text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-l-[50px] flex items-center justify-center  flex-col gap-2 text-center rounded-tl-[40px] drop-shadow-md `}
        >
          <h4 className="text-2xl font-bold">
            <AnimatedNumber finalValue={10} />
          </h4>
          <h6>Ans dans L’Industrie</h6>
        </div>
        <div
          className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-md flex items-center justify-center  flex-col gap-2 text-center rounded-tr-[40px] drop-shadow-md `}
        >
          <h4 className="text-2xl font-bold">
            <AnimatedNumber finalValue={100} />
          </h4>
          <h6>Ans dans L’Industrie</h6>
        </div>
        <div
          className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-md flex items-center justify-center  flex-col gap-2 text-center rounded-bl-[40px] drop-shadow-md `}
        >
          <h4 className="text-2xl font-bold">
            <AnimatedNumber finalValue={230} />
          </h4>
          <h6>Membre d’équipe</h6>
        </div>
        <div
          className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-r-[50px] md:rounded-l-none flex items-center justify-center  flex-col gap-2 text-center rounded-br-[40px] drop-shadow-md `}
        >
          <h4 className="text-2xl font-bold">
            <AnimatedNumber finalValue={2000} />
          </h4>
          <h6>Capacité</h6>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
