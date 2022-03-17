import React, { useState } from 'react'

import PersonInfo from '../person-info/person-info.component'
import DeleteContact from '../delete-contact/delete-contact.component'

import ColabLogo from '../../assets/colab-logo.svg'

import './contact-details.styles.scss'

const ContactDetails = ({
  imgUrl,
  name,
  email,
  empresa,
  phoneNum,
  location,
  codPostal,
  categorias,
  isVisible,
  setVisibility,
  setIsDeleteVisible
}) => {
  const handleClick = (event) => {
    const { id } = event.target

    if (id === 'contact-details__trash') {
      console.log('close')
      setIsDeleteVisible(true)
    }
    setVisibility(false)
  }

  return (
    isVisible && (
      <div className="contact-details">
        <div className="contact-details__content">
          <span onClick={handleClick}>
            <i id="contact-details__close" className="fas fa-times contact-details__close" />
          </span>
          <span onClick={handleClick}>
            <i id="contact-details__trash" className="far fa-trash-alt contact-details__trash" />
          </span>
          <img src={ColabLogo} alt="Colab Pub Logo" className="contact-details__colab-logo" />

          <PersonInfo imgUrl={imgUrl} name={name} email={email} parent="details" />

          <p className="contact-details__detail">
            <i className="fas fa-home" />
            <span>{empresa}</span>
          </p>
          <p className="contact-details__detail">
            <i className="fas fa-phone-alt" />
            <span>{phoneNum}</span>
          </p>
          <p className="contact-details__detail">
            <i className="far fa-map" />
            <span>{location}</span>
          </p>
          <p className="contact-details__detail">
            <i className="far fa-image" />
            <span>{codPostal}</span>
          </p>
        </div>
      </div>
    )
  )
}

export default ContactDetails
