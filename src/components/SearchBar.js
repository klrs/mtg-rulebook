import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search for rules"
                onChange={(e) => props.onSearchChange(e.target.value.toLowerCase())}
            />
        </div>
    )
}

export default SearchBar