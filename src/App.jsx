import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Flights from "./pages/Flights";

import "react-toastify/dist/ReactToastify.css";
import FlightExplore from "./pages/FlightExplore";

const App = () => {
  return (
    <>
      <div className="font-Nunito overflow-hidden max-w-[1440px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Flights />} />
          <Route path="/explore" element={<FlightExplore />} />
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
