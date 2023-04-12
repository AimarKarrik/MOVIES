import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './views/MainPage';
import MovieListPage from './views/MovieListPage';
import MyProfile from './views/MyProfile';
import OtherProfile from './views/OtherProfile';
import SearchResults from './views/SearchResults';
import ScreenplayDetails from './views/ScreenplayDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/:id' element={<OtherProfile />} />
        <Route path='/movies' element={<MovieListPage />} />
        <Route path='/Screenplay/:id' element={<ScreenplayDetails />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/search/:query' element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
