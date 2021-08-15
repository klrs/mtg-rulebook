import React from 'react';

function SelectedChapter(props) {

    const chapter = props.rulebook.chapters.get(props.chapterKey)
    const rules = Array.from(chapter.rules.keys()).map((key) => {

        let isSearched = false
        if(props.searchedTuples.find(tuple => tuple.ruleKey === key && tuple.chapterKey === props.chapterKey)) isSearched = true

        return (
            <div key={key} className={`MenuItem Rule ${isSearched ? 'Searched' : ''}`}>
                <span>{key}</span>
                <span>{chapter.rules.get(key)}</span>
            </div>
        )}
    )  

    const title = props.chapterKey + '. ' + chapter.name

    return (
        <div className="SelectedChapter">
            <h2 className='ChapterTitle'>{title}</h2>
            {rules}
        </div>
    )
}

export default SelectedChapter