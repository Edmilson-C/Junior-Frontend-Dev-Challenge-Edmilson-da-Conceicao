import React from 'react'

import './button.styles.scss'

const Button = ({
  id,
  content,
  isFormButton,
  type,
  handleClick
}) => (
  <button type={isFormButton ? 'submit' : 'button'} id={id} className={`btn btn--${type}`} onClick={handleClick}>
    {content}
  </button>
)

export default Button
