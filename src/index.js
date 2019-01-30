import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);   

        this.state = {
            counter: 0
        }
    }

    setCounter = (val) => {
        const counter = this.state.counter
        console.log(counter)
        this.setState({
            counter: counter + val
        })
    }

    render = () => (
        <React.Fragment>
            <section className="py-5">
                <div className="container">
                    <h1>Приложение Todo: Старт</h1>
                    <Counter counter={this.state.counter} setCounter={this.setCounter} />
                </div>
            </section>
        </React.Fragment>
    )
}

function Counter(props) {
    return(
        <div>
            <h2>{props.counter}</h2>
            <button className="btn btn-primary mr-1" onClick={() => props.setCounter(1)}>Добавить</button>
            <button className="btn btn-danger" onClick={() => props.setCounter(-1)}>Вычесть</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
