// styles
import './header.scss'

// assets
import logo from '../../assets/logo.png'

// types
import { ReactElement } from 'react'

// components
import Navigation from '../navigation/Navigation.tsx'

export default function Header(): ReactElement {
  return (
    <header>
      <div>
        <figure>
          <img src={logo} alt={'logo'} />
        </figure>
        <h1>MoneyDrop</h1>
      </div>
      <Navigation />
    </header>
  )
}
