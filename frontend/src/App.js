import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< Updated upstream
import MainPage from './views/MainPage';
import MyProfile from './views/MyProfile';
import OtherProfile from './views/OtherProfile';
<<<<<<< Updated upstream
=======
import MovieListPage from './views/MovieListPage';
import ScreenplayDetails from './views/ScreenplayDetails';
=======
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './views/MainPage';
import MovieListPage from './views/MovieListPage';
import MyProfile from './views/MyProfile';
import OtherProfile from './views/OtherProfile';
import ScreenplayDetails from './views/ScreenplayDetails';
import SearchResults from './views/SearchResults';
>>>>>>> Stashed changes
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/:id' element={<OtherProfile />} />
<<<<<<< Updated upstream
=======
        <Route path='/movies' element={<MovieListPage />} />
        <Route path='/Screenplay/:id' element={<ScreenplayDetails />} />
<<<<<<< Updated upstream
=======
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/search/:query' element={<SearchResults />} />
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default App;
