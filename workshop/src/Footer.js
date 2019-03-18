import React from 'react';
import Button from './Button';

const Footer = () => {
  return (

    <footer className="footer">
      <div className="content">
        <Button text='Kyllä' />
        <Button text='Ei' />
      </div>
    </footer>

  )
}

export default Footer;