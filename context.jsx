import { createContext, useContext, useState } from "react";
import { data } from "./src/data";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [employees, setEmployees] = useState(data);

  const handleAddNew = (record) => {
    setEmployees([...employees, record]);
    console.log(data);
  };

  return (
    <GlobalContext.Provider value={{ employees, setEmployees, handleAddNew }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
