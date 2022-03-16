import React from 'react'

import PersonInfo from '../person-info/person-info.component'

import './contact-preview.styles.scss'

const ContactPreview = ({
  imgUrl, name, email, empresa, website, codPostal, phoneNum
}) => (
  <div className="contact-preview">
    <PersonInfo imgUrl={imgUrl} name={name} email={email} parent="preview" />
    <div className="contact-preview__details">
      <p className="contact-preview__detail">
        <strong>Empresa: </strong>
        {empresa}
      </p>
      <p className="contact-preview__detail">
        <strong>Website: </strong>
        {website}
      </p>
      <p className="contact-preview__detail">
        <strong>Código Postal: </strong>
        {codPostal}
      </p>
    </div>
    <p className="contact-preview__number">{phoneNum}</p>
    <i className="fas fa-compress-alt contact-preview__view-contact" />
  </div>
)

export default ContactPreview
