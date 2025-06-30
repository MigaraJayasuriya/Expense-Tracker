import { useState, useEffect } from "react";
import { getExpenses, deleteExpense } from "../api";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        loadExpenses();
    }, []);

    const loadExpenses = async () => {
        const res = await getExpenses();
        setExpenses(res.data);
    };

    const handleDelete = async (id) => {
        await deleteExpense(id);
        loadExpenses();
    };

    return (
        <div>
            <h2>All Expenses</h2>
            <ul>
                {expenses.map((exp) => (
                    <li key={exp.id}>
                        {exp.title} - ${exp.amount} ({ exp.category })
                        <button onClick={() => handleDelete(exp.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;