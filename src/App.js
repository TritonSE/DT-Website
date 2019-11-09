import React from 'react';
import logo from './logo.svg';
import './css/App.css';

// importing our own components 
import SimpleExample from './components/SimpleExample';
import Form from './components/FormExample';

function App() {
  return (
  	 // "className" is equivalent to the "class" attribute when using html/css, view css/App.css
    <div className="App">
	 	<p> Below is a simple component: </p>
		<SimpleExample />	
		
	 	<p> Below is a slightly more developed component: </p>
		<Form />
    </div>
  );
}

export default App;
