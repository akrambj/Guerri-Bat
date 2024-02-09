import Testemonial from "./Testemonial";
import Testemonials from "./Testemonials";

function Slider({ items }) {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-[300px] overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        {items.map((item, idx) => (
          <div
            key={idx}
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Testemonial testimonial={item} />
            </div>
          </div>
        ))}
      </div>
      {/* <!-- Slider indicators --> */}
    </div>
  );
}

export default Slider;
