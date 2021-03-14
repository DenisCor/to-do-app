import React from 'react';

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          textAlign: 'center',
          paddingBottom: '3rem',
          paddingLeft: '1rem',
        }}
      >
        <img
          style={{ height: '7rem ' }}
          src='../goose.png'
          alt='GooseFx Logo'
        />
      </div>
    </div>
  );
};

export default Header;
