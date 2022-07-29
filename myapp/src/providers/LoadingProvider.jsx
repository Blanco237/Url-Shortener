import { useState, createContext } from "react";

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const handleLoading = (bool) => {
    setLoading(bool);
  };

  return (
    <LoadingContext.Provider value={{ loading, handleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;