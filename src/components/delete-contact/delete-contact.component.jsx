import React, { useContext } from 'react'

import Button from '../button/button.component'

import { ContactsContext } from '../../context/contacts.context'

import './delete-contact.styles.scss'

const DeleteContact = ({ contactId, isDeleteVisible, setIsDeleteVisible }) => {
  const { deleteContact } = useContext(ContactsContext)

  const handleClick = (event) => {
    const { id } = event.target

    if (id === 'btnDelete') {
      deleteContact(contactId)
    }

    setIsDeleteVisible(false)
  }

  return (
    isDeleteVisible && (
      <div className="popup-component delete-contact">
        <div className="delete-contact__content">
          <i className="far fa-times-circle delete-contact__close-icon" />
          <h3 className="heading-3 delete-contact__title">Apagar Contacto</h3>
          <p className="delete-contact__subtitle">Tem certeza que deseja apagar o contacto?</p>
          <div className="delete-contact__buttons">
            <Button id="btnCancel" type="grey" content="Cancelar" handleClick={handleClick} />
            <Button id="btnDelete" type="red" content="Sim, apagar" handleClick={handleClick} />
          </div>
        </div>
      </div>
    )
  )
}

export default DeleteContact
