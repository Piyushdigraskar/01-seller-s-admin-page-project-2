import React, {useRef} from "react";
import classes from './FormData.module.css'
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const FormData = (props)=>{

    const nameRef = useRef();
    const priceRef = useRef();
    const idRef = useRef();

    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredId = idRef.current.value;
        const enteredPrice = priceRef.current.value;
        const enteredName = nameRef.current.value;

        if(enteredId.trim().length === 0 || enteredPrice.trim().length === 0 || enteredName.trim().length === 0){
            return;
        }
        if(+enteredId < 1 || +enteredPrice < 1){
            return;
        }
        props.onAddExpense(enteredId, enteredPrice, enteredName);
        idRef.current.value = '';
        priceRef.current.value = '';
        nameRef.current.value = '';
    }
    return (
        <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="proId">product Id:</label>
                    <input
                        id="proId"
                        type="number"
                        ref={idRef}
                    />
                    <label htmlFor="price">Selling Price:</label>
                    <input
                        id="price"
                        type="number"
                        ref={priceRef}
                    />
                    <label htmlFor="name">Product Name:</label>
                    <input
                        id="name"
                        type="text"
                        ref={nameRef}
                    />
                    <Button type="submit">Add Expense</Button>
                </form>
                <h2>Products:</h2>
            </Card>
    );
}

export default FormData