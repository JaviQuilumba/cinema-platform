import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/RegisterUser.css'; 
import axios from 'axios';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const role = 'client'; 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password, first_name, last_name, role };

    try {
      
      await axios.post('http://lb-register-user-1381072137.us-east-2.elb.amazonaws.com/api/users', newUser);
      console.log('User registered:', newUser);
      alert('User registered successfully!');
      
     
      setUsername('');
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');

      
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>First Name:</label>
        <input
          type="text"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>Role:</label>
        <input
          type="text"
          value={role}
          readOnly
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
