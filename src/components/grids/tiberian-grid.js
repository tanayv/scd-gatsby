import React from "react";
import ImageBlob from "./../image-blob/image-blob";
import "./grids.css";

class TiberianGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedElements: [],
            gridContents: this.generateDefaultGrid(props.data)
        };
        
    }

    generateGridElement = (elementData, index, selectedElements) => {
        let gridElement;
        if (selectedElements.indexOf(index) != -1) {
            // This element is selected
            gridElement = <div className="grid-element" key={index}>
                <ImageBlob name={elementData.image} grayscale="true"/>
                <div className="element-contents">
                    <div className="title-slide">
                        <div className="close-button" onClick={(e) => this.restoreGrid(e)}>✕</div>
                        <h2>{elementData.titlePosition}</h2>
                        <h1>{elementData.titleOps}</h1>
                        <p>{elementData.description}</p>           
                        <a href="/asdjsadojosjd">Apply here</a>
                    </div>
                </div>
            </div>
        }
        
        else {
            gridElement = <div className="grid-element" key={index}>
                
                <div className="element-contents">
                    <h2>{elementData.titlePosition}</h2>
                    <h1>{elementData.titleOps}</h1>
                </div>
                <div className="overlay gray"/>
                <ImageBlob name={elementData.image} grayscale="true"/>
            </div>

        }
        console.log("Grid element generated", gridElement);
        return gridElement;
    }

    activateGridElement = (e, index) => {
        e.preventDefault();
        let selectedElements = this.state.selectedElements;
        if (selectedElements.indexOf(index) === -1)
            selectedElements.push(index);
        else
            console.log("Error: Element already selected");
        this.setState({selectedElements: selectedElements});
    }


    generateDefaultGrid = (data) => {
        let self = this;
        let newGridContents = <> {
            data.map((dataPoint, i) => (
                self.generateGridElement(dataPoint, i, [])
            ))
        } </>;
        return newGridContents;
    }


    render = () => {
        
        return (
            <div className="tiberian-grid">
                {this.state.gridContents}
            </div>
        )
    }

}

export default TiberianGrid;