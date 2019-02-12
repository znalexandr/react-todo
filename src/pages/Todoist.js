import React from 'react'

import { Provider} from 'unstated'

import TodoList from '../components/TodoList/TodoList'
import AppHeader from '../components/AppHeader/AppHeader'
import SearchPanel from '../components/SearchPanel/SearchPanel'
import AppFilter from '../components/AppFilter/AppFilter'
import AddItem from '../components/AddItem/AddItem' 
import AppCount from '../components/AppCount/AppCount' 



export default class App extends React.Component { 
    render = () =>  {
        
        return (
            <React.Fragment>
                <Provider>
                    <div className="mb-2">
                        <AppHeader />
                    </div> 
                    <div className="mb-3">
                        <AppCount />
                    </div>
                    <div className="row no-gutters mb-3">
                        <div className="col-lg-6 pr-lg-2 mb-lg-0 mb-3">
                            <SearchPanel />
                            {/* <SearchPanel 
                                handleSearch={(name) => this.handleSearch(name)}
                                search={this.state.search}
                            /> */}
                        </div>
                        <div className="col-lg-6 text-center">
                            <AppFilter />
                            {/* <AppFilter  filterTask={this.state.filterTask}
                                        filterBtnChange={(action) => this.filterBtnChange(action)} /> */}
                        </div>
                    </div>
                    <div className="mb-3">
                            <TodoList />
                            {/* <TodoList tasks={tasks}
                                        changeDoneHandler={ (id) => this.changeDoneHandler(id)}
                                        changeImportantHandler={ (id) => this.changeImportantHandler(id)}
                                        deleteItemHandler={ (id) => this.deleteItemHandler(id)}
                            /> */}
                        
                    </div>
                    <AddItem />
                    {/* <AddItem 
                        input={this.state.createItemTask}
                        addInputChange={(name) => this.addInputChange(name)}
                        addItemTask={this.addItemTask}
                    /> */}
                </Provider>     
            </React.Fragment>)
    }
}