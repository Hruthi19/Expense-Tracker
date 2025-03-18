import React, {useEffect} from 'react'
import '../../styles/Layouts.css'
import '../../styles/Dashboard.css'
import Chart from '../Chart/Chart'
import {dollar} from '../../utils/icons'
import { useGlobalContext } from '../../context/globalContext'
import History from '../History/History'

function Dashboard() {

    const {totalExpense, totalIncome, getIncomes, getExpenses, incomes, expenses} = useGlobalContext()

    useEffect(() => {
      getIncomes()
      getExpenses()
    },[])

  return (
    <div>
    <div className = "inner-layout">
        <h1>All Transactions</h1>
        <div className = 'stats-con'>
            <div className = 'chart-con'>
                <Chart/>
                <div className = 'amount-con'>
                  <div className='income'>
                    <h2>Total Income</h2>
                    <p className = 'total-amount'>
                      {dollar} {totalIncome()}
                    </p>
                  </div>
                  <div className='expense'>
                    <h2>Total Expense</h2>
                    <p className = 'total-amount'>
                      {dollar} {totalExpense()}
                    </p>
                  </div>
                  <div className = 'balance'>
                  <h2>Total Balance</h2>
                    <p className = 'balance-amount'>
                      {dollar} {totalIncome() - totalExpense()}
                    </p>
                  </div>
                </div>
            </div>
            <div className = 'history-con'>
                <History/>
              <h2 className = 'salary-title'> Min <span className = 'salary'>Salary</span>
               Max </h2> 
              <div className = 'salary-item'>
                <p>
                    {Math.min(...incomes.map(item => item.amount))}
                </p>
                <p>
                    {Math.max(...incomes.map(item => item.amount))}
                </p>
              </div>
              <h2 className = 'salary-title'> Min <span className = 'salary'>Expense</span>
               Max </h2>  
              <div className = 'salary-item'>
                <p className = 'min-max'>
                    {Math.min(...expenses.map(item => item.amount))}
                </p>
                <p className = 'min-max'>
                    {Math.max(...expenses.map(item => item.amount))}
                </p>
              </div>   
            </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard
