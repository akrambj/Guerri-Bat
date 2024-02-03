import Aboutus from "../components/home/aboutus/Aboutus";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import Testemonials from "../components/home/testimonials/Testemonials";

const Home = () => {
  return (
    <main className="w-screen min-h-screen  flex flex-col">
      <Hero />
      <Aboutus />
      <Services />
      <Testemonials />
    </main>
  );
};

export default Home;
