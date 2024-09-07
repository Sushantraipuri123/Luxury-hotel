import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import './Header.css';  
import logo from '/logo.png'; 
import {Link} from 'react-router-dom'


function Header() {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false); // Collapse the navbar
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expanded={expanded} expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <Container>
                <Navbar.Brand as={Link} to='/' >
                <img src={logo} alt="LUXURY " className='logo-nav' />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)} // Toggle navbar expansion
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center navbar-nav">
                        <Nav.Link as={Link} to='/'  className='nav-link-item josefin' onClick={handleLinkClick}>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about' className='nav-link-item josefin' onClick={handleLinkClick}>About</Nav.Link>
                        <Nav.Link as={Link} to='/rooms' className='nav-link-item josefin' onClick={handleLinkClick}>Rooms</Nav.Link>

                        {/* First Dropdown */}
                        <div className="custom-dropdown">
                            <button className="dropdown-toggle nav-link-item josefin">Pages</button>
                            <ul className="dropdown-menu ">
                                <li><Link to="spa"  className='nav-link-item josefin'  onClick={handleLinkClick}> SPA</Link></li>
                                <li><Link to="faq"  className='nav-link-item josefin'  onClick={handleLinkClick}> SPA FAQ's</Link></li>
                                <li><Link to="team"  className='nav-link-item josefin'  onClick={handleLinkClick}> Team</Link></li>
                                <li><Link to='/mission'  className='nav-link-item josefin'  onClick={handleLinkClick}>Mission</Link></li>

                            </ul>
                        </div>

                        {/* <div className="custom-dropdown">
                            <button className="dropdown-toggle nav-link-item josefin">Dropdown 2</button>
                            <ul className="dropdown-menu">
                                <li><Link to="/mission"  className='nav-link-item josefin'  onClick={handleLinkClick}>Action 2</Link></li>
                                <li><Link to="#action/2.2"  className='nav-link-item josefin'  onClick={handleLinkClick}> action 2</Link></li>
                                <li><Link to="#action/2.3"  className='nav-link-item josefin'  onClick={handleLinkClick}>  here 2</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="#action/2.4"  className='nav-link-item josefin'  onClick={handleLinkClick}> link 2</Link></li>
                            </ul>
                        </div>

                        <div className="custom-dropdown">
                            <button className="dropdown-toggle nav-link-item josefin">Dropdown 3</button>
                            <ul className="dropdown-menu">
                                <li><Link to="#action/3.1"  className='nav-link-item josefin'  onClick={handleLinkClick}>Action 3</Link></li>
                                <li><Link to="#action/3.2"  className='nav-link-item josefin'  onClick={handleLinkClick}> action 3</Link></li>
                                <li><Link to="#action/3.3"  className='nav-link-item josefin'  onClick={handleLinkClick}>  here 3</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="#action/3.4"  className='nav-link-item josefin'  onClick={handleLinkClick}> link 3</Link></li>
                            </ul>
                        </div> */}
                        <Nav.Link as={Link} to='/contact' className='nav-link-item josefin' onClick={handleLinkClick}>Contact</Nav.Link>
                            <Link to='/booknow'>
                        <button className='btn-navbar josefin ms-2'>
                            Book Now
                        </button>
                        </Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
