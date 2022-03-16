/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import Input from '../input/input.component'
import Button from '../button/button.component'

import './new-contact.styles.scss'

const NewContact = ({ isVisible, setVisibility }) => {
  const handleChange = (event) => {
    console.log(event.target.value)
  }

  const handleClick = (event) => {
    const { id } = event.target

    if (id === 'new-contact__close') {
      setVisibility(false)
    }
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
          <Input type="text" id="name" name="name" label="Nome" handleChange={handleChange} />
          <Input type="email" id="email" name="email" label="Email" handleChange={handleChange} />
          <Input type="tel" id="phoneNum" name="phoneNum" label="Telefone" handleChange={handleChange} />
          <Input type="url" id="website" name="website" label="Website" handleChange={handleChange} />
          <Input type="text" id="empresa" name="empresa" label="Nome da empresa" handleChange={handleChange} />
          <Input type="text" id="categorias" name="categorias" label="Categorias" handleChange={handleChange} />
          <Input type="text" id="rua" name="rua" label="Rua" handleChange={handleChange} />
          <Input type="text" id="cidade" name="cidade" label="Cidade" handleChange={handleChange} />
          <Input type="number" id="codPostal" name="codPostal" label="Código Postal" handleChange={handleChange} />
        </form>

        <Button id="contact-button" content="Gravar Contacto" type="green" handleClick={handleClick} />
      </div>
    </div>
  )
}
export default NewContact
