import React from 'react'
import {Subscribe} from 'unstated'

import TodoistContainer from '../../containers/TodoistContainer'


const AppFilter = () => {

    return (
        <Subscribe to={[TodoistContainer]}>
            {TodoistContainer => {

                const {filterTask} = TodoistContainer.state;

                const clsActive = "btn btn-primary";
                const clsDefault = "btn btn-outline-primary"

                return (
                    <div className="btn-group w-100">
                        <button 
                            type="button" 
                            className={(!filterTask) ? clsActive : clsDefault}
                            onClick={() => TodoistContainer.filterBtnChange(false)}
                        >Все</button>
                        <button type="button" 
                                className={(filterTask === 'active') ? clsActive : clsDefault}
                                onClick={() => TodoistContainer.filterBtnChange('active')}
                        >Активные</button>
                        <button type="button" 
                                className={(filterTask === 'done') ? clsActive : clsDefault}
                                onClick={() => TodoistContainer.filterBtnChange('done')}
                        >Выполненые</button>
                    </div>
                )
            }}
        </Subscribe>
        
    )
}

export default AppFilter