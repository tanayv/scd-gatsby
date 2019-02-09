import React from "react"
import "./two-column.css"


class TwoColumnGrid extends React.Component {

    constructor(props) {
        super(props);
    }
    
    
    render = () => (
        <div className="two-column-grid">
            <div className="grid-column">
            {this.props.paragraphs.map((para) => {
                return (
                    <p class="serif">
                    { para }
                    </p>
                )
            })}
            </div>
            <div className="grid-column">
                <div className="menu">
                    <div className="option">> For Students</div>
                    <div className="option">> For Faculty & Staff</div>
                    <div className="option">> Industry Opportunities</div>
                    <div className="option">> Giving</div>
                    <div className="option">> Join</div>
                </div>
            </div>
        </div>
    )

}

export default TwoColumnGrid
