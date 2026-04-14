import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    let [todos , setTodos] = useState([{task : "Sample-Task" , id:uuidv4()}]);
    let [newTodo , setNewTodo] = useState("");

    let addTask = () => {
        setTodos((prevTodos) => {
            return[...prevTodos , {task:newTodo , id:uuidv4()}]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
        
    }

    let deleteTodo = (id) => {
        setTodos((todo) => todos.filter((todo) => {todo.id != id}));
        
    }

    

    return(
        <div>
            <input type="text"  placeholder="enter task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addTask}>Add Task</button>
            <br /><br />
            <br /><br />

            <hr />
                <h1>TODO List</h1>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>
                                <span>{todo.task}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            </li>
                        ))
                    }
                </ul>
        </div>
    );
}

