import { useState } from 'react'
import  { Button }  from '@workspace/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Click me <Button label='Click' variant='primary'/>
    </>
  )
}

export default App
