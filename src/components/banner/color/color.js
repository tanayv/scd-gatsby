import React from "react";
import "./color.css";

class ColorBanner extends React.Component {
    render = () => (
        <div className={"color-banner " + this.props.theme}>
        {this.props.text}
        </div>
    )
}

export default ColorBanner