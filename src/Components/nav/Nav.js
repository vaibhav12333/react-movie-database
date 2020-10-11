import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import  './nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';

export const Navb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='blue p-2' expand="md">
      <Link to='/home'>
        <NavbarBrand  className="nav-link">TMDB</NavbarBrand>
        </Link>
        <NavbarToggler className="toggler mr-2 fa fa-list fa-lg text-light" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto text-light" navbar>
              <NavItem>
               <Link to='/movies'> 
                <NavLink className="nav-link">Movies</NavLink>
                </Link>
            </NavItem>
            <NavItem>
               <Link to='/tv-shows'> 
                <NavLink>TV-Shows</NavLink>
                </Link>
            </NavItem>
            <NavItem>
               <Link to='/people'> 
                <NavLink>People</NavLink>
                </Link>
            </NavItem>
              </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

