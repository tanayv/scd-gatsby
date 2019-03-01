import React from "react"
import "./grid-box.css"
import GridBoxDefaultSlide from "./default-slide";
import PropTypes from "prop-types"

class GridBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };

    }
    
    render = () => {
        let navigationData = this.props.data ? 
            (
                this.props.data.map((slide, key) => (
                    this.state.activeTab == key ?
                    <div className="tab selected" key={key} onClick={() => {
                        this.setState({activeTab: key})
                    }}>{slide.tabTitle}</div>
                    : <div className="tab" key={key} onClick={() => {
                        this.setState({activeTab: key})
                    }}>{slide.tabTitle}</div>
                ))
            ) : null;

        let activeSlide = this.props.data ?
            (
                <GridBoxDefaultSlide 
                    tabTitle={this.props.data[this.state.activeTab].tabTitle}
                    textTitle={this.props.data[this.state.activeTab].textTitle}
                    paragraphs={this.props.data[this.state.activeTab].paragraphs}
                    links={this.props.data[this.state.activeTab].links}
                    image={this.props.data[this.state.activeTab].image}
                />
            ) : null;

        return (
        <div className={"grid-box" + " grid-box-theme-" + this.props.theme}>
            <div className="scd-cw-75">
                <div className="navigation">
                    {navigationData}
                </div>
                {activeSlide}
            </div>
        </div>)
    }

}

GridBox.propTypes = {
    data: PropTypes.array
  }

export default GridBox
