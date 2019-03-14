import React from 'react';
import IconButton from './IconButton';
import sadsmiley from '../../images/sad_smiley.png';
import happysmiley from '../../images/smile.png'

const Footer = ({onAction}) => {
  return (
  <div className="hero-foot has-background-light has-text-centered level  is-mobile">
  
   <div className="level-item has-text-centered"><IconButton  url={sadsmiley} onAction={onAction} /></div>
   <div className="level-item has-text-centered"><IconButton  url={sadsmiley} onAction={onAction} /></div>
  </div> 
   )
}

export default Footer;