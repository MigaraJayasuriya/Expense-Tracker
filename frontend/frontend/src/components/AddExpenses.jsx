import { useState } from "react";
import { addExpense } from "../api";

const AddExpenseForm = ({ onAdd }) => {
    const [form, setForm] = useState({
        title: "",
        amount: "",
        category: "",
        description: "",
    });

    const categories = ["Food", "Transport", "Utilities", "Health", "Other"];

    const handleChange = (e) => 
        setForm({...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addExpense({...form, amount: parseFloat(form.amount) });
        onAdd();
        setForm({
            title: "",
            amount: "",
            category: "",
            description: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} value={form.title}/>
            <input name="amount" placeholder="Amount" type="number" onChange={handleChange} value={form.amount}/>
            <select name="category" value={form.category} onChange={handleChange}>
                <option value="" disabled>Select Category</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default AddExpenseForm;
