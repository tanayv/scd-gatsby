import React from "react";
import "./grids.css";

class TextSplit extends React.Component {
    render = () => (
        <div className="text-split">
            <div className="left-column">
                {this.props.left}
            </div>
            <div className="right-column">
                {this.props.right}
            </div>
        </div>
    )
}

export default TextSplit