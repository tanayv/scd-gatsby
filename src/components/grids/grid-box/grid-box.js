import React from "react"
import "./grid-box.css"

class GridBox extends React.Component {
    
    render = () => (
        <div className="grid-box">
            <div className="navigation">
                <div className="tab selected">Stories</div>
                <div className="tab">Events</div>
            </div>
        </div>
    )

}

export default GridBox
