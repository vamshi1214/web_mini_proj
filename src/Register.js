import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = registeredUsers.find((u) => u.username === username);

    if (userExists) {
      alert('Username already exists');
    } else {
      const newUser = { username, password };
      registeredUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      onRegister();
    }
  };

  return (
    <div className="auth-container">
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Username</label>
          <input
            type="text"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <Link to="/login">Login Here</Link>
      </div>
    </div>
  );
}

export default Register;
