import React, {Component} from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data.json";

import './AboutSection.css';

class AboutSection extends Component {
    render() {

        return(
            <div style={{backgroundColor:this.props.backgroundColor}} >
                <Fullpage>
                    <h3 className="title1" style={{color:this.props.color}}>{data.sections[0].title}</h3>
                    <div className="paragraphs">
                        {data.sections[0].items.map(p =>{
                            return <p>{p.content}</p>;
                        })}
                    </div>
                </Fullpage>
            </div>
        );
    }
}
export default AboutSection