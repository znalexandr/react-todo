import React from 'react'

import TodoList from '../containers/TodoList/TodoList'
import AppHeader from '../components/AppHeader/AppHeader'
import SearchPanel from '../components/SearchPanel/SearchPanel'
import AppFilter from '../components/AppFilter/AppFilter'
import AddItem from '../components/AddItem/AddItem' 
import AppCount from '../components/AppCount/AppCount' 

export default class App extends React.Component { 

    taskId = 100

    state = {
        tasks: [
            this.createTask("Задача 1"),
            this.createTask("Задача 2"),
            this.createTask("Задача 3"),
            this.createTask("Задача 4"),
        ]
    }

    createTask(name) {
        return {
            name,
            important: false,
            done: false,
            id: this.taskId++
        }
    }

    render()  {
        return (
            <React.Fragment>
                <div className="mb-2">
                    <AppHeader />
                </div> 
                <div className="mb-3">
                    <AppCount />
                </div>
                <div className="row no-gutters mb-3">
                    <div className="col-lg-6 pr-lg-2 mb-lg-0 mb-3">
                        <SearchPanel />
                    </div>
                    <div className="col-lg-6 text-center">
                        <AppFilter />
                    </div>
                </div>
                <div className="mb-3">
                    <TodoList tasks={this.state.tasks} />
                </div>
                <AddItem />        
            </React.Fragment>)
    }
}