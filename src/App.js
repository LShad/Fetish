import React from 'react';
import Header from './Header';
import AppBody from './AppBody';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="container-fluid header-container border border-primary" style={{position:'fixed'}}>
      <Header/>
    </div>
      <AppBody/>
    </React.Fragment>
  );
}

export default App;

