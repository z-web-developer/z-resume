import React, {Component} from 'react';
import { Link, Element } from 'react-scroll';

class Navigation extends Component{

     changeColor = () =>{
        this.setState({
            color: this.setState.color ==='#B01712'?'#ffffff':'#B01712',
            backgroundColor: this.setState.backgroundColor === '#ffffff'? '#999999':'#ffffff'
        })
    }

    render() {

        return(
            <div className="navigation">
                <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <div className="nav-item">Skills</div>
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <div className="nav-item">About</div>
                </Link>
                <div className="color-me" onClick={() =>this.changeColor()}>
                    Color Me &#127971;
                </div>

            </div>
        )
    }
}
export default Navigation