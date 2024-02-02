import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import CTABtn from "../components/shared/CTABtn";

const SharedLayout = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col justify-between overflow-x-hidden">
      <div>
        <Header />
      </div>
      <div className="hidden md:block">
        <CTABtn />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default SharedLayout;
