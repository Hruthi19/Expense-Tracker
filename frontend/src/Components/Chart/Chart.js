import React from 'react'
import { Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useGlobalContext} from '../../context/globalContext'
import {DateFormat} from '../../utils/DateFormat'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {

    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map((inc) => {
            const {date} = inc
            return DateFormat(date)
        }),

        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: 0.2
            }
        ]
    }

  return (
    <div className = 'chart'>
      <Line data = {data}/>
    </div>
  )
}

export default Chart

