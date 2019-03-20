import React from 'react';

const Content = ({ pet }) => {
  return (
    <div className="content">
      <div className="card-container">
        <img src={ pet.imageUrl } />
        <p className="card-title">{ pet.title }</p>
      </div>
    </div>
  )
}

export default Content;
