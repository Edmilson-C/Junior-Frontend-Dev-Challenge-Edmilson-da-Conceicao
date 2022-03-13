import Header from './components/header/header.component'
import Homepage from './pages/homepage/homepage.page'

import { ContactsProvider } from './context/contacts.context'

function App() {
  return (
    <div className="App">
      <Header />
      <ContactsProvider>
        <Homepage />
      </ContactsProvider>
    </div>
  )
}

export default App
