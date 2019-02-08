import React from "react"

class TwoColumnGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colorSet: ["#69C8C4", "#A5228E", "#E74B26"]
        };
    }
    
    
    render = () => (
        <div className="banner">
            <div className="light-block">
            </div>
            {this.state.colorSet.map((color, key) => (
                <h1 style={
                    {
                        "color": color
                    }
                } key={key}>Hello!</h1>
            ))}
        </div>
    )

}

export default TwoColumnGrid
