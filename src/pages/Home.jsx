import ImageComponent from "../components/UI/ImageComponent";
import aboutus from "../assets/imgs/header/aboutus.jpg";

const Home = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <ImageComponent
        hashStr="LVLNDGIBt7EL~qr;R+%Lxu9Zxaxu"
        width={200}
        height={200}
        src={aboutus}
      />
    </div>
  );
};

export default Home;
