import { useState, useEffect } from "react";
import { getIncomes, deleteIncome, getTotalIncomes } from "../api";

const IncomeList = () => {
    const [incomes, setIncomes] = useState([]);
    const [totalIncomes, setTotalIncomes] = useState(0);

    useEffect(() => {
        loadIncomes();
        loadTotalIncomes();
    }, [])

    const loadIncomes = async () => {
        const res = await getIncomes();
        setIncomes(res.data);
    }

    const loadTotalIncomes = async () => {
        const res = await getTotalIncomes();
        setTotalIncomes(res.data.total);
    }

    const handleDelete = async (id) => {
        await deleteIncome(id);
        await loadIncomes();
        await loadTotalIncomes();
    }

    return (
        <div>
            <div>
                <h2>All Incomes</h2>
                <ul>
                    {incomes.map((inc) => (
                        <li key={inc.id}>
                            {inc.title} - ${inc.amount} ({inc.description})
                            <button onClick={() => handleDelete(inc.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Total Income</h2>
                <p>${totalIncomes}</p>
            </div>
        </div>
    );
}

export default IncomeList;