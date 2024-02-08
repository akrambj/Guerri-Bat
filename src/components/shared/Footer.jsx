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
    { name: "Témoignages", link: "#testemonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className="relative w-full  py-5 px-5 md:px-10 bg-black z-0">
      <div className=" flex flex-col gap-4 md:flex-row md:items-center md:justify-between  ">
        <div className="md:w-[20%]  md:h-[200px]  flex flex-col gap-3">
          <div className="logo">
            <img
              className="w-[60%] h-full md:w-full object-cover"
              src={logo}
              alt="logo"
            />
          </div>
          <h4 className="text-white text-sm md:text-base uppercase">
            AVEC VOUS JUSQU’A LA DERNIèRE PIERRE <span className="px-2">!</span>
          </h4>
        </div>
        <div className="md:w-[30%]  md:h-[200px] ">
          <ul className="flex justify-between  items-center  flex-wrap md:flex-nowrap md:flex-col md:justify-center md:gap-2 uppercase ">
            {menuItems.map((menuItemm, index) => (
              <li key={index} className="w-[40%]">
                <a
                  className={`${
                    index === selectedLink
                      ? "text-yellow-primary font-bold opacity-100"
                      : "text-white opacity-80"
                  } text-base hover:text-yellow-primary hover:font-bold duration-300`}
                  href={menuItemm.link}
                >
                  {menuItemm.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[20%] md:h-[200px] px-2 flex flex-col gap-3 text-white">
          <h2 className="font-bold">Suivez-nous</h2>
          <ul className="flex items-center gap-3">
            {Socials.map((social, index) => (
              <li className="" key={index}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-white text-xl hover:text-green-primary duration-300"
                  href={social.link}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[20%] h-[200px] z-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46275.77316981995!2d6.968251644469975!3d43.53912590325367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce8180530cffff%3A0x40819a5fd979e20!2sCannes%2C%20France!5e0!3m2!1sen!2sdz!4v1706189767764!5m2!1sen!2sdz"
            className="w-full h-full rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="text-lg text-gray-600 mt-1 text-center text-white">
        &copy; {new Date().getFullYear()} Web média diffusion. Tous droits
        réservés.
      </div>
    </footer>
  );
};

export default Footer;
