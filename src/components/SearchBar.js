import React from 'react';

function SearchBar(props) {
    return (
        <div className='SearchBar'>
            <input
                type="text"
                placeholder="Search for rules"
                onChange={(e) => props.onSearchChange(e.target.value.toLowerCase())}
            />
        </div>
    )
}

export default SearchBar