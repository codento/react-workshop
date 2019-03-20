import React from 'react'

const Button = ({ icon }) => {
  return (
  <div className={`button ${icon}`} >
      <span className="icon is-large">
        <i className={`fas fa-3x fa-${icon} has-text-white`}></i>
      </span>
  </div>
  )
}

export default Button