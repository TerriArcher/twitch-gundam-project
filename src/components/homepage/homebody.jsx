import React from "react";
import { Container, Cards, Image, Row, Col } from "react-bootstrap";



function HomeBody () {
    let gundam = "https://www.gundam-gcg.com/en/images/products/limitedbox-beta/card_01.webp"
    let amuro = "https://www.gundam-gcg.com/en/images/products/limitedbox-beta/card_04.webp"
    let witch = "https://www.gundam-gcg.com/en/images/products/limitedbox-beta/card_06.webp"
    let url = ""
    let gundamLogo = "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/gundamlogo.png"


    return(
        <>
        <Container className="page-title">

            <h2>~Gundam is cool~</h2>
        </Container>

        <Container className="Gundam-Logo">
            <Image src={gundamLogo} fluid/>
        </Container>

        <Container className="home-text">
            <Row>
                <Col>
                    <p>With the recent announcement of the Gundam Card game, this project serves as an appreciation page for both the game and for gundam!</p>
                    <p>Come code with us on Twitch @ {url}
                    </p>
                </Col>
            </Row>
        </Container>
        <Container >
            <Row class="mx-auto d-block">
                <Col >
                    <Image className="home-image" src={gundam} />
                </Col>
                <Col>
                    <Image className="home-image" src={amuro} rounded />
                </Col>
                <Col>
                    <Image className="home-image" src={witch} rounded />
                </Col>
            </Row>
        </Container>
        </>

    );
}

export default HomeBody; 