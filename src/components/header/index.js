import React, { useState, useEffect } from 'react';
import styles from "./styles.module.scss";
import LargeHeader from "./largeHeader";
import MobileHeader from "./mobileHeader";
import MobileNavbar from './mobileNavbar';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
      };
  
      // Initial check on component mount
      handleResize();
  
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the resize event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <>
            {isMobile ? <MobileNavbar /> : ""}
            {isMobile ? <MobileHeader /> : <LargeHeader />}
        </>
    )
}

export default Header;