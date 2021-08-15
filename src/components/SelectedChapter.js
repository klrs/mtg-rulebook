import React from 'react';

function SelectedChapter(props) {

    const chapter = props.rulebook.chapters.get(props.chapterKey)
    const rules = Array.from(chapter.rules.keys()).map((key) => {

        let isSearched = false
        if(props.searchedTuples.find(tuple => tuple.ruleKey === key && tuple.chapterKey === props.chapterKey)) isSearched = true

        return (
            <div className={`Rule ${isSearched ? 'Searched' : ''}`}>
                <span>{key}</span>
                <span>{chapter.rules.get(key)}</span>
            </div>
        )}
    )  

    return (
        <div class="SelectedChapter">
            <h2 className='ChapterTitle'>{props.chapterKey}. {chapter.name}</h2>
            {rules}
        </div>
    )
}

export default SelectedChapter