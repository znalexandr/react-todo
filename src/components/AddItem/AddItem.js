import React from 'react'
import { Subscribe } from 'unstated'
 
import TodoistContainer from '../../containers/TodoistContainer'

const AppCount = () => {
    return (
        <Subscribe to={[TodoistContainer]}>
            {TodoistContainer => {
                return (
                    <form   className="input-group"
                            onSubmit={TodoistContainer.addItemTask}>
                        <input  type="text" 
                                className="form-control" 
                                placeholder="Введите задачу" 
                                value={TodoistContainer.state.createItemTask}
                                onChange={(e) => TodoistContainer.addInputChange(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" 
                                    type="submit"
                                    disabled={!TodoistContainer.state.createItemTask}
                            >Добавить</button>
                        </div>
                        {TodoistContainer.state.createItemTask}
                    </form>
                )
            }}
        </Subscribe>
    )    
}

export default AppCount