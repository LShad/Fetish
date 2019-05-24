import React from 'react';
import Header from './Header';
import AppBody from './AppBody';
import './App.css';

function App() {
  return (
    <React.Fragment>
	    <div className="fixed-top container-fluid header-container border border-primary">
	     	<Header/>
	    </div>
	    	<Header/>
	     	<AppBody/>
    </React.Fragment>
  );
}

export default App;

