/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

import ContactDetails from '../contact-details/contact-details.component'
import PersonInfo from '../person-info/person-info.component'

import './contact-preview.styles.scss'

const ContactPreview = ({
  imgUrl, name, email, empresa, website, codPostal, phoneNum, location, categorias
}) => {
  const [isAddContactVisible, setIsAddContactVisible] = useState(false)

  return (
    <div className="contact-preview">
      <ContactDetails
        imgUrl={imgUrl}
        name={name}
        email={email}
        empresa={empresa}
        website={website}
        codPostal={codPostal}
        phoneNum={phoneNum}
        location={location}
        categorias={categorias}
        isVisible={isAddContactVisible}
        setVisibility={setIsAddContactVisible}
      />
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
      <span
        onClick={() => {
          setIsAddContactVisible(true)
        }}
      >
        <i className="fas fa-compress-alt contact-preview__view-contact" />
      </span>
    </div>
  )
}

export default ContactPreview
