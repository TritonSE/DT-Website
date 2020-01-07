
import React from 'react';
//import './css/DynamicStyle.css';

// importing our own components 
//import SimpleExample from './components/SimpleExample';
//import Form from './components/FormExample';
import HomePage from './components/HomePage';

// think of this function as the main method that puts everything together for the user to see.
function App() {
  return (
    // this div contains our whole app hence the className "app"
    <div className="App">
		<HomePage/>
		
	 
		
    </div>
  );
}

// need to export App in order to be able to import it in other files
export default App;
