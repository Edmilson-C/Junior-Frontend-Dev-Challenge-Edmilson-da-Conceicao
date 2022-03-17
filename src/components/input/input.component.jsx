import React from 'react'

import './input.styles.scss'

const Input = ({
  type, id, label, handleChange, ...otherProps
}) => (
  <div className="input-group">
    <input
      type={type}
      id={id}
      className={`input-group__input ${otherProps.value && 'input-group__input--has-value'}`}
      onChange={handleChange}
      {...otherProps}
    />
    <label htmlFor={id} className="input-group__label">
      {label}
    </label>
  </div>
)

export default Input
