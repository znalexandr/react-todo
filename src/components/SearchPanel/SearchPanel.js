import React from 'react'

const SearchPanel = (props) => {
    return(
        <div>
            <input className="form-control"
                    placeholder="Поиск..."
                    onChange={(e) => props.onSearch(e.target.value)}
                    value={props.search} />
        </div>
    )
}

export default SearchPanel