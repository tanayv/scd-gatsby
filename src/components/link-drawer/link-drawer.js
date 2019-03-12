import React from "react"
import "./link-drawer.css"

class LinkDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeDrawer: 0
        }
    }

    render = () => {
        let self = this;

        return (
        <div className="link-drawer">
            {
                this.props.options.map((option, key) => {
                    if (key === self.state.activeDrawer)
                        return (
                        <div className="option-container" key={key}>
                            <div className="option" onClick={() => {self.setState({activeDrawer: key})}}><span className="bullet">></span>{option.title}</div>
                            <div className="content active">{option.content}</div>
                        </div>
                        )
                    else
                        return (
                        <div className="option-container" key={key}>
                            <div className="option" onClick={() => {self.setState({activeDrawer: key})}}><span className="bullet">></span>{option.title}</div>
                            <div className="content inactive">{option.content}</div>
                        </div>
                        )
                })
            }
        </div>
        )
    }

}

export default LinkDrawer