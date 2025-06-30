import { useState } from 'react'
import './App.css'
import ExpenseList from './components/ExpenseList'
import AddExpenseForm from './components/AddExpenses'

function App() {
  const [reload, setReload] = useState(false);

  return (
    <>
    <AddExpenseForm onAdd={() => setReload(!reload)}/>
    <ExpenseList key={reload}/>
    </>
  )
}

export default App
