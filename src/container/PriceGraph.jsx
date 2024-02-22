import { Pricehistory } from "../assets/images";

const PriceGraph = () => {
  return (
    <>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-[#6E7491] font-semibold text-lg leading-6">
              Price history
            </h1>
          </div>
          <div className="w-full h-full">
            <img
              src={Pricehistory}
              alt="Price-history"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="flex items-center justify-start gap-3">
            <h1 className="text-[#6E7491] font-semibold text-lg leading-6">
              Price rating
            </h1>
            <button className="bg-[#5CD6C0] px-2 py-1 rounded text-white font-semibold">
              Buy soon
            </button>
          </div>
          <div className="flex flex-col items-start justify-start max-w-sm gap-2 px-3">
            <p className="text-[#6E7491] ">
              We recommend booking soon. The average cost of this flight is
              $750, but could rise 18% to $885 in two weeks.
            </p>
            <p className="text-[#A1B0CC] ">
              JetSetGo analyzes thousands of flights, prices, and trends to
              ensure you get the best deal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceGraph;
