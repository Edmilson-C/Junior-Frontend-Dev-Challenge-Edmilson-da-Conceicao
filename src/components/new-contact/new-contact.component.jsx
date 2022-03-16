/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid'

import Input from '../input/input.component'
import Button from '../button/button.component'

import { ContactsContext } from '../../context/contacts.context'

import './new-contact.styles.scss'

const NewContact = ({ isVisible, setVisibility }) => {
  const { addContact } = useContext(ContactsContext)

  const [rua, setRua] = useState('')
  const [cidade, setCidade] = useState('')
  const [newContact, setNewContact] = useState({
    id: 0,
    name: '',
    email: '',
    website: '',
    empresa: '',
    phoneNum: '',
    location: '',
    categorias: [],
    codPostal: ''
  })

  let {
    name, email, website, empresa, phoneNum, location, categorias, codPostal
  } = newContact

  const handleChange = (event) => {
    const { id, value } = event.target

    if (id === 'rua') {
      setRua(value)
    } else if (id === 'cidade') {
      setCidade(value)
    } else {
      setNewContact({ ...newContact, [id]: value })
    }
  }

  const handleClick = (event) => {
    const { id } = event.target

    if (id === 'contact-button') {
      location = `${rua}, ${cidade}`
      setNewContact({ ...newContact, id: nanoid(), location })

      addContact(newContact)
    }

    setNewContact({
      id: 0,
      name: '',
      email: '',
      website: '',
      empresa: '',
      phoneNum: '',
      location: '',
      categorias: [],
      codPostal: ''
    })

    setRua('')
    setCidade('')

    setVisibility(false)
  }

  return isVisible && (
    <div className="new-contact">
      <div className="new-contact__content">
        <h3 className="heading-3 new-contact__title">
          <i className="fas fa-plus" />
          &nbsp;
          Novo Contacto
        </h3>

        <span onClick={handleClick}><i id="new-contact__close" className="fas fa-times new-contact__close" /></span>

        <form className="new-contact__form">
          <Input type="text" id="name" name="name" label="Nome" value={name} handleChange={handleChange} />
          <Input type="email" id="email" name="email" label="Email" value={email} handleChange={handleChange} />
          <Input type="tel" id="phoneNum" name="phoneNum" label="Telefone" value={phoneNum} handleChange={handleChange} />
          <Input type="url" id="website" name="website" label="Website" value={website} handleChange={handleChange} />
          <Input type="text" id="empresa" name="empresa" label="Nome da empresa" value={empresa} handleChange={handleChange} />
          <Input type="text" id="categorias" name="categorias" label="Categorias" handleChange={handleChange} />
          <Input type="text" id="rua" name="rua" label="Rua" value={rua} handleChange={handleChange} />
          <Input type="text" id="cidade" name="cidade" label="Cidade" value={cidade} handleChange={handleChange} />
          <Input type="number" id="codPostal" name="codPostal" label="Código Postal" value={codPostal} handleChange={handleChange} />
        </form>

        <Button id="contact-button" content="Gravar Contacto" type="green" handleClick={handleClick} />
      </div>
    </div>
  )
}
export default NewContact
