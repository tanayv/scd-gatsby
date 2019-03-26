import React from "react"
import "./two-column.css"


class TwoColumnGrid extends React.Component {

    render = () => (
        <>
        <div className="scd-cw-75">
            <h2 className="serif">{this.props.title}</h2>
            <hr/>
            <div className="two-column-grid">
                <div className="grid-column">
                {this.props.left}
                </div>
                <div className="grid-column">
                {this.props.right}
                </div>
            </div>
        </div>
        </>
    )

}

export default TwoColumnGrid
