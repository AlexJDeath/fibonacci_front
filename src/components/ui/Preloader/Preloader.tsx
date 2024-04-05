import React from 'react';
import cn from 'classnames';
import { Spinner } from 'react-bootstrap';
import classes from './preloader.module.scss';

export interface PreloaderProps {
  activated: boolean;
  children?: React.ReactNode;
  fixed?: boolean;
}

const Preloader = ({ activated, children, fixed }: PreloaderProps) => (
  <div
    className={cn({
      [classes.preloader]: true,
      [classes.activated]: activated,
      'position-relative': fixed !== true,
      'position-fixed': fixed === true,
      'd-flex justify-content-center align-items-center': true,
      'w-100': true,
      'h-100': true,
      'top-0': true,
      'l-0': true,
    })}
  >
    {children}
    <span className={classes.spinner}>
      <Spinner animation="border" variant="light" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </span>
  </div>
);

Preloader.defaultProps = {
  children: null,
  fixed: false,
};
export default Preloader;
