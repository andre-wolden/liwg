import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
};

export default App;
