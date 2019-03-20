import React from 'react';

const Content = ({ title, imageUrl }) => {
  return (
      <div>
          <h2>{ title }</h2>
          <img src={imageUrl} />
      </div>
  );
}

export default Content