import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage";
import Reviews from "./components/Reviews";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
