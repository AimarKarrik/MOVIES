import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/graphics/imgs/movie-app logo.png';
import '../styles/Navbar.css'


function NavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Nav.Link className='logo' to="/">
        <img
			src={logo}
			alt="logo"
		/>
        </Nav.Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navlink' href="#movies">Movies</Nav.Link>
            <Nav.Link className='navlink' href="#tvshows">TV shows</Nav.Link>
            <Nav.Link className='navlink' href="#mylist">My List</Nav.Link>
            <Nav.Link className='navlink' href="#categories">Categories</Nav.Link>
            </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;