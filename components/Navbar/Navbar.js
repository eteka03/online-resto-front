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
          <a>Online-resto</a>
          </Link>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

          <Link href="/about" passHref>        
                <a>about</a>               
            </Link>          
                
          </Nav>
          
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default NavBar;
