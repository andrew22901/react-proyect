import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from "./Components/Navbar/NavBar.js"
import Contador from './Components/ItemListContainer/Contador/Contador.js'
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer />
     
    </div>
  );
}

export default App;
