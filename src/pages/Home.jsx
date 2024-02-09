import { useState } from "react";
import Aboutus from "../components/home/aboutus/Aboutus";
import Contact from "../components/home/contact/Contact";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import Testemonials from "../components/home/testimonials/Testemonials";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <main className="w-screen min-h-screen  flex flex-col">
      <Hero />
      <Aboutus />
      <Services />
      <Testemonials />
      <Contact />
    </main>
  );
};

export default Home;
