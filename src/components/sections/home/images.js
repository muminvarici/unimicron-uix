import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

// const imageOne = "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png";
// const imageTwo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
// const imageThree = "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg";


export class Images extends React.Component {

  images = [
    require('./../../../assets/images/slider1.jpg'),
    require('./../../../assets/images/slider2_1.jpg'),
  ];
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <AutoplaySlider play={true}
          style={{
            "--slider-height-percentage": "40%",
          }}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3500}
        >
          {this.images.map((item, i) => {
            console.log("Entered");
            // Return the element. Also pass key     
            return (
              <div className="has-shadow" data-src={item} />
            )
          })}
        </AutoplaySlider>
      </>
    );
  }
}
