import React from 'react';
import {useCounter} from "../../assets/useCounter";

import s from './Counter.module.css';

export const Counter = ({id,value, handleDelete}) => {

    const {count, handleMinus, handlePlus, handleReset} = useCounter(value);
    return (
        <div className={s.counter}>
            <button className={s.btn} onClick={handleMinus}>-{value}</button>
            <div className={s.count}>{count}</div>
            <button className={s.btn} onClick={handlePlus}>+{value}</button>
            <button className={s.reset} onClick={handleReset}>RESET</button>
            <button className={s.delete} onClick={()=>handleDelete(id)}>DELETE</button>
        </div>
    );
};
