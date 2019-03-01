import React from "react"
import "./grid-box.css"
import ImageBlob from "./image-blob";

class GridBoxDefaultSlide extends React.Component {
    
    render = () => (
        <div className="grid-box-default-slide">
            <div className="image-tile resources">
                <ImageBlob name={this.props.image}/>
            </div>
            <div className="text-container">
                <h1>{this.props.textTitle}</h1>
                <hr/>
                {this.props.paragraphs.map((para, key) => (
                    <p className="serif" key={key}>
                        {para}
                    </p>
                ))}
                {this.props.links.map((link, key) => (
                    <a href={link.url} key={key}>
                        {link.display}
                    </a>
                ))}
            </div>
        </div>
    )

}

export default GridBoxDefaultSlide