import './navigation.scss'
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation(): ReactElement {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/calculator"
            className={({ isActive }: { isActive: boolean }): string =>
              isActive ? 'active' : ''
            }
          >
            Calculateur
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stats"
            className={({ isActive }: { isActive: boolean }): string =>
              isActive ? 'active' : ''
            }
          >
            Statistiques
          </NavLink>
        </li>
        {/*<li>*/}
        {/*  <NavLink*/}
        {/*    to="/docs"*/}
        {/*    className={({ isActive }: { isActive: boolean }): string =>*/}
        {/*      isActive ? 'active' : ''*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Documents*/}
        {/*  </NavLink>*/}
        {/*</li>*/}
      </ul>
    </nav>
  )
}
