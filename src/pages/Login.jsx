import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Connexion</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded mt-2"
          required
        />
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;