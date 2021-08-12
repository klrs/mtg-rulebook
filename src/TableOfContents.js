import React from 'react';

function TableOfContents(props) {

    const hasSearchedRules = (chapter, search) => {
        for(let rule of chapter.rules.values()) {
            if(rule.includes(search)) return true
        }

        return false
    }

    const chapters = Array.from(props.rulebook.chapters.keys()).map((key) => {
        const tempStyle = {
            color: 'black'
        }

        const tempStyle2 = {
            color: 'red'
        }



        let chapter = props.rulebook.chapters.get(key)
        let isSearched = (hasSearchedRules(chapter, props.search) && props.search) ? tempStyle2 : tempStyle

        return (
            <div style={isSearched} onClick={(e) => props.onChapterClicked(key, e)}>
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