import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import { Pet } from "./APIResponsesTypes";
import Details from "./Details";
import Monkey from "./Monkey";
import SearchParams from "./SearchParams";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null as Pet | null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}
const root = createRoot(container);
root.render(<App />);
