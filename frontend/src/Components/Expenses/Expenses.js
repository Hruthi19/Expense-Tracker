import React, {useEffect} from 'react'
import '../../styles/Layouts.css'
import { useGlobalContext } from '../../context/globalContext'
import ExpenseForm from '../Expenses/ExpenseForm'
import IncomeItem from '../IncomeItem/IncomeItem'
import "../../styles/Income.css"

function Expenses() {

  const {addIncome, expenses, getExpenses, deleteExpense, totalExpense} = useGlobalContext()
  
  useEffect (() => {
    getExpenses();
  },[]);

  return (
    <div className = "income-styled">
    <div className = "inner-layout">
        <h1>Expenses</h1>
        <h2 className = "total-income">
          Total Expense: <span>${totalExpense()}</span>
        </h2>
        <div className="income-content">
            <div className = "form-container">
                <ExpenseForm/>
                <div className = "incomes">
                    {expenses.map((income) => {
                        const {_id, title, amount, date, type, category, description} = income;
                        return (
                        <IncomeItem
                            key = {_id}
                            id = {_id}
                            title = {title}
                            description = {description}
                            amount = {amount}
                            date = {date}
                            type = {type}
                            category = {category}
                            indicator = "var(--color-green)"
                            deleteItem = {deleteExpense}
                        />
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Expenses

