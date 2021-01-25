import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import SweetAlert from 'sweetalert2-react';

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

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <SweetAlert
                show={infoMessageVisibility}
                title="Info"
                text="Mesajınız iletildi."
                confirmButtonColor="#000000"
                onConfirm={() => setInfoMessageVisibility(false)}
            />
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <div className="container-xs">
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                {/* <div className="cta-action">
                                    <Input id="newsletter" width="44" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
                                        <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                                        </svg>
                                    </Input>
                                </div>  */}
                                <form id="contact-form" method="POST">
                                    <Input type="text" className="form-control" placeholder="Title" name="title" onChange={handleInputChange} />
                                    <Input type="text" className="form-control" name="given-name" placeholder="Name" onChange={handleInputChange} />
                                    <Input type="email" placeholder="Email address" name="email" className="form-control" aria-describedby="emailHelp" onChange={handleInputChange} />
                                    <Input type="textarea" placeholder="Message" className="form-control" rows="5" name="message" onChange={handleInputChange}></Input>
                                    <Button type="button" onClick={clickSubmit} color="dark" loading={submitButtonLoadingActive} >Submit</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
ContactUs.propTypes = propTypes;
ContactUs.defaultProps = defaultProps;

export default ContactUs;