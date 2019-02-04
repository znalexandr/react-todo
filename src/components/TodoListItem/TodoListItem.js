import React from 'react'
import './TodoListItem.scss'

const TodoListItem = (props) => {
    return (
        <div className="d-flex align-items-center">
            <div className="todo-item__name" style={{flexGrow: '1'}}>{props.name}</div>
            <div>
                <button type="button" className="btn btn-outline-success mr-2">
                    <i className="fa fa-star" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-outline-danger">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem