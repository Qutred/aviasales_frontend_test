import React from 'react';
import spinner from '../../assets/img/ico/spinner.svg';
import './loader.scss';

const Loader = () => {
  return (
    <div className={`loader`}>
      <img className={`loader__spinner`} src={spinner} alt='spinner' />
    </div>
  );
};

export default Loader;
