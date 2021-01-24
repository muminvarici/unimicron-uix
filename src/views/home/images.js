import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';

const imageOne="logo512.png" ;
const imageTwo="logo512.png" ;
const imageThree="logo512.png" ;
 
export class  Images extends React.Component { 
    constructor() {
        super()
      }

      render() {
    return (   
     <>
       <AwesomeSlider >
        <div data-src={imageOne} />
        <div data-src={imageOne} />
        <div data-src={imageOne} />
    </AwesomeSlider>
     </>
     );
    }
}
