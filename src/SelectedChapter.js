import React from 'react';

function SelectedChapter(props) {

    const rules = Array.from(props.chapter.rules.keys()).map((key) => {

        const isSearched = (rule, search) => rule.includes(search)

        const tempStyle = {
            color: 'black'
        }
    
        const tempStyle2 = {
            color: 'red'
        }
    
        let style = (isSearched(props.chapter.rules.get(key), props.search) && props.search) ? tempStyle2 : tempStyle

        return <div style={style}><span>{key}</span><span>{props.chapter.rules.get(key)}</span></div>}
    )  

    return (
        <div class="selectedChapter">
            {rules}
        </div>
    )
}

export default SelectedChapter