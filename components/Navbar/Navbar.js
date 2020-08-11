import React, { useState } from 'react';
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  
  Nav,
 
} from 'reactstrap';

import styles from './NavBar.module.scss'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  className={styles.customNav} light expand="md">
          <Link href="/">
          <a>AOF</a>
          </Link>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

          <Link href="/tourisme" passHref>        
                <a>Tourisme</a>               
            </Link>          
                <Link href="/hotels">
                <a >Hotels</a>
                </Link>          
            
                <Link href="/gastronomie">
                <a >Restaurants</a>
                </Link>   

                <Link href="/restaurants">
                <a >Business</a>
                </Link>             
        
          </Nav>
          
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default NavBar;
