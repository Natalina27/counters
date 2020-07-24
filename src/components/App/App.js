import React from 'react';
import {Counter} from "../Counter";

import s from './App.module.css';


export function App() {
    const x = 1, y = 10, rand = +(Math.random() * 10).toFixed();
    return (
        <div className={s.wrap}>
            <Counter x={x}/>
            <Counter x={y}/>
            <Counter x={rand}/>
            <button>ADD COUNTER</button>
        </div>
    );
}

