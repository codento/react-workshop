import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="columns is-mobile">
        <Button icon="heart-broken" background="danger" />
        <Button icon="heart" background="primary" />
    </footer>
  )
}

export default Footer;