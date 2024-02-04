import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import ApiProvider from "./context/ApiContext";


const App = () => {
  
  return (
    <div>
      <ApiProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </ApiProvider>
    </div>
  );
};
export default App;
