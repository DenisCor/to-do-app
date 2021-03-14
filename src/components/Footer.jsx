import React from 'react';

const Footer = () => {
  return (
    <div className='todoFooter'>
      <span>
        &copy;{new Date().getFullYear()} | All Rights Reserved | Made by Denis
        Corlotean{' '}
      </span>
      <span>
        <img
          style={{ height: '1.2rem ', verticalAlign: 'middle' }}
          src='../DCLogo.png'
          alt='DC Logo'
        />
      </span>
    </div>
  );
};

export default Footer;
