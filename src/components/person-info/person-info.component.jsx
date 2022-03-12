import React from 'react'

import './person-info.styles.scss'

const PersonInfo = ({
  imgUrl, name, email, parent
}) => (
  <div className={`person-info person-info--${parent}`}>
    <div className="person-info__image-container">
      <img src={imgUrl} alt={`${name}`} className="person-info__image" />
    </div>
    <div className="person-info__details">
      <p className={`person-info__name person-info__name--${parent}`}>{name}</p>
      <p className={`person-info__email person-info__email--${parent}`}>{email}</p>
    </div>
  </div>
)

export default PersonInfo
