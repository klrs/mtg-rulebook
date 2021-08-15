import React from 'react';

function TableOfContents(props) {

    const chapters = Array.from(props.rulebook.chapters.keys()).map((key) => {

        const chapter = props.rulebook.chapters.get(key)
        let isSearched = (props.searchedTuples.find(t => t.chapterKey === key)) ? true : false
        let hasNoRules = (chapter.rules.size === 0) ? true : false

        return (
            <div key={key} className={`MenuItem ${hasNoRules ? 'Part' : 'Chapter'} ${isSearched ? 'Searched' : ''}`} onClick={(e) => props.onChapterClicked(key, e)}>
                <span>{key}</span>
                <span>{chapter.name}</span>
            </div>
        )
    })  
    
    return (
        <div className="TableOfContents">
            {chapters}
        </div>
    )
}

export default TableOfContents