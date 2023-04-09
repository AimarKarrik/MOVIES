import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../assets/graphics/imgs/movie-app logo.png';
import profile from '../assets/images/profile1.jpg';
import '../styles/Navbar.css';

function NavBar() {
  return (
    <Navbar expand='lg'>
      <Container className='nav-container'>
        <NavLink className='logo' to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='navlink' to='/movies'>
              Movies
            </NavLink>
            <NavLink className='navlink' to='/tvshows'>
              TV Shows
            </NavLink>
            <NavLink className='navlink' to='/reviews'>
              Reviews
            </NavLink>
          </Nav>
          <div className='search-box'>
            <button className='btn-search'>
              <FaSearch></FaSearch>
            </button>
            <input
              type='text'
              className='input-search'
              placeholder='Type to Search...'
            ></input>
          </div>
          <NavLink className='profile' to='/profile'>
            <img src={profile} alt='profile' />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
