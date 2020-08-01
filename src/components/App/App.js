import React from 'react';
import {Counter} from "../Counter";
import {useCounter} from "../../assets/useCounter";

import s from './App.module.css';



export function App() {
    const { list, handleAddCounter, handleDelete } = useCounter();
    const counterJSX = list.map((el) =>
        <Counter
            key={el.id}
            id={el.id}
            value={el.x}
            handleDelete={handleDelete}
        />);
    return (
        <div className={s.wrap}>
            {counterJSX}
            <button className={s.addButton} onClick={handleAddCounter}>ADD COUNTER</button>
        </div>
    );
}

