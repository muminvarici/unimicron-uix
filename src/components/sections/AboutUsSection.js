import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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
            <h3>Yeni yatırımlarla büyüyoruz.</h3>
            <p>
              Toplamda 60’ın üzerinde ülkede her gün, milyonlarca kedi sahibinin hayatına dokunan ürünler üreten şirketimiz, küresel ölçekte büyümeye emin adımlarla devam ediyor. Hızla değişen ve gelişen dünyada, sektörde son 10 yılda gerçekleşen büyümenin katlanarak devam etmesi bekleniyor ve biz de dört önemli alanda yatırım yaparak stratejik pozisyonumuzu her gün biraz daha güçlendiriyoruz.
           </p>
            <h4>
              Ar-Ge ve inovasyon gücümüzle değer yaratıyoruz.
           </h4>
            <p>
              Ar-Ge ve inovasyondaki öncü uygulamalarımız ve çözümlerimizle müşterilerimize değer yaratan, katma değeri yüksek, sürdürülebilir ürünler geliştirmeye devam ediyoruz. Ar-Ge ve tasarım merkezimizde geliştirilen ﬁkirler sayesinde dünyada yılın markası ödülüne layık görülerek bu alandaki öncü konumumuzu tescillemiş olduk. Üretim teknolojilerinde sahip olduğumuz dijitalleşme vizyonu ile Avrupa’nın saygın kuruluşları arasında yer almayı hedeﬂiyoruz. Bentaş Bentonit olarak fabrikamızda geliştirdiğimiz akıllı prosesleri ve algoritmaları tüm üretim ağımıza yaymayı ve dijitalleşme konusundaki etkinliklerimizi daha da geliştirmeyi hedeﬂiyoruz. Sürdürülebilirliği bir iş modeli olarak benimsiyoruz ve sıfır atık çalışmalarıyla “Dünyaya Saygılı, Dünyada Saygın” bir marka olma yolunda ilkelerimizden şaşmadan ilerliyoruz.
           </p>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutUsSection.propTypes = propTypes;
AboutUsSection.defaultProps = defaultProps;

export default AboutUsSection;