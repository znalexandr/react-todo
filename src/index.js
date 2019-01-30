import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'

class App extends React.Component {
    render = () => (
        <React.Fragment>
            <section className="py-5">
                <div className="container">
                    <AppHeader />
                    <SearchPanel />
                    <TodoList />
                </div>
            </section>
        </React.Fragment>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));
