import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';

const imageOne = "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png";
const imageTwo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
const imageThree = "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg";

export class Images extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <AwesomeSlider >
          <div data-src={imageOne} />
          <div data-src={imageTwo} />
          <div data-src={imageThree} />
        </AwesomeSlider>
      </>
    );
  }
}
