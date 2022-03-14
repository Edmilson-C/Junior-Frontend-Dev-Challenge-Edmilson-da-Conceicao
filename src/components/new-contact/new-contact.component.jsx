import React from 'react'

import Input from '../input/input.component'
import Button from '../button/button.component'

import './new-contact.styles.scss'

const NewContact = () => {
  const handleChange = (event) => {
    console.log(event.target.value)
  }

  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div className="new-contact">
      <div className="new-contact__content">
        <h3 className="heading-3 new-contact__title">
          <i className="fas fa-plus" />
          &nbsp;
          Novo Contacto
        </h3>

        <i className="fas fa-times new-contact__close" />

        <div className="new-contact__form">
          <Input type="text" id="contact-name" name="contact-name" label="Nome" handleChange={handleChange} />
          <Input type="email" id="contact-email" name="contact-email" label="Email" handleChange={handleChange} />
          <Input type="tel" id="contact-telefone" name="contact-telefone" label="Telefone" handleChange={handleChange} />
          <Input type="url" id="contact-website" name="contact-website" label="Website" handleChange={handleChange} />
          <Input type="text" id="contact-company" name="contact-company" label="Nome da empresa" handleChange={handleChange} />
          <Input type="text" id="contact-category" name="contact-category" label="Categorias" handleChange={handleChange} />
          <Input type="text" id="contact-rua" name="contact-rua" label="Rua" handleChange={handleChange} />
          <Input type="text" id="contact-city" name="contact-city" label="Cidade" handleChange={handleChange} />
          <Input type="number" id="contact-postal" name="contact-postal" label="Código Postal" handleChange={handleChange} />
        </div>

        <Button id="contact-button" content="Gravar Contacto" type="green" handleClick={handleClick} />
      </div>
    </div>
  )
}
export default NewContact
