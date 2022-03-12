import React from 'react'

import './button.styles.scss'

const Button = ({ content, type, handleClick }) => (
  <button type="button" className={`btn btn--${type}`} onClick={handleClick}>
    {content}
  </button>
)

export default Button
