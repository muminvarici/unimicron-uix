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
        <li>
          {getLink("Contact us", "contact-us")}
        </li>
        <li>
          {getLink("About us", "about-us")}
        </li>
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
