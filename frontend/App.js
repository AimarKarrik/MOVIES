import "./src/App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./src/MainPage"
import MovieDetails from "./src/MovieDetails"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
      <Route path="Details" element={<MovieDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
