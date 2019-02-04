import React from 'react'
import TodoListItem from '../../components/TodoListItem/TodoListItem' 

export default class TodoList extends React.Component {
    

    tasksRender() {
        const {tasks} = this.props

        if(!tasks.length) {
            return (<div className="py-3 text-center">
                        <h4>Нет задач</h4>
                    </div>)
        }

        return tasks.map(item => {
            return(
                <li key={item.id} className="list-group-item">
                    <TodoListItem 
                        id={item.id}
                        name={item.name}
                        important={item.important}
                        done={item.done}
                        changeDoneHandler={() => this.props.changeDoneHandler(item.id)}
                        changeImportantHandler={() => this.props.changeImportantHandler(item.id)}
                        deleteItemHandler={() => this.props.deleteItemHandler(item.id)}
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
