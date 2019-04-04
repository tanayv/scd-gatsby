import React from "react";
import ImageBlob from "./../image-blob/image-blob";
import "./grids.css";

class StorybookGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gridContents: this.generateDefaultGrid(props.data)
        }
    }

    generateGridElement = (elementData, index) => {
        let gridElement;
        if (index === elementData.titleIndex) {
            console.log("Title Tile");
            gridElement = <div className="grid-element">
                <ImageBlob name={elementData.images[index]} grayscale="true"/>
                <div className="element-contents">
                    <div className="title-slide">
                        <div className="close-button" onClick={(e) => this.restoreGrid(e)}>✕</div>
                        <h1>{elementData.title}</h1>
                    </div>
                </div>
            </div>
        }
        
        else if (index === elementData.descriptionIndex) {
            console.log("Description Tile");
            gridElement = <div className="grid-element">
                <div className="element-contents">
                    <p>{elementData.description}</p>
                </div>
            </div>

        }

        else {
            /* Return just an image */
            console.log("Image Tile");
            gridElement = <div className="grid-element">
                <ImageBlob name={elementData.images[index]}/>
            </div>
        }
        return gridElement;
    }

    transformGrid = (e, gridElement) => {
        e.preventDefault();
        console.log("Grid being transformed...");
        let self = this;
        let newGridContents = <> {
            this.props.data.map((data, i) => (
                self.generateGridElement(gridElement, i)
            ))
        } </>;
        console.log(newGridContents);
        this.setState({gridContents: newGridContents});
    }


    generateDefaultGrid = (data) => {
        let self = this;
        return data.map((elementData, key) => {
            return (
                <div className="grid-element default" key={key} onClick={(e) => this.transformGrid(e, elementData)}>
                    <div class="element-contents">
                        <h1>{elementData.title}</h1>
                    </div>
                    <div className="overlay"/>
                    <ImageBlob name={elementData.mainImage}/>
                </div>
            )

        })
        
    }

    restoreGrid = (e) => {
        e.preventDefault();
        this.setState({gridContents: this.generateDefaultGrid(this.props.data)})
    }

    render = () => {
        
        return (
            <div className="storybook-grid">
                {this.state.gridContents}
            </div>
        )
    }

}

export default StorybookGrid;