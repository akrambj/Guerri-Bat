import Aboutus from "../components/home/aboutus/Aboutus";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";

const Home = () => {
  return (
    <main className="w-screen min-h-screen  flex flex-col">
      <Hero />
      <Aboutus />
      <Services />
    </main>
  );
};

export default Home;
