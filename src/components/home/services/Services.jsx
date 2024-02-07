import { useEffect, useRef, useState } from "react";
import serice01 from "../../../assets/imgs/services/service01.jpg";
import serice02 from "../../../assets/imgs/services/service02.jpg";
import serice03 from "../../../assets/imgs/services/service03.jpg";
import serice04 from "../../../assets/imgs/services/service04.jpg";
import serice05 from "../../../assets/imgs/services/service05.jpg";
import serice06 from "../../../assets/imgs/services/service06.jpg";
import Service from "./Service";
import PopUp from "./PopUp";

const Services = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [scrolledToServices, setScrolledToServices] = useState(false);
  const servicesRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const servicesSectionTop = servicesRef.current.offsetTop;
        const servicesSectionHeight = servicesRef.current.offsetHeight;
        const isScrolled =
          window.scrollY >= servicesSectionTop - 300 &&
          window.scrollY <= servicesSectionTop + servicesSectionHeight;

        setScrolledToServices(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [servicesRef]);

  const openPopUpHandler = (service) => {
    setSelectedService(service);
    setOpenPopUp(true);
  };

  const closePopUpHandler = () => {
    setOpenPopUp(false);
  };

  const services = [
    {
      title: "Démolition",
      desc: "Les démolitions ne sont pas simplement une phase nécessaire, mais une opportunité de transformation. Notre équipe gère ces transitions avec professionnalisme, respectant strictement les normes de sécurité, tout en facilitant une évolution fluide vers de nouveaux projets passionnants.",
      img: serice01,
      count: 10,
      hash: "L9C?ZJMxW?%1Cmr=X8V@PWRi%1Io",
    },
    {
      title: "Rénovation Intérieur",
      desc: "L'art de réinventer l'espace intérieur est une passion chez Guerri Bat. Notre service de rénovation va au-delà de la simple mise à jour. Nous fusionnons fonctionnalité et esthétique pour créer des intérieurs qui incarnent parfaitement votre style de vie.",
      img: serice02,
      count: 20,
      hash: "LFLg,~M}_2o}~Waxx]t7J7WoD$IU",
    },
    {
      title: "Térrassement",
      desc: "Les fondations solides sont la clé de toute construction durable. Notre expertise en terrassement assure la stabilité requise, créant un socle robuste pour soutenir la vision architecturale de votre projet.",
      img: serice03,
      count: 30,
      hash: "LyKm,_fkV@Rj?^j[RjWBt8oLWBt7",
    },
    {
      title: "Architecture Intérieure",
      desc: "Affinez chaque détail de votre espace avec notre expertise en architecture d'intérieur. Chaque choix est délibéré, chaque élément est considéré pour créer des ambiances cohérentes, personnalisées et harmonieuses.",
      img: serice04,
      count: 40,
      hash: "LAMtU50000-qh08_%%Ab00xb4:DN",
    },
    {
      title: "Rénovation Extérieur",
      desc: "Nos projets de rénovation extérieure transforment vos espaces en des environnements accueillants et fonctionnels. Chaque détail est pensé pour revitaliser vos extérieurs, créant ainsi des espaces qui résistent à l'épreuve du temps.",
      img: serice05,
      count: 50,
      hash: "LCF~Q*BfQ,?c9=?YtmRQ56~V-9I=",
    },
    {
      title: "Construction",
      desc: "Au cœur de notre savoir-faire, la construction chez Guerri Bat est bien plus qu'une simple réalisation. C'est une histoire méticuleusement écrite, de la conception initiale à l'achèvement, où chaque étape est soigneusement orchestrée pour garantir la précision, la durabilité et la satisfaction du client.",
      img: serice06,
      count: 60,
      hash: "L4Dl[]?^%#E2sk%g9GIBDiRi%M%2",
    },
  ];

  return (
    <section
      id="services"
      ref={servicesRef}
      className={`w-full h-full overflow-hidden py-10 services-bg duration-300 ${
        scrolledToServices ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <div
          className={`text-center flex flex-col gap-4  ${
            scrolledToServices ? "animate-fade-in-up" : ""
          } duration-300`}
        >
          <h2 className="text-green-primary text-3xl lg:text-5xl font-black">
            NOS SERVICES
          </h2>
          <p className="text-sm w-[95%] lg:text-lg lg:w-[60%] mx-auto opacity-80">
            Nous sommes votre partenaire polyvalent, prêt à répondre à tous vos
            besoins de construction et de design pour créer des espaces
            exceptionnels et durables.
          </p>
        </div>
        <div className="w-full flex  items-center justify-center  flex-wrap gap-2 mx-auto lg:gap-x-[3%] xl:gap-x-[10%] gap-y-10 ">
          {services.map((service, index) => (
            <Service
              key={index}
              service={service}
              openPopUpHandler={() => openPopUpHandler(service)}
              scrolledToServices={scrolledToServices}
            />
          ))}
        </div>
        {openPopUp && (
          <PopUp
            openPopUp={openPopUp}
            service={selectedService}
            closePopUpHandler={closePopUpHandler}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
