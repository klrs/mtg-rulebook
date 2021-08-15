import React from 'react';

class Fetcher extends React.Component {

    render() {


        const corsProxy = 'https://api.allorigins.win/get?url='
        const rulesUrl = 'https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt'

        fetch(corsProxy + rulesUrl)
        .then(response => response.json())
        .then(data => console.log(data))

        return (<div></div>)
    }
}

export default Fetcher