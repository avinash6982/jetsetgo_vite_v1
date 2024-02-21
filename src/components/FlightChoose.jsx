import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import FlightCard from "../container/FlightCard";
import PriceDetails from "../container/PriceDetails";
import PriceGraph from "../container/PriceGraph";
import { map } from "../assets/images";
import { hawaiian } from "../assets/logo";

function Items({ currentItems, setSelectedFlight }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedFlight(item.id)}
            className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC] hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
          >
            <FlightCard
              img={hawaiian}
              duration="16h 45m"
              name="Hawaiian Airlines"
              time="7:00AM - 4:15PM"
              stop="1 stop"
              hnl="2h 45m in HNL"
              price="$624"
              trip="round trip"
            />
          </div>
        ))}
    </>
  );
}
Items.propTypes = {
  currentItems: PropTypes.array,
  setSelectedFlight: PropTypes.func,
};

const FlightChoose = ({ flightsData }) => {
  const itemsPerPage = 5;
  const [priceShown, setPriceShow] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = flightsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(flightsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % flightsData.length;
    setItemOffset(newOffset);
  };

  const setSelectedFlight = (id) => {
    console.warn(id);
    setPriceShow(true);
  };

  return (
    <>
      {console.warn(flightsData[0])}
      <div className="flex lg:flex-row flex-col items-start justify-between gap-16 ">
        <div className="w-full lg:w-[872px] h-full flex flex-col gap-5">
          <div className="flex items-start justify-start">
            <h1 className="text-[#6E7491]  text-lg leading-6 font-semibold">
              Choose a <span className="text-[#605DEC]">departing </span>/{" "}
              <span className="text-[#605DEC]">returning </span>flight
            </h1>
          </div>
          <div className="w-full flex flex-col items-start justify-start  border-[1px] border-[#E9E8FC] rounded-xl">
            <Items
              currentItems={currentItems}
              setSelectedFlight={setSelectedFlight}
            />
            <div className="flex items-center justify-center w-full">
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
          <div className="w-full lg:mt-12">
            <img src={map} alt="map" className="w-full h-full object-cover" />
          </div>
        </div>

        {priceShown && <PriceGraph />}

        {!priceShown && (
          <div className="mt-10 flex flex-col gap-10 justify-end items-start lg:items-end">
            <PriceDetails />
            <Link to="/passenger-info" className="mt-5">
              <button className="text-[#605DEC] border-2 border-[#605DEC] py-2 px-3 rounded hover:bg-[#605DEC] hover:text-white transition-all duration-200">
                Proceed
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

FlightChoose.propTypes = {
  flightsData: PropTypes.array,
};

export default FlightChoose;
