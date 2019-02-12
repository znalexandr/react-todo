import React, {Component} from 'react'
import './Layout.scss'

import Header from '../../components/_template/Header/Header'

export default class Layout extends Component{
    render() {
        return(
            <React.Fragment>
                <Header />
                <main className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-xl-6">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
