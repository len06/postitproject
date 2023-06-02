import './Dog.css';

import dogSprite from '../assets/dog.png';

export function Dog() {
    return (
    <div className="play-area">
       <img src={dogSprite}/>
    </div>
    );
}