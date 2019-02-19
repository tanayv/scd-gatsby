import React from "react"
import "./grid-box.css"

class GridBox extends React.Component {
    
    render = () => (
        <div className="grid-box">
            <div className="navigation">
                {
                    this.props.tabs.map((tab, key) => (
                        <div className="tab" key={key}>{tab}</div>
                    ))
                }
            </div>
            {this.props.children}
        </div>
    )

}

export default GridBox