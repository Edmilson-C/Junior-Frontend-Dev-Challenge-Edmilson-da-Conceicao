import React from 'react'

import Button from '../button/button.component'

import './delete-contact.styles.scss'

const DeleteContact = ({ isDeleteVisible, setIsDeleteVisible }) => {
  const handleClick = (event) => {
    const { id } = event.target

    if (id === 'btnDelete') {
      console.log('delete')
    }

    setIsDeleteVisible(false)
  }

  return isDeleteVisible && (
    <div className="delete-contact">
      <div className="delete-contact__content">
        <i className="far fa-times-circle delete-contact__close-icon" />
        <h3 className="delete-contact__title">Apagar Contacto</h3>
        <p className="delete-contact__subtitle">Tem certeza que deseja apagar o contacto?</p>
        <div className="delete-contact__buttons">
          <Button id="btnCancel" type="grey" content="Cancelar" handleClick={handleClick} />
          <Button id="btnDelete" type="red" content="Sim, apagar" handleClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default DeleteContact
