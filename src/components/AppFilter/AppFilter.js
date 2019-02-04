import React from 'react'

const AppFilter = (props) => {
    return(
        <div className="btn-group w-100">
            <button type="button" className="btn btn-primary">Все</button>
            <button type="button" className="btn btn-outline-primary">Активные</button>
            <button type="button" className="btn btn-outline-primary">Выполненые</button>
        </div>
    )
}

export default AppFilter