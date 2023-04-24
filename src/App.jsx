import React from "react"
import logo from "./assets/logoduck.svg"
import monster from "./assets/monster.svg"
import speaker from "./assets/speaker.png"
import menu from "./assets/menu.png"
import "./App.css"
import { Textdesc, Textdescparagraph } from "./Textdesc"
import InfoCards from "./Cards"
import Button from "./Button"
import Input from "./SearchBar"

function App() {
    return (
        <div className="App">
            <div className="fondoup">
                <div className="menu">
                    <button className="menu_item" type="button">
                        <img src={speaker} alt="Menu speaker" />
                    </button>
                    <button className="menu_item" type="button">
                        <img src={menu} alt="Menu hamburguer" />
                    </button>
                </div>
                <div className="logo">
                    <img
                        src={logo}
                        alt="DuckDuckGo logo"
                        className="main_logo"
                    />
                </div>
                <Input />
                <Textdesc className="textdesc">
                    Tired of being tracked online? We can help.
                </Textdesc>
                <Textdescparagraph className="textdesc">
                    We don&apos;t store your personal info. We don&apos;t follow
                    you around with ads. We don&apos;t track you. Ever.
                </Textdescparagraph>
                <div className="buttons">
                    <Button className="blue">
                        Download DuckDuckGo for Mac
                    </Button>
                    <Button className="blue">Add DuckDuckGo to Safari</Button>
                </div>
                <Textdescparagraph className="textdescpar">
                    Trusted by tens of millions worldwide!
                </Textdescparagraph>
                <Textdesc className="textdesc">
                    Privacy Protection For Any Device
                </Textdesc>
                <svg
                    className="curva"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1438 134"
                >
                    <path
                        d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <div className="fondodown">
                <InfoCards />
                <Textdesc className="textdesc">
                    We don&apos;t store your personal information. Ever.
                </Textdesc>
                <Textdescparagraph className="textdesc">
                    Our privacy policy is simple: we don&apos;t collect or share
                    any of your personal information
                </Textdescparagraph>
                <Button className="green">Add DuckDuckGo to Safari </Button>
                <img src={monster} alt="Monster de duckduckgo" />
            </div>
            <div className="footer">
                <Textdesc className="textdesc">
                    Frequently Asked Questions
                </Textdesc>
                <div>
                    <ul>
                        <li>How does DuckDuckGo make money?</li>
                        <li>What does Google know about me?</li>
                        <li>Why use DuckDuckGo instead of Google?</li>
                        <li>
                            How do DuckDuckGo search results compare to Googles?
                        </li>
                        <li>
                            Is DuckDuckGo an &quot;unfiltered&quot; search
                            engine?
                        </li>
                        <li>Is DuckDuckGo owned by Google?</li>
                        <li>
                            Whats the difference between using DuckDuckGo and
                            Incognito mode?
                        </li>
                        <li>How popular is DuckDuckGo?</li>
                        <li>How does the DuckDuckGo app & extension work?</li>
                    </ul>
                </div>
                <Button className="blue">Add DuckDuckGo to Safari</Button>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default App
