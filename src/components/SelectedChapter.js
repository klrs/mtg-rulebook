import React from 'react';

function SelectedChapter(props) {

    const chapter = props.rulebook.chapters.get(props.chapterKey)
    const rules = Array.from(chapter.rules.keys()).map((key) => {

        const tempStyle = {
            color: 'black'
        }
    
        const tempStyle2 = {
            color: 'red'
        }
    
        let style = tempStyle
        if(props.searchedTuples.find(tuple => tuple.ruleKey === key && tuple.chapterKey === props.chapterKey)) style = tempStyle2

        return <div style={style}>
            <span>{key}</span>
            <span>{chapter.rules.get(key)}</span>
        </div>}
    )  

    return (
        <div class="selectedChapter">
            {rules}
        </div>
    )
}

export default SelectedChapter