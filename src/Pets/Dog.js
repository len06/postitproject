import './Dog.css';
import { Component, useState } from 'react';

import dogSprite from '../assets/dog.png';


class DogEntity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            flipped: false,
            speed: 3
        };
    }
    componentDidMount() {
        this.interval = setInterval(() =>{
            let distanceToMouse = this.props.mouseX - this.state.x;
            distanceToMouse /= Math.abs(distanceToMouse);
            if (!isNaN(distanceToMouse) && this.props.mouseClicked) {
                this.setState({
                    x: this.state.x + (distanceToMouse * this.state.speed),
                    flipped: (distanceToMouse < 0)? true : false
                });
            }
        }, 33);
    }
    render() {
        const style = {
            left: `${this.state.x}px`,
            bottom: `${this.state.y}px`,
            transform: `scaleX(${this.state.flipped? '-1' : '1'})`
        };
        return(
            <img height={150} className='dog'
                style={style}
                src={dogSprite}/>
        )
    }
}


export function Dog() {
    const [ mouseX, setMouseX ] = useState(0);
    const [ mouseY, setMouseY ] = useState(0);
    const [ mouseClicked, setMouseClicked ] = useState(false);
    function MouseMove(event) {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
    }
    return (
    <div className="play-area" 
        onMouseMove={(e) => MouseMove(e)}
        onMouseDown={() => setMouseClicked(true)}
        onMouseUp={() => setMouseClicked(false)}>
        <DogEntity mouseX={mouseX} mouseY={mouseY} mouseClicked={mouseClicked}/>
    </div>
    );
}