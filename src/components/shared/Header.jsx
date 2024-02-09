import { useEffect, useState } from "react";
import logo from "../../assets/imgs/header/logo.svg";
import Socials from "../data/Socials";
import CTABtn from "./CTABtn";
import ImageComponent from "../UI/ImageComponent";
import menu from "../../assets/imgs/header/menu.png";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [scrollVersion, setScrollVersion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5 && window.scrollY <= 3000) {
        setScrollVersion(true);
      } else {
        setScrollVersion(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Accueil", link: "#home" },
    { name: "à Propos", link: "#about" },
    { name: "NOS SERVICES", link: "#services" },
    { name: "Témoignages", link: "#testemonials" },
    { name: "Contact", link: "#contact" },
  ];

  const toggleMenu = () => {
    setMenuToggle((prevMenuToggle) => !prevMenuToggle);
  };
  return (
    <header
      className={`w-screen ${
        scrollVersion && !menuToggle
          ? "lg:justify-center lg:top-[85%] "
          : "lg:justify-between flex-row-reverse"
      } duration-300 fixed top-3 left-0 flex items-center  justify-between py-4 px-5   md:px-24 lg:px-40 md:py-10 z-[99]`}
    >
      <div
        style={{
          opacity: scrollVersion ? 0.9 : 0,
        }}
        className={` backdrop-blur-2xl baclg bg-green-primary drop-shadow-xl  fixed w-[97%] opacity-40  left-[2%] md:w-[45%] py-8 md:left-[28%] rounded-[60px] ${
          scrollVersion
            ? "transition-opacity duration-300 ease-in-out"
            : "opacity-0"
        }`}
      ></div>
      <div
        className={`logo  ${
          scrollVersion ? "lg:hidden" : "lg:block"
        } flex items-center justify-center   w-[65%] xs:w-[50%] md:w-[30%] lg:w-[25%]  relative z-40  duration-300`}
      >
        <img
          className="w-full h-full object-cover duration-300  z-20 lg:cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="menu md:hidden">
        <div
          className={`menuicon z-50 ${menuToggle ? "openMenu" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line-1 bg-white"></span>
          <span className="line-2 bg-white"></span>
          <span className="line-3 bg-white"></span>
        </div>
        <nav
          className={`fixed ${
            menuToggle ? "right-0 " : "-right-full"
          } top-0 duration-300 w-full h-screen overflow-hidden z-20 `}
        >
          <div
            className={`${
              menuToggle ? "opacity-100" : "opacity-0"
            } absolute top-0 h-full w-full bg-red-300 duration-300 -z-10`}
          >
            <ImageComponent
              hashStr={"L73AS_Qqo{kBy-VukoaMVHo{j[aM"}
              src={menu}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="w-full h-[90%] flex flex-col justify-between my-16 py-10 px-5 z-20">
            <ul className="flex flex-col justify-center gap-5 uppercase ">
              {menuItems.map((menuItemm, index) => (
                <li key={index}>
                  <a
                    className={`${
                      index === selectedLink
                        ? "text-yellow-primary font-bold opacity-100"
                        : "text-white opacity-80"
                    } text-xl`}
                    href={menuItemm.link}
                  >
                    {menuItemm.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <h3 className="text-white uppercase fono-bold text-xl">
                Suivez-nous
              </h3>
              <ul className="flex items-center gap-3">
                {Socials.map((social, index) => (
                  <li className="" key={index}>
                    <a
                      className="text-yellow-primary text-xl"
                      href={social.link}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`${
              menuToggle ? "opacity-100" : "opacity-0"
            } duration-300`}
          >
            <CTABtn />
          </div>
        </nav>
      </div>

      <nav className={`items-center  hidden md:flex  duration-300 z-20`}>
        <ul
          className={`${scrollVersion ? "gap-2" : "gap-5"} flex items-center`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setMenuToggle(false);
                setSelectedLink(index);
              }}
            >
              <a
                className={`cursor-pointer uppercase ${
                  scrollVersion
                    ? "text-black lg:text-sm"
                    : "text-white lg:text-base"
                } text-sm md:text-[11px] lg:text-base hover:text-yellow-primary duration-300  ${
                  selectedLink === index
                    ? "text-yellow-primary font-bold"
                    : "text-white"
                }`}
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
