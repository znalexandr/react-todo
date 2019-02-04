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
            this.createTask("Привет"),
            this.createTask("Мир!"),
            this.createTask("Задача"),
            this.createTask("Task"),
        ],
        createItemTask: '',
        search: '',
        filterTask: false,
    }

    createTask(name) {
        return {
            name, 
            important: false,
            done: false,
            id: this.taskId++
        }
    }

    toggleProperty(arr, id, propName) {
        // 1. обновить объект
            // поиск индекса по значению в объекте
            const idx = arr.findIndex( (el) => el.id === id ) 

            // старый элемент массива
            const oldItem = arr[idx]; 

            // создаем новый элемент (не мутирая старый)
            const newItem = {...oldItem, [propName]: !oldItem[propName]}

        // 2. создать новый массив

            return  [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
                
            ]
    } 

    changeDoneHandler = (id) => {
        this.setState( ({tasks}) => {
            return {
                tasks: this.toggleProperty(tasks, id, 'done')
            }
        })
        
    }

    changeImportantHandler = (id) => {
        this.setState( ({tasks}) => {
            return {
                tasks: this.toggleProperty(tasks, id, 'important')
            }
        })  
    }

    deleteItemHandler = (id) => {
        this.setState( ({tasks}) => {

            // 1. обновить объект
            // поиск индекса по значению в объекте
            const idx = tasks.findIndex( (el) => el.id === id ) 

            // 2. создать новый массив

            const newArray = [
                ...tasks.slice(0, idx),
                ...tasks.slice(idx + 1)
                
            ]

            return {
                tasks: newArray
            }
        }) 
    }
    
    addItemTask = (e) => {

        e.preventDefault()

        this.setState( ({tasks}) => {
            return {
                tasks: [
                    ...tasks,
                    this.createTask(this.state.createItemTask)   
                ],
                createItemTask: '',
                filterTask: false,
            }
        }) 
    }

    addInputChange = (name) => {   
        this.setState((state) => {
            return {
                createItemTask: name
            }
        })
    }

    viewItems = (arr, action = false) => {
        
        const res = arr.filter( (item) => {

            const name = item.name.toLowerCase()
            const search = this.state.search.toLowerCase()

            if(action === "active") {
                return (name.indexOf(search) > -1) && !item.done
            } else if(action === "done") {
                return (name.indexOf(search) > -1) && item.done
            } else {
                return name.indexOf(search) > -1
            }
        })

        return res
    }

    handleSearch = (val) => {
        this.setState(({search}) => {
            return {
                search: val
            }
        })
    }
    
    filterBtnChange = (action) => {
        this.setState(({filterTask}) => {
            return {
                filterTask: action
            }
        })
    }


    render = () =>  {
        
        const doneCount = this.state.tasks.filter((el) => el.done).length
        const activeCount = this.state.tasks.length - doneCount 

        const tasks = this.viewItems(this.state.tasks, this.state.filterTask)

        return (
            <React.Fragment>
                <div className="mb-2">
                    <AppHeader />
                </div> 
                <div className="mb-3">
                    <AppCount done={+doneCount} active={+activeCount} />
                </div>
                <div className="row no-gutters mb-3">
                    <div className="col-lg-6 pr-lg-2 mb-lg-0 mb-3">
                        <SearchPanel 
                            handleSearch={(name) => this.handleSearch(name)}
                            search={this.state.search}
                        />
                    </div>
                    <div className="col-lg-6 text-center">
                        <AppFilter  filterTask={this.state.filterTask}
                                    filterBtnChange={(action) => this.filterBtnChange(action)} />
                    </div>
                </div>
                <div className="mb-3">
                    <TodoList tasks={tasks}
                              changeDoneHandler={ (id) => this.changeDoneHandler(id)}
                              changeImportantHandler={ (id) => this.changeImportantHandler(id)}
                              deleteItemHandler={ (id) => this.deleteItemHandler(id)}
                     />
                </div>
                <AddItem 
                    input={this.state.createItemTask}
                    addInputChange={(name) => this.addInputChange(name)}
                    addItemTask={this.addItemTask}
                />        
            </React.Fragment>)
    }
}