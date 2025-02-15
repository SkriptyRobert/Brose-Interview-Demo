import React, { useState } from 'react';
import './RegistrationForm.css';

// Interface pro data formuláře
interface FormData {
  username: string;
  email: string;
}

// API URL based on environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isTestMode] = useState(false); // V produkci nastavit na false

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isTestMode) {
        // Simulace backend volání v testovacím režimu
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Test Mode - Form data:', formData);
        alert('Test Mode: Registration successful! (No actual data was saved)');
      } else {
        // Opravená konstrukce URL - už nepřidáváme /api/ na začátek
        const response = await fetch(`${API_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          throw new Error('Registration failed');
        }

        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registration successful!');
      }

      // Reset formuláře po úspěšné registraci
      setFormData({ username: '', email: '' });
    } catch (error) {
      console.error('Registration error:', error);
      alert(isTestMode 
        ? 'Test Mode: Simulated error in registration process.'
        : 'An error occurred during registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="registration-form">
      {isTestMode && (
        <div className="test-mode-banner">
          Test Mode - No data will be saved
        </div>
      )}
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm; 