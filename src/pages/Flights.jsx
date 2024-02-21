import FlightDeals from "../components/FlightDeals";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
const Flights = () => {
  return (
    <>
      <div className="mt-[70px]">
        <Hero isHomeScreen={true} />
      </div>
      <div className="mt-[40px]">
        <FlightDeals />
      </div>
      <div className="mt-[90px]">
        <Testimonials />
      </div>
    </>
  );
};

export default Flights;
