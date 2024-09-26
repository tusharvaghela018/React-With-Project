import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () =>{
    // console.log('value added', Math.random());
    // console.log("clicked", Math.random());
    
    // counter = counter + 1;
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    //By default setCounter returns the callback function

    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)

    console.log("clicked", counter);
  }

  const removeValue = ()=>{

    if(counter == 0){
      setCounter(counter)
    }else{
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Tushar vaghela</h1>
      <h2>Counter value :{counter}</h2>

      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value : {counter}</button>
    </>
  )
}

export default App;
