import './header.scss'

// types
import { ReactElement } from 'react'

// components
import Navigation from '../navigation/Navigation.tsx'

export default function Header(): ReactElement {
  return (
    <header>
      <h1>MoneyDrop</h1>
      <Navigation />
    </header>
  )
}
