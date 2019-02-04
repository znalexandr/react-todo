import React, {Component} from 'react'
import './Layout.scss'

export default class Layout extends Component{
    render() {
        return(
            <React.Fragment>
                <main className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
