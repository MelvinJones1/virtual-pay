import { createContext, useState } from "react";

export const NameContext = createContext();

const DashboardProvider = ({ children }) => {
  const [name, setName] = useState("");

  const updateName = (newValue) => {
    setName(newValue);
  };
  return (
    <NameContext.Provider value={{ name, updateName }}>
      {children}
    </NameContext.Provider>
  );
};

export default DashboardProvider;
