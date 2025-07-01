import { useState, useEffect } from "react";
import { getExpenses, deleteExpense, getTotalExpenses } from "../api";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        loadExpenses();
        loadTotalExpenses();
    }, []);

    const loadExpenses = async () => {
        const res = await getExpenses();
        setExpenses(res.data);
    };

    const loadTotalExpenses = async () => {
        const res = await getTotalExpenses();
        setTotalExpenses(res.data.total);
    };

    const handleDelete = async (id) => {
        await deleteExpense(id);
        await loadExpenses();
        await loadTotalExpenses();
    };

    return (
        <div>
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
            <div>
                <h2>Total Expenses</h2>
                <p>${totalExpenses}</p>
            </div>
        </div>
    );
}

export default ExpenseList;