import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#0f172a')

  // function changeColor(color){
  //     setColor(color)
  // }

  return (
   <div className='w-full h-screen duration-200' style={{background: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button 
              onClick={() => setColor('#b91c1c')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700'>Red</button>
              <button 
              onClick={() => setColor('#15803d')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700'>Green</button>
              <button 
              onClick={() => setColor('#1d4ed8')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'>Blue</button>
          </div>
      </div>
   </div>
  )
}

export default App
