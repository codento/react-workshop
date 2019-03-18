import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <Button content='Vasen' />
        <Button content='Oikea' />
      </div>
    </footer>
  )
}

export default Footer;