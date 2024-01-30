import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Home from "./Pages/Home";
import ListSurah from "./Organizm/ListSurah";
import ReadQuran from "./Organizm/ReadQuran";
import SingleSurat from "./Organizm/SingleSurat";
import Sidebar from "./Organizm/Sidebar"; // Import Sidebar component

function App() {
  const queryClient = new QueryClient();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateWindowSize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* Conditional Rendering */}
        {isDesktop ? (
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="surat" element={<ReadQuran />}>
                <Route path=":id" element={<SingleSurat />} />
              </Route>
              <Route path="bookmarks" element={<h1>Bookmarks</h1>} />
              <Route path="Setting" element={<h1>Setting</h1>} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="surat" element={<ListSurah />} />
            <Route path="surat/:id" element={<SingleSurat />} />
            <Route path="*" element={<h1>No Route match</h1>} />
          </Routes>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
