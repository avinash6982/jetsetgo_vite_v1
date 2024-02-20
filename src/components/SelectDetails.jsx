import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Hero from "./Hero";

const SelectDetails = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col">
          <Hero />

          <div className="flex flex-wrap items-center justify-start gap-3 mt-48 lg:mt-1 px-7 py-4">
            <select
              name="price"
              id="max-price"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="max-price" className="">
                Max price
              </option>
              <option value="$100-300">$100-300</option>
              <option value="$300-600">$300-600</option>
              <option value="$600-1000">$600-1000</option>
            </select>
            <select
              name="shops"
              id="shops"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="shops" className="">
                Shops
              </option>
            </select>
            <select
              name="times"
              id="times"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="times" className="">
                Times
              </option>
              <option value="7 AM - 4 PM">7 AM - 4 PM</option>
              <option value="8 AM - 12 PM">8 AM - 12 PM</option>
              <option value="6 PM - 10 PM">6 PM - 10 PM</option>
            </select>
            <select
              name="airlines"
              id="airlines"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="airlines" className="">
                Airlines
              </option>
              <option value="Japan">Japan</option>
              <option value="Hawai">Hawai</option>
              <option value="Dubai">Dubai</option>
            </select>
            <select
              name="class"
              id="class"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="class" className="">
                Select Class
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <select
              name="price"
              id="max-price"
              className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
            >
              <option value="max-price" className="">
                more
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectDetails;
