import React from "react"
import "./snapshot.css"
import ImageBlob from "./../image-blob/image-blob";

class Snapshot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainImage: props.data.mainImage
        };
        this.changeMainImage = this.changeMainImage.bind(this);
    }

    render = () => {
        let self = this;
        return (
            <div className="snapshot">
                <a className="pure-anchor" id={this.props.data.anchor}> </a>
                <h1 className="serif">{this.props.data.heading}</h1>
                <div class="left-column">
                    <div class="main-image">
                        <ImageBlob name={this.state.mainImage}/>
                    </div>
                    {this.props.data.images.map((image, key) => (
                        <div className="thumbnail" key={key} onClick={(e) => self.changeMainImage(e, image)}>
                            <ImageBlob name={image}/>
                        </div>
                    ))}
                </div>
                <div class="right-column">
                    <h1>{this.props.data.title}</h1>
                    <hr className="teal-separator"></hr>
                    {this.props.data.body}
                </div>
            </div>
        )
    }


    changeMainImage = (e, newImage) => {
        e.preventDefault();
        this.setState({mainImage: newImage});
    }
}

export default Snapshot