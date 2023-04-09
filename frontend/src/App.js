import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './views/MainPage';
import MyProfile from './views/MyProfile';
import OtherProfile from './views/OtherProfile';
import MovieListPage from './views/MovieListPage';
import ScreenplayDetails from './views/ScreenplayDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/:id' element={<OtherProfile />} />
        <Route path='/movies' element={<MovieListPage />}/>
        <Route path='/Screenplay/:id' element={<ScreenplayDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
