import React from 'react';
import { Container } from '@material-ui/core';
import './../css/Header.css';

const Header = () => {

  return (
      <>
        <Container maxWidth="lg">
            <div className="headerContent">
                My ChatBot
            </div>
        </Container>
      </>
  );
}

export default Header;
