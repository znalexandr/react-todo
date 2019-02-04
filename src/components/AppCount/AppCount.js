import React from 'react'


const AppCount = (props) => {
    return (
        <div>
            {props.active} активных, {props.done} выполеных
        </div>
    )
}

export default AppCount