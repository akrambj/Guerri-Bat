import Aboutus from "../components/home/aboutus/Aboutus";
import Hero from "../components/home/hero/Hero";

const Home = () => {
  return (
    <main className="w-screen min-h-screen  flex flex-col">
      <Hero />
      <Aboutus />
    </main>
  );
};

export default Home;
