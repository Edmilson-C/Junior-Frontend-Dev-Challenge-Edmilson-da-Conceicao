import React from 'react'

import Button from '../../components/button/button.component'

import './homepage.styles.scss'

const Homepage = () => {
  const newContact = () => {
    alert('Add new contact')
  }

  return (
    <main>
      <div className="container">
        <div className="add-contact">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="butAdd" className="add-contact__plus">
            +
          </label>
          <h4 className="add-contact__title"> Adicionar Contacto </h4>
          <Button id="butAdd" content="Novo Contacto" type="white" handleClick={newContact} />
        </div>
      </div>
    </main>
  )
}

export default Homepage
