import React, {useState} from 'react';
import './App.css';
import FormData from './components/AdminPage/FormData';
import DataList from './components/AdminPage/DataList';
import TotalPrice from './components/AdminPage/TotalPrice';


const App = () => {
  const [expenseList, setExpenseList] = useState([]);

  const onAddExpenseHandler = (uId, uPrice, uName)=>{
    setExpenseList((prevExpenseList)=>{
      return [...prevExpenseList, {id:uId, price:uPrice, name:uName}];
    })
  }
  const onDeleteHandler = (expenseId)=>{
    setExpenseList((prevExpense)=>{
      const updatedExpense = prevExpense.filter(expense => expense.id !== expenseId)
      return updatedExpense;
    })
  }

  return (
    <div>
      <FormData onAddExpense={onAddExpenseHandler}></FormData>
      <DataList 
      expenses={expenseList}
      onDelete={onDeleteHandler}
      ></DataList>
      <TotalPrice
      expenses={expenseList}
      >
      </TotalPrice>
      
    </div>

  );
};

export default App;
