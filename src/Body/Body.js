import './Body.css';
import ImageHostImage from '../images/imagehost.png'
import React from 'react';

function Body(){

    return(
        <div className="bodyWrapper">
            <div className="title">
                Technical Projects
            </div>
            <div className='projectWrapper'>
                <div className='project'>
                    <a href="http://ec2-3-86-148-247.compute-1.amazonaws.com:3000/"  target="_blank" rel="noopener noreferrer" className='overlay'>
                        <div className='overlayContent'>Image Host</div>
                    </a>
                    <img className='projectImage'src={ImageHostImage}></img>
                </div>
            </div>
        </div>
    )
}

export default Body;