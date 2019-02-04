import React from 'react'

const AddItem = (props) => {
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Введите задачу" />
            <div className="input-group-append">
                <button className="btn btn-outline-success" type="button">Добавить</button>
            </div>
        </div>
    )
}

export default AddItem

