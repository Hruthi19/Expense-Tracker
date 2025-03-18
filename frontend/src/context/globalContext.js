import React, {useState, useContext} from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5001/api/v1";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //incomes
    const addIncome = async(income) => {
        try{
            const response = await axios.post(`${BASE_URL}/add-income`, income);
        }
        catch(err) {
            setError(err.response.data.message);
        }
        getIncomes();
    }

    const getIncomes = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/get-income`);
            setIncomes(response.data)
            console.log(response.data)
        }
        catch(err) {
            setError(err.response.data.message);
        } 
        
    }
     
    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}/delete-income/${id}`)
        getIncomes();
    }
    
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount;
        })
        return totalIncome;
    }

    //expenses
    const addExpense = async(income) => {
        try{
            const response = await axios.post(`${BASE_URL}/add-expense`, income);
        }
        catch(err) {
            setError(err.response.data.message);
        }
        getExpenses();
    }

    const getExpenses = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/get-expenses`);
            setExpenses(response.data)
            console.log(response.data)
        }
        catch(err) {
            setError(err.response.data.message);
        } 
        
    }
     
    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}/delete-expense/${id}`)
        getExpenses();
    }
    
    const totalExpense = () => {
        let totalIncome = 0;
        expenses.forEach((income) => {
            totalIncome += income.amount;
        })
        return totalIncome;
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

    return (
        <GlobalContext.Provider value = {{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            expenses,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpense,
            transactionHistory
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}