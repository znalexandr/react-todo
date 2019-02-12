import React from 'react'
import {Subscribe} from 'unstated'

import TodoistContainer from '../../containers/TodoistContainer'

const SearchPanel = (props) => {
    return (
        <Subscribe to={[TodoistContainer]}>
            {TodoistContainer => {
                return (
                    <div>
                        <input className="form-control"
                                placeholder="Поиск..."
                                onChange={(e) => TodoistContainer.handleSearch(e.target.value)}
                                value={TodoistContainer.state.search} />
                    </div>
                )
            }}
        </Subscribe>
        
    )
}

export default SearchPanel