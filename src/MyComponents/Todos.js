import React from 'react'
import { Todo } from "./Todo";

export const Todos = (props) => {
    return (
        <div className="container my-5">
            <h3>ToDos List</h3>
            {props.todos.length === 0 ? "No Data to display" :
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
