import React from 'react';

const IconButton = ({url, onAction}) => {
  return (
    <figure className="image is-128x128" onClick={onAction}>
    <img src={url} alt="" />
    </figure>)
}

export default IconButton;