import React from "react"
import "./grid-box.css"
import ImageBlob from "../../image-blob/image-blob";

class GridBoxSlide extends React.Component {
    
    render = () => (
        <div className="grid-box-default-slide">
            <div className="image-tile resources">
                <ImageBlob name={this.props.image}/>
            </div>
            <div className="text-container">
                <h1>{this.props.textTitle}</h1>
                <hr/>
                {this.props.paragraphs}
            </div>
        </div>
    )

}

export default GridBoxSlide
