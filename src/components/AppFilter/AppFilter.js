import React from 'react'


const AppFilter = (props) => {

    const {filterTask} = props;

    const clsActive = "btn btn-primary";
    const clsDefault = "btn btn-outline-primary"

    return(
        <div className="btn-group w-100">
            <button 
                type="button" 
                className={(!filterTask) ? clsActive : clsDefault}
                onClick={() => props.filterBtnChange(false)}
            >Все</button>
            <button type="button" 
                    className={(filterTask === 'active') ? clsActive : clsDefault}
                    onClick={() => props.filterBtnChange('active')}
            >Активные</button>
            <button type="button" 
                    className={(filterTask === 'done') ? clsActive : clsDefault}
                    onClick={() => props.filterBtnChange('done')}
            >Выполненые</button>
        </div>
    )
}

export default AppFilter