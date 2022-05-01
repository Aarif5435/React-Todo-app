import { useState } from "react"
import "./style.css"
import {TodoInput} from "./TodoInput"

export const TodoList = ()=>{
    const [text,setText] = useState("");
    const [items, setItems] = useState([]);

    const getData = ()=>{
        setItems((pre)=>{
           return [...pre,text];
        });
        setText("")
    }
    const delte = (id)=>{
        console.log(id)
        setItems((pre)=>{
            return pre.filter((arr,ind)=>{
                return ind !== id
            })
        })
        
    }

    return (
        <div className="TodoList">
           <div className="trap">Todo List</div>
           <TodoInput setValue={setText} val={text} data={getData} />
           <div>
             {items.map((e,index)=>(
                 <div className="item-div" style={{display:"flex"}}>
                     <button className="delete-btn" onClick={()=>{delte(index)}}>x</button>
                    <h3 className="todo-item" key={index}>{e}</h3>
                 </div>
                 

             ))}
           </div>
        </div>
    )
}