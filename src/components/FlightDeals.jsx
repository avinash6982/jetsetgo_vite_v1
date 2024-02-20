import { right } from "../assets/icons";

import { shangai, sydney, temple } from "../assets/images";
import FlightDealsCard from "../container/FlightDealsCard";

const FlightDeals = () => {
  const handleSeeAllClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="px-8 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Find your next adventure <br className=" block sm:hidden " /> with
            these <span className="text-[#605DEC]">flight deals</span>
          </p>
          <div
            className="flex items-start justify-center gap-1 cursor-pointer"
            onClick={handleSeeAllClick}
          >
            <p className="text-[#A1B0CC] text-sm md:text-lg">All</p>
            <img src={right} alt="arrow" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
          <FlightDealsCard
            image={shangai}
            title="The Bund, "
            name="Shanghai"
            price="$598"
            des=" China’s most international city"
          />
          <FlightDealsCard
            image={sydney}
            title="Sydney Opera House, "
            name="Sydney"
            price="$981"
            des=" Take a stroll along the famous harbor"
          />
          <FlightDealsCard
            image={temple}
            title="Kōdaiji Temple,"
            name="Kyoto"
            price="$633"
            des=" Step back in time in the Gion district"
          />
        </div>
      </div>
    </>
  );
};

export default FlightDeals;
