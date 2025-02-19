import React, { useState } from "react";
import useLocalStorageState from "./useLocalStorageState";
import {v4 as uuid} from "uuid";
import Todo from "./Todo";
import { TodoInterface } from "./types";

function TodoList(){
    // state for form input
    const [task, setTask] = useState("");
    // state for todo list
    const [todos, setTodos] = useState<TodoInterface[]>([]);

    // form input handler
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>){
        setTask(evt.target.value)
    }

    // form submission handler
    function handleSubmit(evt: React.FormEvent){
        evt.preventDefault();
        if(task===""){
            alert("Must add a to-do!")
        }
        else{
            setTodos(t => [...t, {id: uuid(), task, isCompleted: false}])
            setTask("");
        }
    }

    // todo toggle handler
    function toggleCompletion(id: string): void{
        setTodos(todos.map(t => t.id===id? {...t, isCompleted: !t.isCompleted} : t));
    }

    // todo removal handler
    function removeTodo(id: string): void{
        setTodos(todos.filter(t => t.id !== id))
    }

    return (
        <>
            <h1>TO-DO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input value={task} onChange={handleChange}/>
                <button>Add</button>
            </form>
            <ul>
                {todos.map(t => <Todo key={t.id} 
                            todoItem={t} 
                            toggle={toggleCompletion}
                            remove={removeTodo}
                />)}
            </ul>
        </>
    )
}

export default TodoList;