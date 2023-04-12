import NavBar from '../components/Navbar';
import useMovies from '../hooks/useMovies';
import '../styles/MyProfile.css';
import ScreenplayList from './../components/ScreenplayList';
import { useEffect, useState } from 'react';

export default function MyProfile() {
  const movies = useMovies();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      },
    }).then((response) => response.json())
      .then((data) => {
        setUser(data.user)
      })
  }, [])

  console.log(user)

  return (
    <>
      <NavBar />

      <div className='myProfile-container'>
        <div className='myProfile-picture' />

        <div className='myProfile-info'>
          <div className='myProfile-top'>
            <h1 className='myProfile-name'>{user.name}</h1>
            {/* <div className='myProfile-bio'>Information about the user</div> */}
          </div>
          {/* 
          <div className='myProfile-buttons'>
            <button className='myProfile-button'>Followers</button>
            <button className='myProfile-button'>Following</button>
          </div> */}
        </div>
      </div>

      <ScreenplayList screenplays={movies} listTitle={"Liked Movies"} />
      <ScreenplayList screenplays={movies} listTitle={"Followed Movies"} />
    </>
  );
}
