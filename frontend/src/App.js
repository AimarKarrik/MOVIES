import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./views/MainPage";
import Movies from "./views/Movies";
import TvShows from "./views/TvShows";
import Navbar from "./components/Navbar";
import './App.css'
import SearchResults from "./components/SearchResult";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/search/:query" component={SearchResults} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
