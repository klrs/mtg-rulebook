
import Parser from './Parser.js'

let parser = new Parser()

test('returns array file of the numbered rules and chapters of the rule data text file', () => {
    let data = 'This is mock rule data\r\n\r\n1. Game Concepts\r\n\r\n100. First\r\n\r\n100.1. Test\r\n\r\n100.1a Test2\r\n\r\nGlossary'

    expect(parser.trimToLines(data).toString()).toBe(['1. Game Concepts', '100. First', '100.1. Test', '100.1a Test2'].toString())
});

test('Seperates the id value and text value of a line', () => {
    let line1 = '1. Game Concepts'
    let line2 = '100. Basics'
    let line3 = '100.1. Rule'

    expect(parser.tokenize(line1).toString).toBe({id: '1.', text: 'Game Concepts'}.toString)
    expect(parser.tokenize(line2).toString).toBe({id: '100.', text: 'Basics'}.toString)
    expect(parser.tokenize(line3).toString).toBe({id: '100.1.', text: 'Rule'}.toString)
});

test('Extracts chapter id from token id', () => {
    let id = '1.'
    let id2 = '100.'
    let id3 = '100.1'
    let id4 = '101.1a'
    let id5 = '123'

    expect(parser.extractChapterId(id)).toEqual(1)
    expect(parser.extractChapterId(id2)).toEqual(100)
    expect(parser.extractChapterId(id3)).toEqual(100)
    expect(parser.extractChapterId(id4)).toEqual(101)
    expect(parser.extractChapterId(id5)).toEqual(NaN)
})

test('Extracts rule id from token id', () => {
    let id = '1.'
    let id2 = '100.'
    let id3 = '100.1'
    let id4 = '101.1a'
    let id5 = '123'

    expect(parser.extractRuleId(id)).toEqual(undefined)
    expect(parser.extractRuleId(id2)).toEqual(undefined)
    expect(parser.extractRuleId(id3)).toEqual('1')
    expect(parser.extractRuleId(id4)).toEqual('1a')
    expect(parser.extractRuleId(id5)).toEqual(undefined)
})