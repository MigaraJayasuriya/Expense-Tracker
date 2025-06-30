import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const getExpenses = () => axios.get(`${API_BASE_URL}/expenses/`);

export const addExpense = (expense) =>  
    axios.post(`${API_BASE_URL}/expenses/`, expense);

export const deleteExpense = (id) =>
    axios.delete(`${API_BASE_URL}/expenses/${id}/`);