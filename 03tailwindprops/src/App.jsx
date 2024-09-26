import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name : "tushar",
    age : 21
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      {/* <Card channel = "hai aur code" setObj = {myObj} setArr = {newArr}/> */}
      <Card userName={"Tushar"} btnText={"hit me"}/>
      <Card userName={"Visavadiya"} btnText='punch me'/>
      <Card userName={"Vrund"}/>
    </>
  )
}

export default App
