import React from "react";
import classes from './TotalPrice.module.css';
import Card from "../UI/Card/Card";


const TotalPrice = (props)=>{
    let totalPrice = 0;
    for (const expense of props.expenses) {
        totalPrice += parseInt(expense.price);
    }
    return <Card className={classes.total}>
        <p >Total Price: ${totalPrice}</p>
    </Card>
}

export default TotalPrice;