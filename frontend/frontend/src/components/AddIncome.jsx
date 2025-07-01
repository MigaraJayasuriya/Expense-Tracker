import { useState } from "react";
import { addIncome } from "../api";

const AddIncome = ({ onAdd }) => {
    const [form, setForm] = useState({
        title: "",
        amount: "",
        description: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addIncome({ ...form, amount: parseFloat(form.amount) });
        onAdd();
        setForm({
            title: "",
            amount: "",
            description: "",
        });
    }

    return  (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} value={form.title} />
            <input name="amount" placeholder="Amount" type="number" onChange={handleChange} value={form.amount} />
            <input name="description" placeholder="Description" onChange={handleChange} value={form.description} />
            <button type="submit">Add Income</button>
        </form>
    );
};

export default AddIncome;

