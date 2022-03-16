import React from 'react'

import ContactPreview from '../contact-preview/contact-preview.component'

import './contact-overview.styles.scss'

const ContactOverview = ({ contactos }) => (
  <div className="contact-overview">
    {contactos.map(({
      id, name, email, empresa, website, codPostal, phoneNum
    }) => (
      <ContactPreview
        key={id}
        name={name}
        email={email}
        empresa={empresa}
        website={website}
        codPostal={codPostal}
        phoneNum={phoneNum}
      />
    ))}
  </div>
)

export default ContactOverview
