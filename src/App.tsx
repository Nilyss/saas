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
import CurrencyForm from './components/currencyForm/CurrencyForm.tsx'
import Documents from "./components/documents/Documents.tsx";

function App(): ReactElement {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/calculator" />}></Route>
          <Route path="/calculator" element={<CurrencyForm />}></Route>
          <Route path="/docs" element={<Documents />}></Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
