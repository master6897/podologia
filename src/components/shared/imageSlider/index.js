import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './style.css';


const ImageSlider = (props) => {
    console.log(props.slideImages);
    return (
      <div className="slide-container">
        <Slide easing="ease">
         {props.slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div>
                <span>{slideImage.caption}</span>
                <img src={slideImage.img} alt="Schorzenie"></img>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default ImageSlider;