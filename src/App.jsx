import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));
const Monkey = lazy(() => import("./Monkey"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="loading-pane">
            <h2 className="loader">:dog:</h2>
          </div>
        }
      >
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
            <Route path="/monkey" element={<Monkey />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
