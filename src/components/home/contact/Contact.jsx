import { useEffect, useRef, useState } from "react";
import contactImg from "../../../assets/imgs/contact/contactImg.jpg";
import emailjs from "@emailjs/browser";
<<<<<<< HEAD
import { FaCheckCircle } from "react-icons/fa";
=======
import {
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
>>>>>>> 1d03618d361d4db458331b346af53d85d8f6f6d4

import ImageComponent from "../../UI/ImageComponent";
import { IoMailOpen } from "react-icons/io5";

const Contact = ({ scrolled, setScrolled }) => {
  const Socials = [
    {
      icon: <FaHouse />,
      link: "#",
      name: "Guirri-Bat : 27, rue Jean Gras, 06150 CANNES",
      title: "Addresse",
    },
    {
      icon: <IoMailOpen />,
      link: "#",
      name: "Guirribat@gmail.com",
      title: "Mail",
    },
    {
      icon: <FaWhatsapp />,
      link: "#",
      name: "Guirri-Bat",
      title: "Whatsapp",
    },
    {
      icon: <IoIosPhonePortrait />,
      link: "#",
      name: "06.46.12.92.35",
      title: "Mobile",
    },
  ];
  const form = useRef();
  const [popUp, setPopUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrolledToContact, setScrolledToContact] = useState(false);
  const contactRef = useRef();

  useEffect(() => {}, []);

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const contactSectionTop = contactRef.current.offsetTop;
        const contactSectionHeight = contactRef.current.offsetHeight;
        const isScrolled =
          window.scrollY >= contactSectionTop - 300 &&
          window.scrollY <= contactSectionTop + contactSectionHeight;

        setScrolledToContact(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contactRef]);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "guirri-bat",
        "template_za4fkkj",
        form.current,
        "0ljXnVIHI8YBihGbp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setPopUp(true);
          setTimeout(() => {
            setPopUp(false);
          }, 3000);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className={` ${
        scrolledToContact ? "opacity-100" : "opacity-0"
      } duration-300 w-screen  min-h-screen logoBg2 relative py-10 lg:py-0 lg:flex lg:flex-col lg:gap-10 `}
    >
      <div className="lg:w-full h-[500px] z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46275.77316981995!2d6.968251644469975!3d43.53912590325367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce8180530cffff%3A0x40819a5fd979e20!2sCannes%2C%20France!5e0!3m2!1sen!2sdz!4v1706189767764!5m2!1sen!2sdz"
          className="w-full h-full rounded-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col items-center justify-between py-4 h-[100vh] lg:h-auto lg:py-10  lg:flex-row">
        {Socials.map((item, index) => (
          <div
            key={index}
            className="w-1/2 flex  justify-center flex-col  gap-2 items-center font-bold  "
          >
            <div className="cursor-pointer  hover:bg-yellow-primary transition-all duration-300 text-white w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full flex items-center justify-center bg-green-primary">
              <a
                target="_blank"
                href={item.link}
                className="text-3xl lg:text-4xl"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            </div>
            <h4>{item.title}</h4>
            <h4 className="text-[11px]  text-center lg:text-sm">{item.name}</h4>
          </div>
        ))}
      </div>
      <div
        className={`w-full h-full flex items-center flex-col lg:flex-row-reverse lg:justify-end  gap-5 md:gap-0 ${
          scrolledToContact ? "about-img" : ""
        } duration-300 `}
      >
        <div className="lg:flex lg:items-center lg:h-full  lg:relative">
          <div className="w-[50%] h-[400px] py-2 hidden lg:block">
            <img
              className="h-full w-full object-cover rounded-sm"
              src={contactImg}
              alt=""
            />
          </div>
          <div className="w-full md:w-[50%] h-[100%] flex flex-col justify-center gap-5 py-5">
            <div className="text-center">
              <h2 className="text-green-primary text-2xl font-black md:text-4xl">
                CONTACTEZ-NOUS
              </h2>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex pb-2 justify-center focus-within:border-transparent items-center flex-wrap gap-x-10 gap-y-14  w-full md:w-[60%] mx-auto"
            >
              <input
                className="md:w-[45%] w-[45%]   focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-transparent border-b-[#545454]"
                type="text"
                placeholder="Nom"
                name="first_name"
              />
              <input
                className="md:w-[45%] w-[40%]  focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-transparent border-b-[#545454]"
                type="text"
                placeholder="Prénom"
                name="last_name"
              />
              <input
                className="md:w-[45%] w-[40%] focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-transparent border-b-[#545454]"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                className="md:w-[45%] w-[40%]  focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-transparent   border-b-2 border-b-[#545454]"
                type="number"
                placeholder="Téléphone"
                name="phone_number"
                required
              />
              <input
                className="w-[95%] focus:outline-none border-transparent focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-b-[#545454]"
                type="text"
                placeholder="Sujet"
                name="user_subject"
              />
              <textarea
                name="message"
                className="w-[95%] focus:outline-none border-transparent focus:border-green-primary focus:font-bold duration-300  placeholder:text-black bg-transparent border-b-2 border-b-[#545454] h-[130px]"
                placeholder="Message ...."
                required
              />
              <button
                className="z-[99] bg-green-primary hover:bg-black duration-300 md:w-full text-white font-bold w-[90%]  py-2 rounded-[20px] text-lg"
                type="submit"
                value={"send"}
              >
                {loading ? <div className="spinner"></div> : "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {popUp && (
        <div className="bg-white text-green-primary drop-shadow-lg font-bold fixed top-10 right-10 border-b-2 border-green-primary p-4 flex items-center rounded-md w-full md:w-[20%]">
          <FaCheckCircle className="mr-2" />
          Email sent!
        </div>
      )}
    </section>
  );
};

export default Contact;
