import React from 'react';

const Content = ({ title, imageUrl }) => {
  return (
    <div className="content">
      <div className="card-container">
        <img src={imageUrl} className="card-image" />
        <h2 className="card-title">{ title }</h2>
      </div>
    </div>
  )
}

export default Content;