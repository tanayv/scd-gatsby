import React from "react"
import "./three-element-grid.css";
import ImageBlob from "./../../image-blob/image-blob";

class ThreeElementGrid extends React.Component {
    render = () => (
        <div className="three-grid">
            <div className="scd-cw-75">
                <hr class="main-divider"/>
                {this.props.data.intro}
                <div className="grid-container">
                    <div className="grid-column narrow">
                        <div className="grid-element">
                            <ImageBlob name={this.props.data.elements[0].image}></ImageBlob>
                            <div className="content">
                                <h1>{this.props.data.elements[0].title}</h1>
                                <hr/>
                                <h2>{this.props.data.elements[0].timeline}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid-column wide">
                        <div className="grid-element">
                            <ImageBlob name={this.props.data.elements[1].image}></ImageBlob>
                            <div className="content">
                                <h1>{this.props.data.elements[1].title}</h1>
                                <hr/>
                                <h2>{this.props.data.elements[1].timeline}</h2>
                            </div>
                        </div>
                        <div className="grid-element">
                            <ImageBlob name={this.props.data.elements[2].image}></ImageBlob>
                            <div className="content">
                                <h1>{this.props.data.elements[2].title}</h1>
                                <hr/>
                                <h2>{this.props.data.elements[2].timeline}</h2>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default ThreeElementGrid