import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './views/MainPage';
import MyProfile from './views/MyProfile';
import OtherProfile from './views/OtherProfile';
import MovieListPage from './views/MovieListPage';
import ScreenplayDetails from './views/ScreenplayDetails';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/:id' element={<OtherProfile />} />
        <Route path='/movies' element={<MovieListPage />}/>
        <Route path='/Screenplay/:id' element={<ScreenplayDetails />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
