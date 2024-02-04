import { useEffect, useState } from "react";
import { createContext } from "react";

const url = "/photos.json";

export const ApiContext = createContext();

function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);

  const apiInfo = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setApiData(data.photos);
  };

  useEffect(() => {
    apiInfo();
  }, []);

  return (
    <ApiContext.Provider value={{ apiData, setApiData }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
