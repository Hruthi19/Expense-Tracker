import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import "../../styles/Form.css"
import Button from '../Button/Button';
import {plus} from '../../utils/icons';

function Form() {
    const {addIncome, getIncomes}=useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title, amount, date, category, description} = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        addIncome(inputState)
        getIncomes();
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '' 
        })
    }

  return (
    <form onSubmit = {handleSubmit}>
        <div className = "input-control">
      <input 
      type="text"
      value = {title}
      name = {'title'}
      placeholder = "Salary Title"
      onChange = {handleInput('title')}
       />
    </div>
    <div className = "input-control">
    <input 
    type="text"
    value = {amount}
    name = {'amount'}
    placeholder = {"Salary Amount"}
    onChange = {handleInput('amount')} 
    />
    </div>
    <div className = "input-control">
        <DatePicker
            id = 'date'
            placeholderText = 'Enter a date'
            selected = {date}
            dateFormat = "dd/MM/yyyy"
            onChange = {(date) => {
                setInputState({...inputState, date: date})
            }}
        />
    </div>
    <div className = "selects input-control">
        <select 
        required value = {category} 
        name = "category" 
        id = "category"
        onChange = {handleInput('category')}>
            <option value = "" disabled>Select Option</option>
            <option value = "salary" >Salary</option>
            <option value = "freelancing" >Freelancing</option>
            <option value = "investments" >Investments</option>
            <option value = "stocks" >Stocks</option>
            <option value = "bitcoin" >Bitcoin</option>
            <option value = "bank" >Bank Transfer</option>
            <option value = "youtube" >Youtube</option>
            <option value = "other" >Other</option>

        </select>

    </div>
    <div className = "input-control">
            <textarea 
            name = "description" 
            value = {description} placeholder = "Add a reference" 
            id = "description"
            cols = "30"
            rows = "4"
            onChange = {handleInput('description')}></textarea>
    </div>
    <div className = "submit-btn">
            <Button
                name = {'Add Income'}
                icon = {plus}
                bPad = {'.8rem 1.6rem'}
                bRad = {'30px'}
                bg = {'var(--color-accent'}
                color = {'#fff'}
                
            />
    </div>
    </form>
    
  )
}

export default Form
