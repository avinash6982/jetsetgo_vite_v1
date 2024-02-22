import { Route, Routes } from "react-router-dom";
import { useLayoutEffect } from "react";
import { ToastContainer } from "react-toastify";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Flights from "./pages/Flights";
import FlightExplore from "./pages/FlightExplore";
import PassengerInfo from "./pages/PassengerInfo";
import SeatSelect from "./pages/SeatSelect";
import Payment from "./pages/Payment";
import Confirm from "./pages/Confirm";
import getArilinesFromResults from "./utils/getAirlinesFromResults";
import getAirportsFromResults from "./utils/getAirlinesFromResults";
import { getRequest } from "./api";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  function loadInitialData() {
    getRequest().then((res) => {
      if (res.data.message === "Success") {
        let airlinesArr = getArilinesFromResults(res.data.data.result);
        let airportsArr = getAirportsFromResults(res.data.data.result);
        console.warn(airlinesArr, airportsArr);
      }
    });
  }

  useLayoutEffect(() => {
    loadInitialData();
  }, []);

  return (
    <>
      <div className="font-Nunito overflow-hidden max-w-[1440px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Flights />} />
          <Route path="/explore" element={<FlightExplore />} />
          <Route path="/passenger-info" element={<PassengerInfo />} />
          <Route path="/seat-selection" element={<SeatSelect />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default App;
