import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './HOC/Layout/Layout'
import Todoist from './pages/Todoist'

const App = () => <Layout><Todoist /></Layout>; 

ReactDOM.render(<App/>, document.getElementById('root'));
