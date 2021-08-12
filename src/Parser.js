import Rulebook from './Rulebook.js';

class Parser {

    parse(rawData) {

        let rulebook = new Rulebook
        let lines = this.trimToLines(rawData)

        for(const line of lines) {
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

    trimToLines(rawData) {
        let index = rawData.indexOf('1. Game Concepts  ')
        rawData = rawData.slice(index, rawData.length)

        let endOfRulesIndex = rawData.indexOf('Glossary')
        rawData = rawData.slice(0, endOfRulesIndex)
    
        let lines = rawData.split('  ')

        return lines.filter(line => line)
    }

    tokenize(line) {
        line = line.trimStart()
        let token = {id: null, text: null}

        let seperator = line.indexOf(' ')
        token.id = line.substring(0, seperator)
        token.text = line.substring(seperator)

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