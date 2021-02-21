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
const SectorsSection = ({
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
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );
  const languageContext = useContext(LanguageContext);

  const getSectionHeader = () => {
    const languageText = getLanguageText({ languageContext, textId: "Sectors" });
    console.log(languageText);
    return languageText;
  }


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={getSectionHeader()} className={["reveal-from-bottom", "center-content"]} data-reveal-delay="400" /> */}
          <div className={tilesClasses}>
            {getSectorItem("kedi_kumu.jpg", 1, "Kedi kumu", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat.")}
            {getSectorItem("kedi_kumu.jpg", 2, "Kedi kumu", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat.")}
            {getSectorItem("kedi_kumu.jpg", 3, "Kedi kumu", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat.")}
            {getSectorItem("kedi_kumu.jpg", 4, "Kedi kumu", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat.")}
            {getSectorItem("kedi_kumu.jpg", 5, "Kedi kumu", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat.")}
            {getSectorItem("kedi_kumu.jpg", 6, "Kedi kumu", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat.")}

          </div>
        </div>
      </div>
    </section>
  );
}

SectorsSection.propTypes = propTypes;
SectorsSection.defaultProps = defaultProps;

export default SectorsSection;

function getSectorItem(imageName, index, title, bodyText) {
  return <div className="tiles-item reveal-from-bottom" data-reveal-delay={400 + (index % 4) * 200
  }>
    <div className="tiles-item-inner">
      <div className="features-tiles-item-header">
        <div className="features-tiles-item-image mb-16">
          <Image
            src={require('./../../assets/images/' + imageName)}
            alt="Kedi kumu"
            height={120} />
        </div>
      </div>
      <div className="features-tiles-item-content">
        <h4 className="mt-0 mb-8">
          {title}
        </h4>
        <p className="m-0 text-sm">
          {bodyText}
        </p>
      </div>
    </div>
  </div >;
}
