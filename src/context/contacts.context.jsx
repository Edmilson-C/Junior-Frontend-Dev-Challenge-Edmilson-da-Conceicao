import { createContext, useState } from 'react'

import { requestContacts } from '../apis/contacts.data'

export const ContactsContext = createContext({
  contacts: [],
  getContacts: () => {},
  addContact: () => {}
})

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])

  const getContacts = async () => {
    try {
      const data = await requestContacts()
      setContacts([...data])
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`An error has occurred while add contacts to context \n${error}`)
    }
  }

  const addContact = (newContact) => {
    setContacts([...contacts, newContact])
  }

  return (
    <ContactsContext.Provider value={{ contacts, getContacts, addContact }}>
      {children}
    </ContactsContext.Provider>
  )
}
