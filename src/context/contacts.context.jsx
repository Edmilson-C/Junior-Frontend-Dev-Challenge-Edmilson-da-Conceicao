import { createContext, useState } from 'react'

import { requestContacts } from '../apis/contacts.data'

export const ContactsContext = createContext({
  contacts: [],
  getContacts: () => {}
})

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])

  const getContacts = async () => {
    try {
      const data = await requestContacts()
      setContacts([...data])
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`An error has occured while add contacts to context \n${error}`)
    }
  }

  return (
    <ContactsContext.Provider value={{ contacts, getContacts }}>
      {children}
    </ContactsContext.Provider>
  )
}
