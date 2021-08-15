import React from 'react';

function Loading(props) {

    return (
        <div>
            <h2>Loading...</h2>
            <span>{props.message}</span>
        </div>
    )
}

export default Loading