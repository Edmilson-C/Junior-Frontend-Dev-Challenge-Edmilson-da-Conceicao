<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      Junior Frontend Dev Challenge – Edmilson da Conceição
=======
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
>>>>>>> release/1.0
    </div>
  )
}

export default App
