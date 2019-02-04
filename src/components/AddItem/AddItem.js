import React from 'react'


const AppCount = (props) => {
    return (
        <form   className="input-group"
                onSubmit={props.addItemTask}>
            <input  type="text" 
                    className="form-control" 
                    placeholder="Введите задачу" 
                    value={props.input}
                    onChange={(e) => props.addInputChange(e.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-success" 
                        type="submit"
                        disabled={!props.input}
                >Добавить</button>
            </div>
        </form>
    )
}

export default AppCount