import { useEffect, useRef, useState } from "react";
import testimonial01 from "../../../assets/imgs/testemonials/testimonial01.svg";
import Testemonial from "./Testemonial";
const Testemonials = () => {
  const [scrolledToTestimonials, setScrolledToTestimonials] = useState(false);
  const testemonialsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (testemonialsRef.current) {
        const testimonialsSectionTop = testemonialsRef.current.offsetTop;
        const testimonialsSectionHeight = testemonialsRef.current.offsetHeight;
        const isScrolled =
          window.scrollY >= testimonialsSectionTop &&
          window.scrollY <= testimonialsSectionTop + testimonialsSectionHeight;

        setScrolledToTestimonials(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [testemonialsRef]);
  const testemonials = [
    {
      firstname: "Pierre",
      lastname: "D",
      testemony:
        "Guirri-Bat a réalisé notre rêve de maison avec un professionnalisme exceptionnel. Les délais ont été respectés, et la qualité du travail est remarquable. Nous recommandons vivement leurs services.",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      firstname: "Isabelle",
      lastname: "L",
      testemony:
        "Nous sommes ravis de la rénovation de notre appartement par Guirri-Bat. L'équipe a été à l'écoute de nos besoins et a su apporter des solutions créatives. Un service impeccable du début à la fin.",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
    {
      firstname: "Nicolas",
      lastname: "Bt",
      testemony:
        "Guirri-Bat a surpassé nos attentes en termes de construction. Leur équipe compétente et dévouée a géré chaque étape avec professionnalisme. Nous sommes reconnaissants pour leur travail exceptionnel.",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      firstname: "Marie",
      lastname: "H",
      testemony:
        "Travailler avec Guirri-Bat a été une expérience agréable. Ils ont fait preuve d'un haut niveau de compétence et ont réussi à transformer notre espace en un lieu moderne et fonctionnel. Merci pour tout!",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
    {
      firstname: "Thomas",
      lastname: "G",
      testemony:
        "Guirri-Bat a été recommandé par un ami, et je suis enchanté par le résultat. Leur équipe a fait preuve d'un engagement exceptionnel envers la qualité et a livré notre projet dans les délais prévus",
      position: "company position",
      img: testimonial01,
      rate: 4,
    },
    {
      firstname: "Émilie",
      lastname: "P",
      testemony:
        "Choisir Guirri-Bat pour la construction de notre maison a été la meilleure décision. Ils ont su combiner efficacité, créativité et respect des délais. Nous sommes ravis du résultat final et les recommandons sans hésitation",
      position: "company position",
      img: testimonial01,
      rate: 5,
    },
  ];

  return (
    <section
      id="testemonials"
      ref={testemonialsRef}
      className={`${
        scrolledToTestimonials ? "opacity-100" : "opacity-0"
      } w-full  overflow-hidden logoBg2 duration-300`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-20 py-10">
        <div
          className={`flex flex-col gap-3 text-center
           ${scrolledToTestimonials ? "animate-fade-in-up" : ""} 
            `}
        >
          <h4 className="font-bold text-4xl">Client</h4>
          <h3 className="text-green-primary font-black text-3xl md:text-5xl">
            Témoignage
          </h3>
        </div>
        <div className="lg:w-[80%] w-[95%] mx-auto flex justify-center items-center flex-wrap gap-2 lg:gap-x-14  gap-y-20 ">
          {testemonials.map((testemonial, index) => (
            <Testemonial
              key={index}
              testemonial={testemonial}
              scrolledToTestimonials={scrolledToTestimonials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
