import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/graphics/imgs/movie-app logo.png';
import '../styles/Navbar.css';
import profile from '../assets/images/profile1.jpg';
import { NavLink } from 'react-router-dom';
import SearchPage from './SearchPage';

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container className='nav-container'>
        <Nav.Link className='logo' to="/">
          <img
            src={logo}
            alt="logo"
          />
        </Nav.Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='navlink' to="/movies">Movies</NavLink>
            <NavLink className='navlink' to="/tvshows">TV Shows</NavLink>
            <NavLink className='navlink' to="/reviews">Reviews</NavLink>
          </Nav>
          <SearchPage />
          <NavLink className='profile' to="/profile">
          <img
            src={profile}
            alt="profile"
          />
        </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;