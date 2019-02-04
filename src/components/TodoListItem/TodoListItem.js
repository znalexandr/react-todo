import React from 'react'
import './TodoListItem.scss'

const TodoListItem = (props) => {

    const {done, important} = props

    const cls = ['todo-item__name']

    if(done) {
        cls.push('done')
    }

    if(important) {
        cls.push('important')
    }

    return (
        <div className="d-flex align-items-center">
            <div className={cls.join(" ")}
                 onClick={() => props.changeDoneHandler(props.id)}
                 >
                 {props.name}
            </div>
            <div>
                <button type="button" 
                        className="btn btn-outline-success mr-2"
                        onClick={() => props.changeImportantHandler(props.id)}
                >
                    <i className="fa fa-star" aria-hidden="true"></i>
                </button>
                <button 
                    type="button" 
                    className="btn btn-outline-danger"
                    onClick={() => props.deleteItemHandler(props.id)}
                >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem