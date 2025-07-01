import { useState } from 'react'
import './App.css'
import ExpenseList from './components/ExpenseList'
import AddExpenseForm from './components/AddExpenses'
import IncomeList from './components/IncomeList'
import AddIncome from './components/AddIncome'
import Balance from './components/Balance'

function App() {
  const [reload, setReload] = useState(false);

  return (
    <>
    <AddExpenseForm onAdd={() => setReload(!reload)}/>
    <ExpenseList key={reload}/>
    <AddIncome onAdd={() => setReload(!reload)}/>
    <IncomeList/>
    <Balance/> 
    </>
  )
}

export default App
