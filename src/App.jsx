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

            <footer className="read-the-docs">
                © {new Date().getFullYear()} - Application créée avec React
            </footer>
        </>
    )
}

export default App