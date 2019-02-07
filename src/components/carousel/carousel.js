import React from "react"
import CarouselSlide from "./carousel-slide";
import "./carousel.css"

const Carousel = (data) => (
    <div class="carousel">
        <CarouselSlide slideNumber="carousel3">
            <div class="tile-display">
                <h1>Welcome to the Siebel Center for Design</h1>
                <div class="pagination">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        </CarouselSlide>
    </div>
)

export default Carousel
