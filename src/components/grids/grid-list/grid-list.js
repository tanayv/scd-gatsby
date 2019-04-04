import React from "react"
import "./grid-box.css"
import GridBoxSlide from "./grid-box-slide";
import PropTypes from "prop-types"

class GridList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };

    }
    
    render = () => {
        let gridBoxClasses = "grid-box grid-box-theme-" + this.props.theme;
        return (
        <div className={gridBoxClasses}>
            <div className="scd-cw-75">
            <hr className="teal-separator"/>
                {this.props.data.map((slide, key) => (
                    <GridBoxSlide key={key}
                    tabTitle={slide.tabTitle}
                    textTitle={slide.textTitle}
                    paragraphs={slide.paragraphs}
                    image={slide.image}
                    />
                ))}
            </div>
        </div>)
    }

}

GridList.propTypes = {
    data: PropTypes.array
  }

export default GridList
