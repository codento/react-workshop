import React from 'react';

const Content = ({ pet }) => {
  return (
    <div className="content">
      <div className="card-container">
        <div className="card-image">
        <img src={ pet.imageUrl } alt={pet.title}/>
        </div>
        <div className="card-title">
          <span>{ pet.title }</span>
        </div>
      </div>
    </div>
  )
}

export default Content;
