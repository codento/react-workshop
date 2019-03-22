import React from 'react'

const Button = ({ icon, onClick }) => {
  return (
    <div onClick={onClick} className={`button ${icon}`} >
      <i className={`fas fa-3x fa-${icon}`}></i>
    </div>
  )
}

export default Button;