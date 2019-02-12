import React from 'react'
import { Subscribe } from 'unstated'
 
import TodoistContainer from '../../containers/TodoistContainer'

import TodoListItem from '../TodoListItem/TodoListItem' 
 
const taskRender = (container) => {
        
        const tasks = container.viewItems(container.state.tasks, container.state.filterTask)

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
                        changeDoneHandler={() => container.changeDoneHandler(item.id)}
                        changeImportantHandler={() => container.changeImportantHandler(item.id)}
                        deleteItemHandler={() => container.deleteItemHandler(item.id)}
                        />
                </li>
            )
        })
}

const TodoList = () => {
  return (
    <Subscribe to={[TodoistContainer]}>
      {TodoistContainer => taskRender(TodoistContainer)}
    </Subscribe>
  )
}
 
export default TodoList