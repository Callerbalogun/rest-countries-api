import Homepage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";
import HeaderComponent from "./components/HeaderComponent";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <section>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:countryName" element={<DetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
