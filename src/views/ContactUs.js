import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import SweetAlert from 'sweetalert2-react';
import Image from '../components/elements/Image';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}



const ContactUs = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const [submitButtonLoadingActive, setSubmitButtonLoadingActive] = useState(false);
    const [input, setInput] = useState({});
    const [infoMessageVisibility, setInfoMessageVisibility] = useState(false);

    const clickSubmit = (e) => {
        e.preventDefault();
        setSubmitButtonLoadingActive(true);
        setTimeout(() => {
            setInfoMessageVisibility(true);
            setSubmitButtonLoadingActive(false);
        }, 1000);
    }

    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    })


    const outerClasses = classNames(
        // 'hero section center-content illustration-section-01',
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content'
    );

    const getCallItem = () => {
        const linkText = "+90 532 707 81 93";
        const link = "tel:" + linkText;
        return (
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="600">
                <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                        <a href={link}>
                            <svg class="mb-16" focusable="false" width="64" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div className="features-tiles-item-content">
                        <h5 className="mt-0 mb-8">
                            Give us a ring
                        </h5>
                        <p>Alper Ünal<br />  <a href={link}>{linkText}</a><br /> Mon - Fri, 8:00-22:00</p>
                    </div>
                </div>
            </div >
        );
    }

    const getLocationItem = () => {
        const link = "geo:124.028582,-29.201930"
        return (
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                        <a href={link} target="_blank">
                            <svg class="mb-16" focusable="false" width="64" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div className="features-tiles-item-content">
                        <h5 className="mt-0 mb-8">
                            Find us at the office
                        </h5>
                        <a href={link} target="_blank">
                            <p>aasd mahallesi, nr. 8, <br /> 7652 Ünye/Ordu, <br /> Türkiye</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <SweetAlert
                show={infoMessageVisibility}
                title="Info"
                text="Your message has been sent."
                confirmButtonColor="#000000"
                onConfirm={() => setInfoMessageVisibility(false)}
            />
            <div className="container">
                <div className={innerClasses}>
                    <div className={tilesClasses}>
                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <form id="contact-form" method="POST">
                                    <Input type="text" className="form-control" placeholder="Title" name="title" onChange={handleInputChange} />
                                    <Input type="text" className="form-control" name="given-name" placeholder="Name" onChange={handleInputChange} />
                                    <Input type="email" placeholder="Email address" name="email" className="form-control" aria-describedby="emailHelp" onChange={handleInputChange} />
                                    <Input type="textarea" placeholder="Message" className="form-control" rows="5" name="message" onChange={handleInputChange}></Input>
                                    <Button type="button" onClick={clickSubmit} color="dark" loading={submitButtonLoadingActive} >Submit</Button>
                                </form>
                            </div>
                        </div>
                        {getLocationItem()}
                        {getCallItem()}
                    </div>
                </div>
            </div>
        </section>
    );

}
ContactUs.propTypes = propTypes;
ContactUs.defaultProps = defaultProps;

export default ContactUs;