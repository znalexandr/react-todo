import React from 'react'

import { Provider } from 'unstated'

import TodoList from '../components/TodoList/TodoList'
import AppHeader from '../components/AppHeader/AppHeader'
import SearchPanel from '../components/SearchPanel/SearchPanel'
import AppFilter from '../components/AppFilter/AppFilter'
import AddItem from '../components/AddItem/AddItem' 
import AppCount from '../components/AppCount/AppCount' 

/** @jsx jsx */
import { jsx } from '@emotion/core'

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
                        </div>
                        <div className="col-lg-6 text-center">
                            <AppFilter />
                        </div>
                    </div>
                    <div className="mb-3">
                        <TodoList />
                    </div>
                    <AddItem />
                    <div className="mt-5">
                        <div  css={{
                        margin: 0,
                        fontSize: 18,
                        color: '#fa2322',
                        lineHeight: '1.5',
                        fontFamily: 'Sans-Serif',
                        }}>emotion</div>
                    </div>
                </Provider>     
            </React.Fragment>)
    }
}