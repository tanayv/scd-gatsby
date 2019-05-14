import React from "react";
import ImageBlob from "./../image-blob/image-blob";

import "./grids.css";

class PeopleGrid extends React.Component {
    render = () => {

        let peopleGridClasses = "people-grid";

        if (this.props.special === "only-two")
            peopleGridClasses += " only-two";



        return (
            <>
            <div className={peopleGridClasses}>
                {this.props.data.map((person, key) => {
                    return (
                        <div className="card" key={key}>
                            <div className="image-holder">
                                <ImageBlob name={person.image}/>
                            </div>
                            <span className="person-name">{person.name}</span>
                            <span className="person-role">{person.role}</span>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }
}

export default PeopleGrid