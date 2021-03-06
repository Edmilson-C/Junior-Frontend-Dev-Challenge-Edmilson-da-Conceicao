/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useEffect, useState } from 'react'

import NewContact from '../../components/new-contact/new-contact.component'
import Button from '../../components/button/button.component'
import Input from '../../components/input/input.component'
import ContactOverview from '../../components/contact-overview/contact-overview.component'

import { ContactsContext } from '../../context/contacts.context'

import blackManImage from '../../assets/black-man.png'

import './homepage.styles.scss'

const Homepage = () => {
  const { contacts, getContacts } = useContext(ContactsContext)

  const [nome, setNome] = useState('')
  const [company, setCompany] = useState('')
  const [contactsDisplayed, setContactsDisplayed] = useState([])

  const [isAddContactVisible, setIsAddContactVisible] = useState(false)

  useEffect(() => {
    getContacts()
  }, [])

  useEffect(() => {
    setContactsDisplayed(contacts)
  }, [contacts])

  const newContact = () => {
    setIsAddContactVisible(true)
  }

  const clearInputs = () => {
    setNome('')
    setCompany('')
    setContactsDisplayed(contacts)
  }

  const filterContacts = (event) => {
    const { name, value } = event.target

    if (name === 'filter-name') {
      setNome(value)
    } else {
      setCompany(value)
    }

    const aux = contacts.filter(
      (item) => item.name.includes(nome) && item.empresa.includes(company)
    )

    setContactsDisplayed(aux)
  }

  return (
    <main>
      <NewContact isVisible={isAddContactVisible} setVisibility={setIsAddContactVisible} />
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
          <h1 className="heading-1 filter__qty">{contactsDisplayed.length || 0}</h1>
          <h2 className="heading-2 filter__title">
            Contactos <span>Adicionados</span>
          </h2>
          <p className="filter__subtitle">
            Uma plataforma especializada ma prospe????o de novos clientes para o seu neg??cio
          </p>
          <Input
            type="text"
            id="filter-name"
            name="filter-name"
            label="Nome"
            value={nome}
            handleChange={filterContacts}
          />
          <Input
            type="text"
            id="filter-company"
            name="filter-company"
            label="Empresa"
            value={company}
            handleChange={filterContacts}
          />
          <span onClick={clearInputs}>
            <i className="fas fa-filter filter__icon" />
          </span>
        </div>

        <div className="about">
          <div className="circle" />
          <h3 className="about__title">
            Cuidamos do seu <span>Negocio.</span>
          </h3>
          <p className="about__paragraph">
            Uma plataforma especializada na prospec????o de novos clientes para o seu neg??cio.
          </p>
          <img src={blackManImage} alt="" className="about__image" />
        </div>

        {/* eslint-disable-next-line no-nested-ternary */}
        {contactsDisplayed.length > 0 ? (
          <ContactOverview contactos={contactsDisplayed} />
        ) : (
          <h2 className="no-contacts"> Nenhum contacto corresponde a essa pesquisa </h2>
        )}
      </div>
    </main>
  )
}

export default Homepage
