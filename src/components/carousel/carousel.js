import React from "react"
import CarouselSlide from "./carousel-slide";
import "./carousel.css"

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 5,
            activeSlide: 1
        };
        setInterval(() => {
            if (this.state.activeSlide < 2)
                this.setState({activeSlide: this.state.activeSlide+1 });
            else {
                this.setState({activeSlide: 0 });
            }
        }, this.state.timer * 1000);
    }

    render = () => {
        if (this.props.data) {
            return (
                <div className="carousel">
                    <CarouselSlide image={this.props.data[this.state.activeSlide].image}>
                        <div className="text-container">
                            <div className="scd-cw-75">
                                <div className="tile-display">
                                    <h1>{this.props.data[this.state.activeSlide].title}</h1>
                                    <div className="pagination">
                                        {this.props.data.map((data, key) => {
                                            return (
                                                this.state.activeSlide === key ?
                                                <div className="dot active" key={key} onClick={() => {
                                                    this.setState({activeSlide: key})
                                                }}></div> : <div className="dot" key={key} onClick={() => {
                                                    this.setState({activeSlide: key})
                                                }}></div>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselSlide>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default Carousel