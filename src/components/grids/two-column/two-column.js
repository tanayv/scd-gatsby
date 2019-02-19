import React from "react"
import "./two-column.css"


class TwoColumnGrid extends React.Component {

    generateColumn = (composition) => {
        let column;
        if (composition.paragraphs) {
            column = composition.paragraphs.map((para, key) => {
                return (
                    <p className="serif" key={key}>
                    { para }
                    </p>
                )
            })
        }
        else if (composition.options) {
            column = 
                <div className="grid-menu">
                    {
                        composition.options.map((option, key) => (
                            <div className="option" key={key}>>{option}</div>
                        ))
                    }
                </div>
        }
        return column;
    }
    
    render = () => (
        <>
        <h2 className="serif">{this.props.title}</h2>
        <div className="two-column-grid">
            <div className="grid-column">
            {this.generateColumn(this.props.left)}
            </div>
            <div className="grid-column">
            {this.generateColumn(this.props.right)}
            </div>
        </div>
        </>
    )

}

export default TwoColumnGrid
