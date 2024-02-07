import React from "react";
import Card from "../UI/Card/Card";
import classes from './DataList.module.css'
import Button from "../UI/Button/Button";

const DataList = (props)=>{

    const deleteHandler = (expenseId)=>{
        props.onDelete(expenseId);
        localStorage.removeItem(expenseId);
    }
    props.expenses.forEach((expense) => {
        localStorage.setItem(expense.id.toString(), JSON.stringify({ name: expense.name, price: expense.price }));
    });
    return <Card className={classes.expenses}>
        <ul>
            {props.expenses.map((expense) => (
                
                <li key={expense.id}>{expense.price} - {expense.name}
                 <Button onClick={() => deleteHandler(expense.id)}>Delete</Button> </li>
            ))}
            
        </ul>
    </Card>
}

export default DataList