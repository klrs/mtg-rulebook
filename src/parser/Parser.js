import Rulebook from './Rulebook.js';


class Token {
    constructor(id, text) {
        this.id = id
        this.text = text
    }
}

class Parser {

    parse(rawData) {

        let rulebook = new Rulebook
        let lines = this.trimToLines(rawData)

        for(const line of lines) {
            console.log(line)
            let token = this.tokenize(line)
            let chapterId = this.extractChapterId(token.id)

            if(!isNaN(chapterId)) {
                let ruleId = this.extractRuleId(token.id)
                if(ruleId === undefined) rulebook.addChapter(chapterId, token.text)
                else rulebook.addRule(ruleId, token.text, chapterId)
            }
        }
        
        return rulebook
    }

    trim(rawData, firstLineString, terminatorString) {

        let index = rawData.indexOf(firstLineString)
        let endOfRulesIndex = rawData.indexOf(terminatorString, index)
        let trimmedData = rawData.slice(index, endOfRulesIndex)

        return trimmedData
    }

    trimToLines(rawData) {
        const trimmedData = this.trim(rawData, '1. Game Concepts\r\n\r\n', 'Glossary')
        const seperator = /\r?\n/

        let lines = trimmedData.split(seperator)
        return lines
    }

    tokenize(line) {
        line = line.trimStart()
        const seperator = line.indexOf(' ')
        let token = new Token(line.substring(0, seperator), line.substring(seperator))

        return token
    }

    extractChapterId(tokenId) {
        return parseInt(tokenId.substring(0, tokenId.indexOf('.')))
    }

    extractRuleId(tokenId) {
        let tokenParts = tokenId.split('.')
        return tokenParts.length > 1 && tokenParts[1] !== '' ? tokenParts[1] : undefined
    }
}

export default Parser