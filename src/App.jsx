import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
