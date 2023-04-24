import React from "react"
import PropTypes from "prop-types"
import "./Cards.css"

const infoText = {
    card_1_info:
        "Browse as usual, and we’ll take care of the rest. Get bundled private search, tracker blocking, and site encryption, all in one download, for major browsers.",
    card_2_info:
        "Search privately with our app or extension, add private web search to your favorite browser, or search directly at duckduckgo.com.",
    card_3_info:
        "Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforcer, and more. Available on iOS & Android.",
}

function Card({ img, title, info }) {
    return (
        <div className="info_card">
            <img src={img} alt="Laptop" className="img_card" />
            <div className="card_title">{title}</div>
            <div className="card_info">{info}</div>
        </div>
    )
}

function Cards() {
    return (
        <div className="info_cards_cont">
            <Card
                img="src/assets/laptop.svg"
                title="Privacy Browser Extension"
                info={infoText.card_1_info}
            />
            <Card
                img="src/assets/search.svg"
                title="Private Search Engine"
                info={infoText.card_2_info}
            />
            <Card
                img="src/assets/mobile.svg"
                title="Privacy Browser App"
                info={infoText.card_3_info}
            />
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
}

export default Cards
