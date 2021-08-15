import React from 'react';

function TableOfContents(props) {

    const chapters = Array.from(props.rulebook.chapters.keys()).map((key) => {

        let isSearched = false
        let chapter = props.rulebook.chapters.get(key)
        let hasNoRules = false
        if(props.searchedTuples.find(t => t.chapterKey === key)) isSearched = true
        if(chapter.rules.size === 0) hasNoRules = true

        return (
            <div className={`${hasNoRules ? 'Part' : 'Chapter'} ${isSearched ? 'Searched' : ''}`} onClick={(e) => props.onChapterClicked(key, e)}>
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