import React from 'react'
import TodoListItem from '../../components/TodoListItem/TodoListItem' 

export default class TodoList extends React.Component {

    tasksRender() {
        const {tasks} = this.props
        return tasks.map(item => {
            return(
                <li key={item.id} className="list-group-item">
                    <TodoListItem 
                        id={item.id}
                        name={item.name}
                        important={item.important}
                        done={item.done}
                        />
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.tasksRender()}
            </ul>
        )
    }
}
