import React from "react"
import "./three-element-grid.css";
import ImageBlob from "./../../image-blob/image-blob";
import { Link } from "gatsby";

class ThreeElementGrid extends React.Component {
    render = () => (
        <div className="three-grid">
            <h1 className="serif">{this.props.title}</h1>
            {this.props.data.intro}
            <div className="grid-container">
                <div className="grid-column narrow">
                    <Link to={"stories/#" + this.props.data.elements[0].link}>
                        <div className="grid-element">
                            <ImageBlob name={this.props.data.elements[0].image}></ImageBlob>
                            <div className="content">
                                <h1>{this.props.data.elements[0].title}</h1>
                                <hr />
                                <h2>{this.props.data.elements[0].timeline}</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="grid-column wide">
                    <Link to={"stories/#" + this.props.data.elements[1].link}>
                        <div className="grid-element">
                            <ImageBlob name={this.props.data.elements[1].image}></ImageBlob>
                            <div className="content">
                                <h1>{this.props.data.elements[1].title}</h1>
                                <hr />
                                <h2>{this.props.data.elements[1].timeline}</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={"stories/#" + this.props.data.elements[2].link}>
                        <div className="grid-element">
                            <ImageBlob name={this.props.data.elements[2].image}></ImageBlob>
                            <div className="content">
                                <h1>{this.props.data.elements[2].title}</h1>
                                <hr />
                                <h2>{this.props.data.elements[2].timeline}</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ThreeElementGrid