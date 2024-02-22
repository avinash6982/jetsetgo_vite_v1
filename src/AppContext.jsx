import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [data, setData] = useState({
    airlines: [],
    airports: [],
    isLoading: false,
  });
  const updateData = (data) =>
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));

  const setAirlines = (data) => updateData({ airlines: data });
  const setAirports = (data) => updateData({ airports: data });

  const setLoading = (state) =>
    updateData({
      isLoading: state,
    });

  const overlayData = {
    data,
    setAirlines,
    setAirports,
    setLoading,
  };

  return <AppContext.Provider value={overlayData} {...props} />;
};

const useOverlay = () => useContext(AppContext);

export { AppContextProvider, useOverlay };
