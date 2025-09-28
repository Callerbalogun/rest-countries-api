import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderComponent, Loader } from "./components";

function App() {
  const HomePage = lazy(() => import("./pages/Homepage"));
  const DetailsPage = lazy(() => import("./pages/DetailsPage"));
  const ErrorPage = lazy(() => import("./pages/ErrorPage"));

  return (
    <div className="App">
      <HeaderComponent />
      <section>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:countryName" element={<DetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </section>
    </div>
  );
}

export default App;
