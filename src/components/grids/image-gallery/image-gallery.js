import React from "react"
import "./image-gallery.css"

class ImageGallery extends React.Component {
    render = () => (
        <>
            <div className="scd-cw-75">
                <div class="image-gallery">
                    {this.props.data.map((tile, key) => (
                        <div className="tile" key={key}>
                            <h1>{tile.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImageGallery