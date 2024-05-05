// style
import './utils/styles/global.scss'

// types
import { ReactElement } from 'react'

// hooks
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

// component
import Header from './components/header/Header'
import Calculator from './components/calculator/Calculator.tsx'
import Documents from './components/documents/Documents.tsx'
import Footer from './components/footer/Footer.tsx'

// views
import Stats from './views/stats/Stats.tsx'

function App(): ReactElement {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/calculator" />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path={'/stats'} element={<Stats />}></Route>
          <Route path="/docs" element={<Documents />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
