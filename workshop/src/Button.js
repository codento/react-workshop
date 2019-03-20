import React from 'react'

const Button = ({ icon, onClick }) => {
  return (
  <div onClick={onClick} className={`button ${icon}`} >
      <span className="icon is-large">
        <i className={`fas fa-3x fa-${icon} has-text-white`}></i>
      </span>
  </div>
  )
}

export default Button