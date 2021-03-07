import React, { useContext } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../App';
import { getLanguageText } from '../../../languages/languages';

const FooterNav = ({
  className,
  ...props
}) => {

  const languageContext = useContext(LanguageContext);


  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        {getLink("Home", "", languageContext)}
        {getLink("Sectors", "sectors", languageContext)}
        {getLink("ContactUs", "contact-us", languageContext)}
        {getLink("AboutUs", "about-us", languageContext)}
      </ul>
    </nav>
  );
}

export default FooterNav;

function getLink(text, link, languageContext) {
  text = getLanguageText({ languageContext, textId: "Menu." + text });
  return (
    <li>
      <Link to={link}>{text}</Link>
    </li>
  );
}
