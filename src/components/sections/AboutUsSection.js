import React, { useContext } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { getLanguageText } from '../../languages/languages';
import { LanguageContext } from '../../App';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const AboutUsSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const languageContext = useContext(LanguageContext);

  const outerClasses = classNames(
    // 'features-tiles section illustration-section-01',
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Build up the whole picture',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <Image className="reveal-from-top" data-reveal-delay="300"
            src={require('./../../assets/images/about_us.jpg')}
            alt="About Us photo" />
          <div className="reveal-from-bottom" data-reveal-delay="500">
            <div dangerouslySetInnerHTML={{ __html: getLanguageText({ languageContext, textId: "AboutUs.Html" }) }} />
          </div>
        </div>
      </div>
    </section>
  );
}

AboutUsSection.propTypes = propTypes;
AboutUsSection.defaultProps = defaultProps;

export default AboutUsSection;