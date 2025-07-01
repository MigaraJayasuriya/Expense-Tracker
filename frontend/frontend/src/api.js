import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const getExpenses = () => axios.get(`${API_BASE_URL}/expenses/`);

export const addExpense = (expense) =>  
    axios.post(`${API_BASE_URL}/expenses/`, expense);

export const deleteExpense = (id) =>
    axios.delete(`${API_BASE_URL}/expenses/${id}/`);

export const getTotalExpenses = () =>
    axios.get(`${API_BASE_URL}/expenses/total/`);

// Income-related API calls

export const getIncomes = () => axios.get(`${API_BASE_URL}/incomes/`);

export const addIncome = (income) =>
    axios.post(`${API_BASE_URL}/incomes/`, income);

export const deleteIncome = (id) =>
    axios.delete(`${API_BASE_URL}/incomes/${id}/`);

export const getTotalIncomes = () =>
    axios.get(`${API_BASE_URL}/incomes/total/`);

export const getBalance = () => 
    axios.get(`${API_BASE_URL}/balance/`);