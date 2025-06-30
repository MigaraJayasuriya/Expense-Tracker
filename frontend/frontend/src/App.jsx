import { useState } from 'react'
import './App.css'
import ExpenseList from './components/ExpenseList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExpenseList/>
    </>
  )
}

export default App
