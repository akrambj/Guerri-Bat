import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testemonial from "./Testemonial";
// import testimonial01 from "../../../assets/imgs/testemonials/testemonial01.svg";

const Testemonials = () => {
  const [scrolledToTestimonials, setScrolledToTestimonials] = useState(false);
  const testemonialsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (testemonialsRef.current) {
        const testimonialsSectionTop = testemonialsRef.current.offsetTop;
        const testimonialsSectionHeight = testemonialsRef.current.offsetHeight;
        const isScrolled =
          window.scrollY >= testimonialsSectionTop - 300 &&
          window.scrollY <= testimonialsSectionTop + testimonialsSectionHeight;

        setScrolledToTestimonials(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [testemonialsRef]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const testemonials = [
    {
      firstname: "Isabelle",
      lastname: "L",
      testemony:
        "Nous sommes ravis de la rénovation de notre appartement ! L'équipe a été à l'écoute de nos besoins et a su apporter des solutions créatives. Un service impeccable du début à la fin",
      position: "company position",
      // img: testimonial01,
      rate: 5,
    },
    {
      firstname: "Nicolas",
      lastname: "Bt",
      testemony:
        "le résultat a surpassé nos attentes ! Leur équipe compétente et dévouée a géré chaque étape avec professionnalisme !",
      position: "company position",
      // img: testimonial01,
      rate: 4,
    },
    {
      firstname: "Marie",
      lastname: "H",
      testemony:
        "Travailler avec Guirri-Bat a été une expérience agréable. Ils ont fait preuve d'un haut niveau de compétence et ont réussi à transformer notre espace en un lieu moderne et fonctionnel. Merci pour tout!",
      position: "company position",
      // img: testimonial01,
      rate: 5,
    },
    {
      firstname: "Thomas",
      lastname: "G",
      testemony:
        "Guirri-Bat a été recommandé par un ami, et je suis enchanté par le résultat. Leur équipe a fait preuve d'un engagement exceptionnel envers la qualité et a livré notre projet dans les délais prévus",
      position: "company position",
      // img: testimonial01,
      rate: 4,
    },
    {
      firstname: "Émilie",
      lastname: "P",
      testemony:
        "Choisir Guirri-Bat pour la construction de notre maison a été la meilleure décision. Ils ont su combiner efficacité, créativité et respect des délais. Nous sommes ravis du résultat final et les recommandons sans hésitation.",
      position: "company position",
      // img: testimonial01,
      rate: 5,
    },
  ];

  return (
    <section
      id="testemonials"
      ref={testemonialsRef}
      className={`w-full min-h-[100vh] overflow-hidden logoBg2 duration-300 `}
    >
      <div className=" w-full h-full flex flex-col items-center justify-center gap-20 py-10 lg:py-2">
        <div
          className={`flex flex-col gap-3 text-center
           ${scrolledToTestimonials ? "animate-fade-in-up" : ""} 
            `}
        >
          <h3 className="text-green-primary font-black text-3xl md:text-5xl">
            Témoignages
          </h3>
          <h4 className="font-bold text-4xl">Clients</h4>
        </div>
        <div className="bg-red-300"></div>
      </div>
      <div className="block md:hidden">
        <Slider items={testemonials} />
      </div>
      <div className="md:flex items-center justify-center flex-wrap w-[80%] mx-auto gap-10 hidden">
        {testemonials.map((testimonial, index) => (
          <Testemonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testemonials;
