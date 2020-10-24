import React, {Component} from 'react';
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import data from "../data.json";

import './SkillSection.css';
import {Element} from "react-scroll";

class SkillSection extends Component {
    render() {
        return(
            <div style={{backgroundColor:this.props.backgroundColor}}>
            <Fullpage>
                <Element name="skill" className="element"> </Element>
                <h3 className="title1" style={{color:this.props.color}}>{data.sections[1].title}</h3>
                <div className="cards-wrapper">
                    {data.sections[1].items.map(eachSkill =>{
                        return(
                            <SkillCard skill={eachSkill} />
                        );
                    })}
                </div>
            </Fullpage>

            </div>
        );
    }
}
export default SkillSection