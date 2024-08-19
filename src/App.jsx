import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoinTable from './Components/CoinTable/CoinTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <CoinTable />
    </>
  )
}

export default App
