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
        let anchorId = this.props.data.anchor|| "";
        let rightColumn;
        if (this.props.data.title)
            rightColumn = <div className="right-column">
                <h1>{this.props.data.title}</h1>
                <hr className="teal-separator"></hr>
                {this.props.data.body}
            </div>;
        else 
            rightColumn = <div className="right-column">
                {this.props.data.body}
            </div>
        return (
            <div className="snapshot" id={anchorId}>
                <h1 className="serif" >{this.props.data.heading}</h1>
                    <div className="left-column">
                        <div className="main-image">
                            <ImageBlob name={this.state.mainImage}/>
                        </div>
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
}

export default Snapshot