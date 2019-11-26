import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Members from './components/Members';



// importing our own components 
import SimpleExample from './components/SimpleExample';
import Form from './components/FormExample';

// think of this function as the main method that puts everything together for the user to see.
function App() {
  return (
    // this div contains our whole app hence the className "app"
    <div className="App">
      <Members/>
    </div>
  );
}

// need to export App in order to be able to import it in other files
export default App;
