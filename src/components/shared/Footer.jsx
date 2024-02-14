import { useState } from "react";
import logo from "../../assets/imgs/header/logo.svg";
import Socials from "../data/Socials";

const Footer = () => {
  const [selectedLink, setSelectedLink] = useState(0);
  const [loading, setLoading] = useState(false);

  const menuItems = [
    { name: "Accueil", link: "#home" },
    { name: "à Propos", link: "#about" },
    { name: "NOS SERVICES", link: "#services" },
  ];

  const meuItems02 = [
    { name: "Témoignages", link: "#testemonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className="relative w-full  py-5 px-5 md:px-10 bg-black z-0">
      <div className=" flex flex-col gap-4 md:flex-row  md:justify-between  ">
        <div className="md:w-[20%]  md:h-[200px]  flex flex-col gap-3 lg:it">
          <div className="logo">
            <img
              className="w-[60%] h-full md:w-full object-cover"
              src={logo}
              alt="logo"
            />
          </div>
          <h4 className="text-white text-[10px] lg:text-sm md:text-base uppercase">
            AVEC VOUS JUSQU’A LA DERNIèRE PIERRE <span className="px-2">!</span>
          </h4>
        </div>
        <div className="flex items-center justify-center gap-5 lg:px-10 py-5 lg:py-0 lg:justify-between lg:w-[900px] lg:mr-auto  flex-col">
          <div className="md:w-[30%]  lg:w-[60%] py-3 md:h-[200px]  flex w-[100%] justify-between uppercase lg:gap-32 px-0 ">
            <ul className="flex flex-col flex-wrap items-center  lg:w-[300px]   uppercase ">
              {menuItems.map((menuItemm, index) => (
                <li key={index} className="w-full ">
                  <a
                    className={`${
                      index === selectedLink
                        ? "text-yellow-primary font-bold opacity-100"
                        : "text-white opacity-80"
                    }  text-sm hover:text-yellow-primary hover:font-bold duration-300 lg:text-xl`}
                    href={menuItemm.link}
                  >
                    {menuItemm.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              {meuItems02.map((item, index) => (
                <li key={index} className="w-full ">
                  <a
                    className={`${
                      index === selectedLink
                        ? "text-yellow-primary font-bold opacity-100"
                        : "text-white opacity-80"
                    }  text-sm hover:text-yellow-primary hover:font-bold duration-300 lg:text-xl`}
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" lg:hidden lg:py-3 h-[120px] md:h-[200px]  px-2 flex flex-col lg:gap-5 gap-1 text-white lg:items-end">
            <h2 className="font-bold uppercase text-center text-yellow-primary text-sm lg:text-xl ">
              Suivez-nous :
            </h2>
            <ul className="flex items-center gap-3 ">
              {Socials.map((social, index) => (
                <li className="" key={index}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-white text-2xl lg:text-4xl hover:text-green-primary duration-300"
                    href={social.link}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" hidden  lg:py-3 h-[120px] md:h-[200px]  px-2 lg:flex flex-col lg:gap-5 gap-1 text-white lg:items-end">
          <h2 className="font-bold uppercase text-center text-yellow-primary text-sm lg:text-xl ">
            Suivez-nous :
          </h2>
          <ul className="flex items-center gap-3 ">
            {Socials.map((social, index) => (
              <li className="" key={index}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-white text-2xl lg:text-4xl hover:text-green-primary duration-300"
                  href={social.link}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:text-lg text-gray-600 mt-2 text-center text-white text-[10px] ">
        &copy; {new Date().getFullYear()} Web média diffusion. Tous droits
        réservés.
      </div>
    </footer>
  );
};

export default Footer;
