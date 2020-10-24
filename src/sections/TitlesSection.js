import React, {Component} from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import {SocialIcon} from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from 'react-scroll';


import "./TitlesSection.css";

class TitlesSection extends Component {


    render() {

        return(
            <div style={{backgroundColor:this.props.backgroundColor}} >
            <Fullpage>
                <h1 style={{color:this.props.color}}>{data.title}</h1>
                <div>
                    <h2>{data.subtitle}</h2>
                </div>
                <div className="icons-wrapper">
                    {
                        Object.keys(data.links).map(key =>{
                            return(
                                <div className="icon">
                                    <SocialIcon url={data.links[key]} />
                                </div>
                            );
                        })
                    }
                </div>
            </Fullpage>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <DownIcon icon={data.icons.down} onClick={()=> console.log("im working")} />
                </Link>
                <Element name="about" className="element"> </Element>

            </div>
        )
    }
}
export default TitlesSection