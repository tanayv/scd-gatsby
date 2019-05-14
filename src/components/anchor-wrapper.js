import React from "react";

const AnchorWrapper = ({ title, anchor, children }) => {
    return (
        <>
            <span className="anchor" id={anchor}></span>
            <h1 className="serif">{title}</h1>
            {children}
        </>
    )

}

export default AnchorWrapper