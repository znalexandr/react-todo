import React from 'react'

import TodoList from '../components/TodoList/TodoList'
import AppHeader from '../components/AppHeader/AppHeader'
import SearchPanel from '../components/SearchPanel/SearchPanel'

export default class App extends React.Component {
    render()  {
        return (<React.Fragment>
                <AppHeader />
                <SearchPanel />
                <TodoList />        
            </React.Fragment>)
    }
}