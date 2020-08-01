import  {useState} from "react";
import {_decrease} from "./_decrease";
import {_increase} from "./_increase";
import {_reset} from "./_reset";
import { v4 as uuid } from 'uuid';


export const useCounter =(x)=>{
    const  rand = +(Math.random() * 10).toFixed();
    const initialList = [
        {id: uuid(), x: 1},
        {id: uuid(), x: 2},
        {id: uuid(), x: 3}
    ];
    const [count, setCount] = useState(0);
    const [list, setList] = useState(initialList);

    const handleMinus = () => setCount(_decrease(count,x));

    const handlePlus = () => setCount(_increase(count,x));

    const handleReset = () => setCount(_reset);

    const handleDelete =(id) => {
        const idx =list.findIndex((el) => el.id === id);

        const newList =  [
            ...list.slice(0, idx),
            ...list.slice(idx + 1)
        ];
        return setList(newList);
    }

    const handleAddCounter = () => {
        setList([...list, { id:uuid(), x: rand}])
    }

    return {
        count,
        list,
        handlePlus,
        handleMinus,
        handleReset,
        handleDelete,
        handleAddCounter
    }

}
