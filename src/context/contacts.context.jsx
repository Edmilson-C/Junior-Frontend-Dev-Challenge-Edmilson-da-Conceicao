import { createContext, useState } from 'react'

import { requestContacts } from '../apis/contacts.data'

export const ContactsContext = createContext({
  contacts: [],
  getContacts: () => {},
  addContact: () => {},
  deleteContact: () => {}
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
    setContacts([newContact, ...contacts])
  }

  const deleteContact = (contactId) => {
    const aux = contacts.filter(({ id }) => contactId !== id)
    setContacts([...aux])
  }

  return (
    <ContactsContext.Provider value={{
      contacts, getContacts, addContact, deleteContact
    }}
    >
      {children}
    </ContactsContext.Provider>
  )
}
