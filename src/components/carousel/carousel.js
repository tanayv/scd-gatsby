import React from "react"
import CarouselSlide from "./carousel-slide";
import "./carousel.css"

const Carousel = (data) => (
    <div className="carousel">
        <CarouselSlide slideNumber="carousel3">
            <div className="tile-display">
                <h1>Welcome to the Siebel Center for Design</h1>
                <div className="pagination">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </CarouselSlide>
    </div>
)

export default Carousel
