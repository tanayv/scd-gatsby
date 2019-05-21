import React from "react"
import CarouselSlide from "./carousel-slide";
import "./carousel.css"
import { Link } from "gatsby"

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 4,
            activeSlide: 2,
            carouselSubscription: {}
        };
        this.state.carouselSubscription = setInterval(() => {
            if (this.state.activeSlide < 4)
                this.setState({activeSlide: this.state.activeSlide+1 });
            else {
                this.setState({activeSlide: 0 });
            }
        }, this.state.timer * 1000);
    }


    componentWillUnmount() {
        clearInterval(this.state.carouselSubscription);
    }

    render = () => {



        if (this.props.data) {
            return (
                    <div className="carousel">
                        
                        <CarouselSlide image={this.props.data[this.state.activeSlide].image} link={this.props.data[this.state.activeSlide].link}>
                            <div className={this.generateContainerStyles(this.props.data[this.state.activeSlide].transparent)}>
                                <div className="scd-cw-75">
                                    <div className="tile-display">
                                        <Link to={this.props.data[this.state.activeSlide].link}>
                                            <h1>{this.props.data[this.state.activeSlide].title}</h1>
                                        </Link>
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

    generateContainerStyles = (transparency) => {
        if (transparency === "true")
            return "text-container transparent"
        else 
            return "text-container"
    }
}

export default Carousel
