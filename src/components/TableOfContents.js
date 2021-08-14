import React from 'react';

function TableOfContents(props) {

    const chapters = Array.from(props.rulebook.chapters.keys()).map((key) => {
        const tempStyle = {
            color: 'black'
        }

        const tempStyle2 = {
            color: 'red'
        }



        let chapter = props.rulebook.chapters.get(key)
        let style = tempStyle
        if(props.searchedTuples.find(t => t.chapterKey === key)) style = tempStyle2

        return (
            <div style={style} onClick={(e) => props.onChapterClicked(key, e)}>
                <span>{key}</span>
                <span>{chapter.name}</span>
            </div>
        )
    })  
    
    return (
        <div class="TableOfContents">
            <ul>
                {chapters}
            </ul>
        </div>
    )
}

export default TableOfContents