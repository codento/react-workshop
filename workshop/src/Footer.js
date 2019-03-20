import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="columns is-mobile">
        <Button icon="heart-broken" background="primary" />
        <Button icon="heart" background="danger" />
    </footer>
  )
}

export default Footer;