import React from 'react';
import Container from "react-bootstrap/Container";
import Menubar from "../components/Menubar";
import Maincontent from "../components/Maincontent";


const login = () => {
  return (
    <div className="App">
      <Container fluid="true">
        <Menubar />
        <div className="main-content">
          <Maincontent />
        </div>
      </Container>
    </div>
  )
}

export default login