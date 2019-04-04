import React from "react"
import "./link-drawer.css"

class LinkDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeDrawer: -1
        }
    }

    toggleDrawer = (e, key) => {
        e.preventDefault();
        if (this.state.activeDrawer === key)
            this.setState({activeDrawer: -1});
        else
            this.setState({activeDrawer: key})
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
                            <div className="option" onClick={(e) => self.toggleDrawer(e, key)}><span className="bullet"></span>{option.title}<Chevron status="active"/></div>
                            <div className="content active">{option.content}</div>
                        </div>
                        )
                    else
                        return (
                        <div className="option-container" key={key}>
                            <div className="option" onClick={(e) => self.toggleDrawer(e, key)}><span className="bullet"></span>{option.title}<Chevron status="inactive"/></div>
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

class Chevron extends React.Component {
    render = () => {
        if (this.props.status === "active")
            return (<div className="chevron"><i class="fas fa-chevron-up"></i></div>)
        else
            return (<div className="chevron"><i class="fas fa-chevron-down"></i></div>)
    }
}