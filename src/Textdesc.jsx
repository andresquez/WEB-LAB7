import React from "react"
import PropTypes from "prop-types"
import "./Textdesc.css"

function Textdesc({ children }) {
    return (
        <div className="textdesc">
            <h2>{children}</h2>
        </div>
    )
}

function Textdescparagraph({ children }) {
    return (
        <div className="textdesc">
            <p>{children}</p>
        </div>
    )
}

Textdesc.propTypes = {
    children: PropTypes.node.isRequired,
}

Textdescparagraph.propTypes = {
    children: PropTypes.node.isRequired,
}

export { Textdesc, Textdescparagraph }
