import React from "react"
import "./snapshot.css"
import ImageBlob from "./../image-blob/image-blob";
import Hammer from "react-hammerjs";

class Snapshot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainImage: props.data.mainImage
        };
        this.changeMainImage = this.changeMainImage.bind(this);
        this.incrementMainImage = this.incrementMainImage.bind(this);
        this.handleSwipe = this.handleSwipe.bind(this);
    }


    render = () => {
        let self = this;
        let anchorId = this.props.data.anchor|| "";
        let imageClasses = "main-image";


        if (this.props.shape === "square")
            imageClasses += " square";

        /** Determine if line/hr is needed based on title */
        let rightColumn;
        if (this.props.data.title)
            rightColumn = <div className="right-column">
                <h1>{this.props.data.title}</h1>
                <h2 className="italics">{this.props.data.italics}</h2>
                <hr className="teal-separator"></hr>
                {this.props.data.body}
            </div>;
        else 
            rightColumn = <div className="right-column">
                {this.props.data.body}
            </div>

        /** Determine if arrows are needed on image depending on number of thumbnails */
        let imageContainer;
        if (this.props.data.images.length <= 1) {
            imageContainer = <div className={imageClasses}>
                <ImageBlob name={this.state.mainImage}/>
            </div>;
        }


        else {
            imageContainer = <Hammer onSwipe={(e) => this.handleSwipe(e, e.velocityX)}><div className={imageClasses + " snapshot-swiper"}>
                <ImageBlob name={this.state.mainImage}/>
                <div className="arrow-container">
                    <div className="arrow-circle" onClick={(e) =>
                        this.incrementMainImage(e, -1)}>
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div className="arrow-circle" onClick={(e) =>
                        this.incrementMainImage(e, 1)}>
                        <i className="fas fa-angle-right"></i>
                    </div>
                </div>
            </div></Hammer>;
        }

        return (
            <div className="snapshot">
                <span className="anchor" id={anchorId}></span>
                {this.props.data.heading? <h1 className="serif" >{this.props.data.heading}</h1> : <></> }
                    <div className="left-column">
                        {imageContainer}
                        {this.props.data.images.map((image, key) => (
                            <div className="thumbnail" key={key} onClick={(e) => self.changeMainImage(e, image)}>
                                <ImageBlob name={image}/>
                            </div>
                        ))}
                    </div>
                    {rightColumn}
                </div>
        )
    }


    changeMainImage = (e, newImage) => {
        e.preventDefault();
        this.setState({mainImage: newImage});
    }

    incrementMainImage = (e, increment) => {
        e.preventDefault();

        /** Get current increment */
        let index = this.props.data.images.indexOf(this.state.mainImage);

        let newImageIndex = index; 

        if (index !== -1) {
            /** Implement edge cases */

            // Move to last image if -1 after first image
            if (index === 0 && increment === -1)
                newImageIndex = this.props.data.images.length - 1;
            
            // Move to first image if +ve after last image
            else if (index === this.props.data.images.length - 1 && increment === 1)
                newImageIndex = 0;

            else {
                newImageIndex = index + increment;
            }
        }

        this.setState({mainImage: this.props.data.images[newImageIndex]});

    }


    handleSwipe = (e, velocityX) => {
        e.preventDefault();
        if (velocityX > 0) 
            this.incrementMainImage(e, -1)
        else
            this.incrementMainImage(e, 1)

    }
}

export default Snapshot