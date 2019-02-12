import React from 'react'

import {Subscribe} from 'unstated'
import TodoistContainer from '../../containers/TodoistContainer'


const AppCount = (props) => {
    
    return (
        <Subscribe to={[TodoistContainer]}>
            {TodoistContainer => {
                const doneCount = TodoistContainer.state.tasks.filter((el) => el.done).length
                const activeCount = TodoistContainer.state.tasks.length - doneCount 

                return (
                    <div>
                        {activeCount} активных, {doneCount} выполеных
                    </div>
                )
            }}
        </Subscribe>
    )
}

export default AppCount