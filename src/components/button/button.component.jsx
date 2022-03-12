import React from 'react'

import './button.styles.scss'

const Button = ({
  id,
  content,
  type,
  handleClick
}) => (
  <button type="button" id={id} className={`btn btn--${type}`} onClick={handleClick}>
    {content}
  </button>
)

export default Button
