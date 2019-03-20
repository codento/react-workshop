import React from 'react'

const Button = ({ icon }) => {
  return (
  <div className={`section column is-half has-text-centered has-background-${icon === 'heart' ? 'primary' : 'danger'}`}>
      <span className="icon is-large">
        <i className={`fas fa-3x fa-${icon} has-text-white`}></i>
      </span>
  </div>
  )
}

export default Button