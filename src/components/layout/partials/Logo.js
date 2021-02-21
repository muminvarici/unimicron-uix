import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image className="brand-logo"
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
          />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;