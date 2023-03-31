import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './views/MainPage';
import MyProfile from './views/MyProfile';
import OtherProfile from './views/OtherProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/:id' element={<OtherProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
