

class Tuple {
    constructor(chapterKey, ruleKey) {
        this.chapterKey = chapterKey
        this.ruleKey = ruleKey
    }
}

class Chapter {
    constructor(name) {
        this.name = name
        this.rules = new Map
    }

    addRule(id, description) {
        this.rules.set(id, description)
    }
}

class Rulebook {

    constructor() {
        this.chapters = new Map
    }

    contains(search) {
        let tuples = []

        for(let chapterKey of this.chapters.keys()) {
            for(let [ruleKey, ruleValue] of this.chapters.get(chapterKey).rules.entries()) {
                if(ruleValue.toLowerCase().includes(search)) tuples.push(new Tuple(chapterKey, ruleKey))
            }
        }

        return tuples
    }

    containsSpecific(search, tuples) {

        let newTuples = []

        for(let tuple of tuples) {
            if(this.chapters.get(tuple.chapterKey).rules.get(tuple.ruleKey).toLowerCase().includes(search)) newTuples.push(tuple)
        }

        return newTuples
    }

    addChapter(id, name) {
        this.chapters.set(id, new Chapter(name))
    }

    addRule(id, description, chapterId) {
        this.chapters.get(chapterId).addRule(id, description)
    }

}

export default Rulebook