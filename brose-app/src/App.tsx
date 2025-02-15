import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import ParticlesBackground from './components/ParticlesBackground';
import broseLogo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <header className="App-header">
        <img src={broseLogo} alt="Brose logo" className="logo" />
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
