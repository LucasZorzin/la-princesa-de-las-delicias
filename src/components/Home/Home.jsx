import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.scss';

function Home() {
    return (
        <>
            <section id="home">
                <div className="layer">
                    <div className="home__carousel">
                        <h1>La Princesa <br /> De Las Delicias</h1>
                        <a href="#productos"><button>VER PRODUCTOS</button></a>
                    </div>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <div className="background3"></div>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <div className="background1"></div>
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            <div className="background2"></div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    );
}

export default Home;