import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './HOC/Layout/Layout'
import Todoist from './containers/Todoist'

const App = () => <Layout><Todoist /></Layout>; 

ReactDOM.render(<App/>, document.getElementById('root'));
