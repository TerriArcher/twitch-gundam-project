import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

function Header (){
    return (
       <Container>
            <Navbar>
                <Row className="Homenavbar">
                    <Col>
                         <Navbar.Brand className="NavItem" href="/">Home</Navbar.Brand>
                         <Navbar.Brand className="NavItem" href="pizza">Gumdan Card Game</Navbar.Brand>
                        <Navbar.Brand className="NavItem" href="#">Bandai Premium Store</Navbar.Brand>
                    </Col>
                </Row>
            </Navbar>
       </Container>
    );
};

export default Header;