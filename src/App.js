import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import { useState } from 'react';

function App() {

  const[theme,settheme] = useState("light")

   return (
    <div className="App">
      <h1>hello world</h1>

      <Button 
      theme={theme}
      onClick={() =>  {
        console.log("Press me")
      }}> Add  </Button>

      <Button
      theme={theme}
      onClick={() => {
        console.log(" don't Press me")
      }}> Lost </Button>

        <br/>

      <button 
        onClick={() => {
          console.log(theme)
          settheme(theme === "light"  ? "dark" : "light" )
        }}
      > 
          Change Theme
      </button>

    </div>

  );
}

export default App;
