import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Home from "./Pages/Home";
import ListSurah from "./Organizm/ListSurah";
import ReadQuran from "./Organizm/ReadQuran";
import SingleSurat from "./Organizm/SingleSurat";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="surat" element={<ReadQuran />}>
              <Route path=":id" element={<SingleSurat />} />
            </Route>
            <Route path="bookmarks" element={<h1>Bokkmarks</h1>} />
            <Route path="Setting" element={<h1>setting</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
