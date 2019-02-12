import React from 'react'


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="./">Todoist</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="./">Задачи <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./index">Просто страница</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header