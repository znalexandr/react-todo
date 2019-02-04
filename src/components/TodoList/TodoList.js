import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'

const TodoList = (props) => {
    return(
        <ul>
            <li><TodoListItem/></li>
        </ul>
    )
}

export default TodoList