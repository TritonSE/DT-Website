import React from 'react';
import logo from './logo.svg';
import './css/App.css';

// importing our own components 
import SimpleExample from './components/SimpleExample';
import Form from './components/FormExample';

// think of this function as the main method that puts everything together for the user to see.
function App() {
  return (
    // this div contains our whole app hence the className "app"
    <div className="App">
	 	<p> Below is a simple component: </p>
		<SimpleExample />	
		
	 	<p> Below is a slightly more developed component: </p>
		<Form />
    </div>
  );
}

// need to export App in order to be able to import it in other files
export default App;
