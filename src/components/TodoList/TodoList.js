import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'

const TodoList = (props) => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <TodoListItem/>
            </li>
            <li className="list-group-item">
                <TodoListItem/>
            </li>
            <li className="list-group-item">
                <TodoListItem/>
            </li>
        </ul>
    )
}

export default TodoList