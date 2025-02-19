import { useState } from 'react'
import WelcomeMessageSection from './components/WelcomeMessageSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessageSection />  
    </>
  )
}

export default App
