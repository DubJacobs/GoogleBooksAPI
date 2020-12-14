import React from 'react'

const SearchArea = (props) => {
    return (
        <div className='search-area'>
            <form onSubmit={props.searchBook} action=''>
                <input onChange={props.handleSearch} type='text'/>
                <button type='submit'>Search</button>
                <select defaultValue='Sort' onChamge={props.handleSort}>
                    <option disable value='Sort'>Sort</option>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea;
