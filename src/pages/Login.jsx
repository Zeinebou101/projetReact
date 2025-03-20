import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion
  };

  return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2>Connexion</h2>
            <p>Entrez vos identifiants pour accéder à votre compte</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Adresse email</label>
              <input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <div className="password-input-container">
                <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control"
                />
                <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Masquer" : "Afficher"}
                </button>
              </div>
              <div className="forgot-password">
                <Link to="/reset-password">Mot de passe oublié ?</Link>
              </div>
            </div>

            <button type="submit" className="login-button">
              Se connecter
            </button>
          </form>

          <div className="register-link">
            Pas encore de compte ? <Link to="/register">S'inscrire</Link>
          </div>
        </div>
      </div>
  );
};

export default Login;