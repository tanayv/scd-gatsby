import React from "react"
import "./link-drawer.css"

class LinkDrawer extends React.Component {
    render = () => {
        return (
        <div className="link-drawer">
            {
                this.props.options.map((option, key) => (
                    <div className="option" key={key}><span className="bullet">></span>{option}</div>
                ))
            }
        </div>
        )
    }
}

export default LinkDrawer