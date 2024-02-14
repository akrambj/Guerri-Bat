import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import CTABtn from "../components/shared/CTABtn";
import { useState } from "react";

const SharedLayout = ({ scrolled, setScrolled }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="w-screen min-h-screen flex flex-col justify-between overflow-x-hidden">
      <div>
        <Header
          scrolled={scrolled}
          setScrolled={setScrolled}
          showContact={showContact}
          setShowContact={setShowContact}
        />
      </div>
      <div className="block">
        <CTABtn />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer showContact={showContact} setShowContact={setShowContact} />
    </main>
  );
};

export default SharedLayout;
