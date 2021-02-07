import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

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
          {getLink("Home", "")}
          {getLink("Sectors", "sectors")}
          {getLink("Contact us", "contact-us")}
          {getLink("About us", "about-us")}
      </ul>
    </nav>
  );
}

export default FooterNav;

function getLink(text, link) {
  return (
    <li>
      <li></li><Link to={link}>{text}</Link>
    </li>
  );
}
