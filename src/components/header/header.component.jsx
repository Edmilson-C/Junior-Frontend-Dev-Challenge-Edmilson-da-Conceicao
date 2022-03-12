import React from 'react'

import { ReactComponent as Logo } from '../../assets/colab-logo.svg'

import './header.styles.scss'

const Header = () => (
  <header className="header">
    <div className="container">
      <Logo className="header__logo" />
      <h4 className="header__title"> Colab Pub Inc </h4>
    </div>
  </header>
)

export default Header