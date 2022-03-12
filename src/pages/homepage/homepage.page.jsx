/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import Button from '../../components/button/button.component'
import Input from '../../components/input/input.component'

import blackManImage from '../../assets/black-man.png'

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

        <div className="filter">
          <h1 className="filter__qty"> 45 </h1>
          <h2 className="filter__title"> Contactos <span>Adicionados</span> </h2>
          <p className="filter__subtitle"> Uma plataforma especializada ma prospeção de novos clientes para o seu negócio </p>
          <Input type="text" id="filter-name" label="Nome" />
          <Input type="text" id="filter-company" label="Empresa" />
        </div>

        <div className="about">
          <h3 className="about__title"> Cuidamos do seu <span>Negocio.</span> </h3>
          <p className="about__paragraph"> Uma plataforma especializada na prospecção de novos clientes para o seu negócio. </p>
          <img src={blackManImage} alt="" className="about__image" />
        </div>
      </div>
    </main>
  )
}

export default Homepage
