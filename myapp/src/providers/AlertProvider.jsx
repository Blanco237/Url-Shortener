import { useState, createContext } from "react";

export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = (message) => {
    setAlert(message);
    setShowAlert(true);
  };
  const closeAlert = () => {
    setShowAlert(false);
    }
  return (
    <AlertContext.Provider value={{ alert, handleAlert, showAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;