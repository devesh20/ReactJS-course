import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-4 rounded-lg'>Vite with Taiwind</h1>
      <Card username="Devesh" profileLink="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card username="Hitesh" profileLink="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card />
    </>
  )
}

export default App
