import React, {Component} from 'react';
import data from "./data.json";

import './App.css';
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import TitlesSection from "./sections/TitlesSection";

import {Element, Link} from "react-scroll";

class App extends Component {

    constructor() {
        super();
        this.state ={
            color : '#B01712',
            backgroundColor:'#ffffff'
        }

    }

    changeColor = () =>{
        this.setState({

            color: this.state.color ==='#B01712'?'#ffffff': '#B01712',
            backgroundColor: this.state.backgroundColor === '#ffffff'? '#aaaaaa':'#ffffff'

        })
    }

    render() {


        return(
            <div className="App">
                <div className="navigation">
                    <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <div className="nav-item">Skills</div>
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <div className="nav-item">About</div>
                    </Link>
                    <div className="color-me" onClick={() =>{this.changeColor()}}>
                        Color Me &#127971;
                    </div>

                </div>
                <TitlesSection color={this.state.color} backgroundColor={this.state.backgroundColor} />
                <AboutSection color={this.state.color} backgroundColor={this.state.backgroundColor} />
                <SkillSection color={this.state.color} backgroundColor={this.state.backgroundColor} />
            </div>
        )
    }
}

export default App;
